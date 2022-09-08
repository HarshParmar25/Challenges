only city id 8 and 17 has movies present
show movies in cinema only shows on cinema id 22,23,24

seating plan section
city.id = 8 AND movie_id = 733 AND cinema.id = 22 AND cinema_hall.id = 82;

cinema-movie-wise-booking 
cinema id = 2369
movie id = 111


/////////////////////////////////////////////////////////////<br>
City CRUD 
GET- /city/
      res.{
            conatins all the cities
      }

POST- /city/add
      req.body{
            name:string,
            state:string
      }

PUT - /city/edit
      req.body{
            id:INT
            name:string
            state:string
      }

DEL - /city/remove
      req.body{
            id:INT
      }

//////////////////////////////////////////////////////////////<br>
CINEMA CRUD

GET- /cinema/
      res.{
            conatins all the cinema
      }

POST- /cinema/add
      req.body{
            code:string,
            name:string,
            city_id:INT, 
            address:string
      }

PUT - /cinema/edit
      req.body{
            code:string,
            name:string,
            city_id:INT, 
            address:string
            id:INT
      }

DEL - /cinema/remove
      req.body{
            id:INT
      }


//////////////////////////////////////////////////////////////////////<br>
REPORTS API
MOVIES

get all movies in a city
GET - /movie/
      req.body{
            city_id:INT
      }


get movies in a given cinema
GET - /movie/cinema
      req.body{
            id:INT 
      }
id is cinema id


buy tickets
GET - /movie/buytickets
req.body{
      city_id:INT,
      movie_id: INT, 
      cinema_id: INT, 
      cinema_hall_id: INT
}


search movie by year
GET - /movie/year/:year

search movie by name
GET - /movie/:name


List top 10 actors with highest number of movies
GET - /top-actors/


///////////////////////////////////////////////////////////////<br>
ADMIN API

Top 10 customers who has spend maximum 
GET - /admin/top-customers/


GET - /admin/cinema-wise-booking/:id
id is cinema id

Unique customers who have booked tickets 
GET - /admin/unique-customers



GET - /admin/cinema-movie-wise-booking/:cinema_id/:movie_id





//////////////////////////////////////////////////////
//////////////////////////////////////////////////////<br>
user limit and offset query params for required rows

/?limit=10&offset=3

works on 
GET - /city
GET - /cinema
GET - /movie 
GET - /movie/cinema 
GET - /movie/buytickets
GET - /movie/year/:year
GET - /movie/:name
GET - /admin/cinema-wise-booking/:id
GET - /admin/unique-customers
GET - /admin/cinema-movie-wise-booking/:cinema_id/:movie_id