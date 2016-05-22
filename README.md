# search-dropdown-application

sakila-db has been deployed in ClearDB in Heroku.   
API has been depoyed in Heroku  
Link: http://search-dropdown-api.herokuapp.com  

|HTTP Method|       URL             |Function|
|-----------|-------------------|------------------|
|GET|               /search/:input|       Search countries by input%|
|GET|              /customer/:country|   Search customers by country|

Here are some test samples:

## Search countries by input%
- Example: get http://search-dropdown-api.herokuapp.com/search/un
```
[
  {
    "country": "United Arab Emirates",
    "num": 3
  },
  {
    "country": "United Kingdom",
    "num": 9
  },
  {
    "country": "United States",
    "num": 36
  }
]
```
## Search customers by country
- Example: get http://search-dropdown-api.herokuapp.com/customer/japan

```
[
  {
    "ID": 574,
    "name": "JULIAN VEST",
    "email": "JULIAN.VEST@sakilacustomer.org"
  },
  {
    "ID": 141,
    "name": "DEBBIE REYES",
    "email": "DEBBIE.REYES@sakilacustomer.org"
  },
  {
    "ID": 264,
    "name": "GWENDOLYN MAY",
    "email": "GWENDOLYN.MAY@sakilacustomer.org"
  },
  {
    "ID": 194,
    "name": "KRISTEN CHAVEZ",
    "email": "KRISTEN.CHAVEZ@sakilacustomer.org"
  }
]

```




##If you want to run it locally.

<h3>Step 1:</h3>
import sakila-db to mysql
change the db connect info in /node_mysql/index.js

<h3>Step 2:</h3> 
run /node_mysql/index.js
change api link in app.js

<h3>Step 3:</h3> 
open index.html
