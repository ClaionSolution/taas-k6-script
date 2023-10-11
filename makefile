run:
	k6 run test.js
google:
	k6 run -e BASE_URL=https://google.com test.js

vus:
	k6 run --vus=2 --iterations=10 test.js
	# k6 run -u=2 -i=10 test.js

