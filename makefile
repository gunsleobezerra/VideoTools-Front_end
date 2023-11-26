##Running Flask

install:
	(cd flaskvue && npm install)
	poetry install
	poetry shel

run_dev:
	(cd flaskvue && npm run dev) & (FLASK_APP=index.py FLASK_ENV=development flask run)

	