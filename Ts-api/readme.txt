only city id 8 and 17 has movies present 

show movies in cinema only shows on cinema id 22,23,24

seating plan section city.id = 8 AND movie_id = 733 AND cinema.id = 22 AND cinema_hall.id = 82 show.id = 1,19,37,55 
?cityid=8&movieid=733&cinemaid=22&cinemahallid=82&showid=1

cinema-movie-wise-booking cinema id = 111 movie id = 2369

<!-- ####################################################  -->

POST - /login
      req.body{ 
            username:string, 
            password:string 
            }

user can access all paths acept all "/admin" paths and database update paths (city- /add, /edit, /remove) (cinema- /add,
/edit, /remove)


GET - /loout

<!-- ####################################################  -->

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

<!-- ####################################################  -->

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

<!-- ####################################################  -->

REPORTS API MOVIES

get all movies in a city 
GET - /movie/ 
      req.query{ 
            cityid:INT 
            }

get movies in a given cinema 
GET - /movie/cinema 
      req.query{ 
            id:INT
             } 
      id is cinema id

buy tickets 
GET - /movie/buytickets 
      req.query{ 
            cityid:INT, 
            movieid: INT, 
            cinemaid: INT, 
            cinemahallid: INT 
            showid:INT
            }

search movie by year 
GET - /movie/search-by-year/?year=

search movie by name 
GET - /movie/search-by-name/?name=

List top 10 actors with highest number of movies 
GET - /top-actors/

<!-- ####################################################  -->

reports API

Top 10 customers who has spend maximum 
GET - /reports/top-customers/

total bookings of each cinemas
GET - /reports/cinema-wise-booking/


Unique customers who have booked tickets 
GET - /reports/unique-customers

GET - /reports/cinema-movie-wise-booking/?cinemaid= &movieid=

<!-- ####################################################  -->

user can limit and offset query params for required rows

/?limit=10&offset=3

works on 
GET - /city 
GET - /cinema 
GET - /movie 
GET - /movie/cinema 
GET - /movie/buytickets 
GET - /movie/search-by-name
GET - /movie/search-by-year
GET - /reports/cinema-wise-booking 
GET - /reports/unique-customers 
GET -/reports/cinema-movie-wise-booking




///////////////////////////////////////////////////////////////////////////////
to get movies by cinema hall id

SELECT DISTINCT movie.id, movie.name, movie.release_date, movie.duration,movie.description, movie.certificate FROM movie INNER JOIN `show` ON movie.id = `show`.movie_id INNER JOIN cinema_hall ON `show`.cinema_hall_id = cinema_hall.id  WHERE cinema_hall.id = ?

cinema_hall.id   82,142






