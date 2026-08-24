(function () {
  const languages = [
    ['ar','🇸🇦','العربية','Arabic',true],['bn','🇧🇩','বাংলা','Bengali'],['cs','🇨🇿','Čeština','Czech'],['da','🇩🇰','Dansk','Danish'],['de','🇩🇪','Deutsch','German'],['el','🇬🇷','Ελληνικά','Greek'],['en','🇺🇸','English','English'],['es','🇪🇸','Español','Spanish'],['fi','🇫🇮','Suomi','Finnish'],['fil','🇵🇭','Filipino','Filipino'],['fr','🇫🇷','Français','French'],['gu','🇮🇳','ગુજરાતી','Gujarati'],['he','🇮🇱','עברית','Hebrew',true],['hi','🇮🇳','हिन्दी','Hindi'],['hu','🇭🇺','Magyar','Hungarian'],['id','🇮🇩','Bahasa Indonesia','Indonesian'],['it','🇮🇹','Italiano','Italian'],['ja','🇯🇵','日本語','Japanese'],['kn','🇮🇳','ಕನ್ನಡ','Kannada'],['ko','🇰🇷','한국어','Korean'],['ml','🇮🇳','മലയാളം','Malayalam'],['ms','🇲🇾','Bahasa Melayu','Malay'],['mr','🇮🇳','मराठी','Marathi'],['nl','🇳🇱','Nederlands','Dutch'],['ne','🇳🇵','नेपाली','Nepali'],['no','🇳🇴','Norsk','Norwegian'],['pl','🇵🇱','Polski','Polish'],['pt','🇧🇷','Português','Portuguese'],['pa','🇮🇳','ਪੰਜਾਬੀ','Punjabi'],['ro','🇷🇴','Română','Romanian'],['ru','🇷🇺','Русский','Russian'],['sv','🇸🇪','Svenska','Swedish'],['ta','🇮🇳','தமிழ்','Tamil'],['te','🇮🇳','తెలుగు','Telugu'],['th','🇹🇭','ไทย','Thai'],['tr','🇹🇷','Türkçe','Turkish'],['uk','🇺🇦','Українська','Ukrainian'],['ur','🇵🇰','اردو','Urdu',true],['vi','🇻🇳','Tiếng Việt','Vietnamese'],['zh-CN','🇨🇳','简体中文','Chinese (Simplified)'],['zh-TW','🇹🇼','繁體中文','Chinese (Traditional)']
  ].map(([code, flag, nativeName, englishName, rtl]) => ({ code, flag, nativeName, englishName, rtl: Boolean(rtl) }));
  const supported = new Set(languages.map(language => language.code));
  const cache = new Map();
  let dictionary = {};
  let activeLanguage = 'en';
  const get = (object, path) => path.split('.').reduce((value, key) => value && value[key], object);
  const localeFor = code => code === 'zh-CN' ? 'zh-Hans' : code === 'zh-TW' ? 'zh-Hant' : code;
  const normalise = code => {
    if (!code) return 'en';
    const exact = languages.find(language => language.code.toLowerCase() === code.toLowerCase());
    if (exact) return exact.code;
    const base = code.split('-')[0].toLowerCase();
    return supported.has(base) ? base : 'en';
  };
  async function load(code) {
    code = normalise(code);
    if (cache.has(code)) return cache.get(code);
    const response = await fetch(`locales/${code}/common.json`, { cache: 'force-cache' });
    if (!response.ok) throw new Error(`Missing locale: ${code}`);
    const json = await response.json();
    cache.set(code, json);
    return json;
  }
  function translate(key, fallback = '') { return get(dictionary, key) || fallback || get(cache.get('en') || {}, key) || key; }
  function apply(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(node => { const value = translate(node.dataset.i18n, node.innerHTML); if (value) node.innerHTML = value; });
    root.querySelectorAll('[data-i18n-placeholder]').forEach(node => node.setAttribute('placeholder', translate(node.dataset.i18nPlaceholder, node.getAttribute('placeholder') || '')));
    root.querySelectorAll('[data-i18n-aria-label]').forEach(node => node.setAttribute('aria-label', translate(node.dataset.i18nAriaLabel, node.getAttribute('aria-label') || '')));
  }
  function syncSelects() { document.querySelectorAll('[data-language-select]').forEach(select => { select.value = activeLanguage; }); }
  function remember(code) {
    const recent = [code, ...JSON.parse(localStorage.getItem('imageLensRecentLanguages') || '[]').filter(item => item !== code)].slice(0, 4);
    localStorage.setItem('imageLensRecentLanguages', JSON.stringify(recent));
    localStorage.setItem('imageExplorerLang', code);
    if (window.currentUser) { window.currentUser.language = code; localStorage.setItem('current_user', JSON.stringify(window.currentUser)); }
  }
  async function setLanguage(code, options = {}) {
    code = normalise(code);
    const page = document.documentElement;
    document.body.classList.add('language-transition');
    try { dictionary = await load(code); }
    catch { dictionary = await load('en'); }
    activeLanguage = code;
    const meta = languages.find(language => language.code === code) || languages[6];
    page.lang = code;
    page.dir = meta.rtl ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', meta.rtl);
    document.body.dataset.locale = localeFor(code);
    apply(); syncSelects();
    const updated = document.getElementById('footer-last-updated');
    if (updated) updated.textContent = formatDate(new Date(), { month: 'short', day: 'numeric', year: 'numeric' });
    if (!options.silent) remember(code);
    requestAnimationFrame(() => setTimeout(() => document.body.classList.remove('language-transition'), 220));
    document.dispatchEvent(new CustomEvent('imagelens:languagechange', { detail: { language: code } }));
    return code;
  }
  function formatNumber(value, options) { return new Intl.NumberFormat(localeFor(activeLanguage), options).format(value); }
  function formatDate(value, options) { return new Intl.DateTimeFormat(localeFor(activeLanguage), options || { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(value)); }
  function populateSelect(select) { select.innerHTML = languages.map(language => `<option value="${language.code}">${language.flag} ${language.nativeName} — ${language.englishName}</option>`).join(''); }
  function createPicker(container) {
    const button = container.querySelector('[data-language-trigger]'); const panel = container.querySelector('[data-language-panel]'); const search = container.querySelector('[data-language-search]'); const recent = container.querySelector('[data-language-recent]'); const list = container.querySelector('[data-language-list]');
    const render = query => { const needle = (query || '').toLocaleLowerCase(); const items = languages.filter(language => `${language.nativeName} ${language.englishName}`.toLocaleLowerCase().includes(needle)); list.innerHTML = items.map(language => `<button type="button" role="option" aria-selected="${language.code === activeLanguage}" data-language="${language.code}"><span>${language.flag}</span><span><b>${language.nativeName}</b><small>${language.englishName}</small></span></button>`).join(''); };
    const renderRecent = () => { const recentCodes = JSON.parse(localStorage.getItem('imageLensRecentLanguages') || '[]'); const items = recentCodes.map(code => languages.find(language => language.code === code)).filter(Boolean); recent.hidden = !items.length; recent.innerHTML = items.map(language => `<button type="button" data-language="${language.code}">${language.flag} ${language.nativeName}</button>`).join(''); };
    const open = value => { container.classList.toggle('open', value); button.setAttribute('aria-expanded', String(value)); if (value) { renderRecent(); render(search.value); search.focus(); } };
    button.addEventListener('click', () => open(!container.classList.contains('open'))); search.addEventListener('input', () => render(search.value));
    container.addEventListener('click', event => { const target = event.target.closest('[data-language]'); if (!target) return; setLanguage(target.dataset.language); open(false); });
    document.addEventListener('click', event => { if (!container.contains(event.target)) open(false); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') open(false); });
    document.addEventListener('imagelens:languagechange', event => { const lang = languages.find(language => language.code === event.detail.language); button.querySelector('[data-language-current]').textContent = `${lang.flag} ${lang.nativeName}`; render(search.value); });
    render('');
  }
  window.ImageLensI18n = { languages, detect: () => normalise(localStorage.getItem('imageExplorerLang') || navigator.languages?.[0] || navigator.language), setLanguage, translate, apply, formatNumber, formatDate, populateSelect, createPicker, get language() { return activeLanguage; } };
})();
