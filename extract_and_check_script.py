from pathlib import Path
import re, sys
path = Path(r'd:\WEB DEVELOPMENT\FRONT-END WEBSITES\HTML PROJECTS\IMAGES\new images.html')
text = path.read_text(encoding='utf-8')
match = re.search(r'<script>([\s\S]*)</script>', text, re.I)
if not match:
    print('no script block found')
    sys.exit(1)
script = match.group(1)
out_path = Path(r'd:\WEB DEVELOPMENT\FRONT-END WEBSITES\HTML PROJECTS\IMAGES\inline_script.js')
out_path.write_text(script, encoding='utf-8')
print('wrote', out_path)
