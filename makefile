##Running Flask

intall:
	(cd flaskvue && npm install) &
	(pip install -r requirements.txt)

run:
	(cd flaskvue && npm run dev) &
	(FLASK_APP=index.py FLASK_ENV=development flask run)