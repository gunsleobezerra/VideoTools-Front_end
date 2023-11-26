##Running Flask

install:
	(cd flaskvue && npm install) &
	(poetry install)

run:
	(cd flaskvue && npm run dev) &
	(FLASK_APP=index.py FLASK_ENV=development flask run)