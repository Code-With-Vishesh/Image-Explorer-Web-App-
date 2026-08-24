from pathlib import Path
path = Path(r'd:\WEB DEVELOPMENT\FRONT-END WEBSITES\HTML PROJECTS\IMAGES\new images.html')
text = path.read_text(encoding='utf-8')
for token in ['const translations={', 'function detectLanguage(){', 'const translations=', 'function detectLanguage()']:
    print(token, text.find(token))
print('--- snippet ---')
start = text.find('const translations={')
if start != -1:
    print(text[start:start+400])
else:
    print('start not found')
