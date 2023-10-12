/*
[{
	"_id" : ObjectId("64e3ad1e4ff5db12d7a58e89"),
	"id" : 5,
	"url" : "http://www.tvmaze.com/shows/5/true-detective",
	"name" : "True Detective",
	"type" : "Scripted",
	"language" : "English",
	"genres" : [
		"Drama",
		"Crime",
		"Thriller"
	],
	"status" : "Running",
	"runtime" : 60,
	"premiered" : "2014-01-12",
	"officialSite" : "http://www.hbo.com/true-detective",
	"schedule" : {
		"time" : "21:00",
		"days" : [
			"Sunday"
		]
	},
	"rating" : {
		"average" : 8.3
	},
	"weight" : 99,
	"network" : {
		"id" : 8,
		"name" : "HBO",
		"country" : {
			"name" : "United States",
			"code" : "US",
			"timezone" : "America/New_York"
		}
	},
	"webChannel" : null,
	"externals" : {
		"tvrage" : 31369,
		"thetvdb" : 270633,
		"imdb" : "tt2356777"
	},
	"image" : {
		"medium" : "http://static.tvmaze.com/uploads/images/medium_portrait/0/61.jpg",
		"original" : "http://static.tvmaze.com/uploads/images/original_untouched/0/61.jpg"
	},
	"summary" : "<p>Touch darkness and darkness touches you back. <b>True Detective</b> centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case.</p>",
	"updated" : 1536053668,
	"_links" : {
		"self" : {
			"href" : "http://api.tvmaze.com/shows/5"
		},
		"previousepisode" : {
			"href" : "http://api.tvmaze.com/episodes/182325"
		},
		"nextepisode" : {
			"href" : "http://api.tvmaze.com/episodes/1519992"
		}
	}
}]
// i have these type of documents with variable values then give some practice questions on mongodb aggragation pipeline which are useful for real time application

> db.movies.aggregate([ {$match:{"rating.average":{$gt:8}}}, {$project:{name:1,language:1,rating:1}}, {$sort:{"rating.average":-1}} ]).pretty()
{
	"_id" : ObjectId("64e3aa084ff5db12d7a58e86"),
	"name" : "Person of Interest",
	"language" : "English",
	"rating" : {
		"average" : 9
	}
}
{
	"_id" : ObjectId("64e3ad1e4ff5db12d7a58e89"),
	"name" : "True Detective",
	"language" : "English",
	"rating" : {
		"average" : 8.3
	}
}
//incorrect query
// > db.movies.aggregate([ {$match:{"rating.average":{$gt:8}}}, {$project:{name:1,language:1,rating:1}}, {$sort:{"$rating.average":-1}} ])

// assert: command failed: {
// 	"ok" : 0,
// 	"errmsg" : "FieldPath field names may not start with '$'. Consider using $getField or $setField.",
// 	"code" : 16410,
// 	"codeName" : "Location16410"
// } : aggregate failed
// _getErrorWithCode@src/mongo/shell/utils.js:25:13
// doassert@src/mongo/shell/assert.js:16:14
// assert.commandWorked@src/mongo/shell/assert.js:403:5
// DB.prototype._runAggregate@src/mongo/shell/db.js:260:9
// DBCollection.prototype.aggregate@src/mongo/shell/collection.js:1212:12
// @(shell):1:1

// 2023-10-10T12:01:17.138+0530 E QUERY    [thread1] Error: command failed: {
// 	"ok" : 0,
// 	"errmsg" : "FieldPath field names may not start with '$'. Consider using $getField or $setField.",
// 	"code" : 16410,
// 	"codeName" : "Location16410"
// } : aggregate failed :



// Question 1: Retrieve the name, language, and average rating of shows that have an average rating greater than 8.0.

// Question 2: Find the total number of shows for each genre.
// for this use $unwind stage: this will seperate the document into each array element type
//unwind stage deconstruct (split) the array array into seperate elements
//then in the $group stage use $sum:1 expression to count the no of occurences of each genre
//$sort:{total:1 or -1} user to disply the document in ascending order descending order
db.movies.aggregate([
	... {$unwind:"$genres"},
	... {$group:{_id:"$genres",total:{$sum:1}}},
	... {$sort:{total:-1}}
	... ]).pretty()
	{ "_id" : "Drama", "total" : 5 }
	{ "_id" : "Science-Fiction", "total" : 2 }
	{ "_id" : "Crime", "total" : 2 }
	{ "_id" : "Thriller", "total" : 2 }
	{ "_id" : "Action", "total" : 2 }
	{ "_id" : "Horror", "total" : 1 }
	{ "_id" : "Romance", "total" : 1 }
	
//in these stages what fields you specified in the stages that specified fields will only print in the output and DO NOT PRINT ENTIRE DOCUMENT


 db.movies.aggregate([ {$unwind:"$genres"}, {$group:{_id:"$genres",total:{$sum:1}}}, {$sort:{total:-1}},{$project:{name:1,_id:1,total:1}} ]).pretty()
{ "_id" : "Drama", "total" : 5 }
{ "_id" : "Science-Fiction", "total" : 2 }
{ "_id" : "Crime", "total" : 2 }
{ "_id" : "Thriller", "total" : 2 }
{ "_id" : "Action", "total" : 2 }
{ "_id" : "Horror", "total" : 1 }
{ "_id" : "Romance", "total" : 1 }

// to print the other fields in the output document write those fields in the last stage stage at the starting stage
db.movies.aggregate([
	...   { $project: { name: 1, genres: 1, rating: 1 } },
	...   { $unwind: "$genres" },
	...   { 
	...     $group: { 
	...       _id: "$genres", 
	...       total: { $sum: 1 }, 
	...       averageRating: { $avg: "$rating.average" }
	...     } 
	...   },
	...   { $sort: { total: -1 } }
	... ]).pretty()

	{ "_id" : "Drama", "total" : 5, "averageRating" : 7.8 }
	{ "_id" : "Crime", "total" : 2, "averageRating" : 8.65 }
	{ "_id" : "Science-Fiction", "total" : 2, "averageRating" : 7.05 }
	{ "_id" : "Action", "total" : 2, "averageRating" : 8.3 }
	{ "_id" : "Thriller", "total" : 2, "averageRating" : 7.4 }
	{ "_id" : "Horror", "total" : 1, "averageRating" : 7.6 }
	{ "_id" : "Romance", "total" : 1, "averageRating" : 7.6 }
	
 db.movies.aggregate([   { $project: { name: 1, genres: 1, rating: 1 } },   { $unwind: "$genres" },   {      $group: {        _id: "$genres",        total: { $sum: 1 },        averageRating: { $first: "$rating.average" }     }    },   { $sort: { total: -1 } } ]).pretty()
	{ "_id" : "Drama", "total" : 5, "averageRating" : 6.5 }
	{ "_id" : "Science-Fiction", "total" : 2, "averageRating" : 6.5 }
	{ "_id" : "Crime", "total" : 2, "averageRating" : 9 }
	{ "_id" : "Thriller", "total" : 2, "averageRating" : 6.5 }
	{ "_id" : "Action", "total" : 2, "averageRating" : 9 }
	{ "_id" : "Horror", "total" : 1, "averageRating" : 7.6 }
	{ "_id" : "Romance", "total" : 1, "averageRating" : 7.6 }
	
// $first :The $first operator is used in the aggregation pipeline to get the value of the first document in a group
//

// Question 3: Calculate the average runtime of shows.

db.movies.aggregate([   { $project: { name: 1, genres: 1, rating: 1 } },   { $unwind: "$genres" },   {      $group: {        _id: "$genres",        total: { $sum: 1 },        averageRating: { $first: "$rating.average" }     }    },   { $sort: { total: -1 } } ]).pretty()
{ "_id" : "Drama", "total" : 5, "averageRating" : 6.5 }
{ "_id" : "Science-Fiction", "total" : 2, "averageRating" : 6.5 }
{ "_id" : "Crime", "total" : 2, "averageRating" : 9 }
{ "_id" : "Thriller", "total" : 2, "averageRating" : 6.5 }
{ "_id" : "Action", "total" : 2, "averageRating" : 9 }
{ "_id" : "Horror", "total" : 1, "averageRating" : 7.6 }
{ "_id" : "Romance", "total" : 1, "averageRating" : 7.6 }

 db.movies.aggregate([ {$project:{name:1,genres:1,runtime:1}}, {$group:{_id:"$name",averageRuntime:{$avg:"$runtime"},genres:{$sum:"$genres"}}}, {$sort:{averageRuntime:-1}} ]).pretty() 
{ "_id" : "Arrow", "averageRuntime" : 60, "genres" : 0 }
{ "_id" : "Person of Interest", "averageRuntime" : 60, "genres" : 0 }
{ "_id" : "True Detective", "averageRuntime" : 60, "genres" : 0 }
{ "_id" : "Bitten", "averageRuntime" : 60, "genres" : 0 }
{ "_id" : "Under the Dome", "averageRuntime" : 60, "genres" : 0 }

//

//print the day month and year from the given document

db.movies.aggregate([
	 {$project:{name:1,premiered:1,
		year:{$year:{ $dateFromString:{dateString:"$premiered"}}},
		month:{$month:{$dateFromString:{dateString:"$premiered"}}}, 
		day:{$dayOfMonth:{$dateFromString:{dateString:"$premiered"}}}}
	 },
	{$limit:2}
]).pretty()

{
	"_id" : ObjectId("64e3aa084ff5db12d7a58e85"),
	"name" : "Under the Dome",
	"premiered" : "2013-06-24",
	"year" : 2013,
	"month" : 6,
	"day" : 24
}
{
	"_id" : ObjectId("64e3aa084ff5db12d7a58e86"),
	"name" : "Person of Interest",
	"premiered" : "2011-09-22",
	"year" : 2011,
	"month" : 9,
	"day" : 22

}

Question 4: Get the names and premier dates of shows that premiered after 2018.

 db.movies.aggregate([
	 {$project:{
		name:1,premiered:1,status:1,
		year:{$year:{$dateFromString:{dateString:"$premiered"}}}}
	},
	{$match:{year:{$gt:2012}}}, 
	{$group:{_id:"$name",year:{$first:"$year"}, premiered:{$first:"$premiered"}}}
 ]).pretty()

{ "_id" : "Under the Dome", "year" : 2013, "premiered" : "2013-06-24" }
{ "_id" : "Bitten", "year" : 2014, "premiered" : "2014-01-11" }
{ "_id" : "True Detective", "year" : 2014, "premiered" : "2014-01-12" }


 db.movies.aggregate([ {$project:{name:1,premiered:1,status:1,year:{$year:{$dateFromString:{dateString:"$premiered"}}}}}, {$match:{year:{$gt:2012}}}, {$group:{_id:"$name",year:{$first:"$year"}, premiered:{$addToSet:"$premiered"}}} ]).pretty()
{
	"_id" : "Under the Dome",
	"year" : 2013,
	"premiered" : [
		"2013-06-24"
	]
}
{ "_id" : "Bitten", 
"year" : 2014,
 "premiered" : [ "2014-01-11" ]
 }
{
	"_id" : "True Detective",
	"year" : 2014,
	"premiered" : [
		"2014-01-12"
	]
}

// wrong query

db.movies.aggregate([ 
	{$project:{
		name:1,premiered:1,status:1,
		year:{$year:{$dateFromString:{dateString:"$premiered"}}}}
	},
	{$match:{year:{$gt:2012}}},
	{$group:{
		_id:"$name",year:"$year", premiered:"$premiered"
		}
	} 
]).pretty()

assert: command failed: {
	"ok" : 0,
	"errmsg" : "The field 'year' must be an accumulator object",
	"code" : 40234,
	"codeName" : "Location40234"
} : aggregate failed



// Question 5: Find the top 3 shows with the highest average rating.

db.movies.aggregate([ {$project:{name:1,runtime:1, averageRating:"$rating.average"}}, {$sort:{averageRating:-1}}, {$limit:3} ]).pretty()
{
	"_id" : ObjectId("64e3aa084ff5db12d7a58e86"),
	"name" : "Person of Interest",
	"runtime" : 60,
	"averageRating" : 9
}
{
	"_id" : ObjectId("64e3ad1e4ff5db12d7a58e89"),
	"name" : "True Detective",
	"runtime" : 60,
	"averageRating" : 8.3
}
{
	"_id" : ObjectId("64e3ad1e4ff5db12d7a58e88"),
	"name" : "Arrow",
	"runtime" : 60,
	"averageRating" : 7.6
}
db.movies.aggregate([
... {$sort:{rating:-1}},{$limit:3},{$project:{name:1,averageRating:"$rating.average"}} ]).pretty()
{
	"_id" : ObjectId("64e3aa084ff5db12d7a58e86"),
	"name" : "Person of Interest",
	"averageRating" : 9
}
{
	"_id" : ObjectId("64e3ad1e4ff5db12d7a58e89"),
	"name" : "True Detective",
	"averageRating" : 8.3
}
{
	"_id" : ObjectId("64e3ad1e4ff5db12d7a58e88"),
	"name" : "Arrow",
	"averageRating" : 7.6
}
//writing query in complex way

> db.movies.aggregate([ {$project:{name:1,rating:1,runtime:1, averageRating:"$rating.average"}}, {$sort:{averageRating:-1}}, {$limit:3} ]).pretty()
{
	"_id" : ObjectId("64e3aa084ff5db12d7a58e86"),
	"name" : "Person of Interest",
	"runtime" : 60,
	"rating" : {
		"average" : 9
	},
	"averageRating" : 9
}
{
	"_id" : ObjectId("64e3ad1e4ff5db12d7a58e89"),
	"name" : "True Detective",
	"runtime" : 60,
	"rating" : {
		"average" : 8.3
	},
	"averageRating" : 8.3
}
{
	"_id" : ObjectId("64e3ad1e4ff5db12d7a58e88"),
	"name" : "Arrow",
	"runtime" : 60,
	"rating" : {
		"average" : 7.6
	},
	"averageRating" : 7.6
}



// Question 6: Determine the number of shows for each network.
db.movies.aggregate([ {$project:{ name:1, network:1}}, {$group:{_id:"$network.name", totalShows:{$sum:1}}} ]).pretty()
{ "_id" : "CBS", "totalShows" : 2 }
{ "_id" : "The CW", "totalShows" : 1 }
{ "_id" : "Space", "totalShows" : 1 }
{ "_id" : "HBO", "totalShows" : 1 }

// wrong query
> db.movies.aggregate([
	... {$project:{ name:1, network:1}},
	... {$group:{_id:"network.name", totalShows:{$sum:1}}}
	... ]).pretty()
	{ "_id" : "network.name", "totalShows" : 5 }
// you need to write correct way using $ to write specified fiels

// Question 7: List the names of shows that are not in English.
db.movies.aggregate([ {$match:{language:{$ne:"English"}}} ]).itcount()
0
> db.movies.find({language:{$ne:"English"}}).count()
0


Question 8: Calculate the total weight of all shows.
> db.movies.aggregate([
	... {$group:{_id:null, totalWeight:{$sum:"$weight"}}} ]).pretty()
	{ "_id" : null, "totalWeight" : 460 }
	
// incorrect query
db.movies.aggregate([ {$project:{name:1,weight:1}}, {$group:{_id:"$weight",totalWeight:{$sum:"$weight"}}} ])
{ "_id" : 91, "totalWeight" : 91 }
{ "_id" : 75, "totalWeight" : 75 }
{ "_id" : 96, "totalWeight" : 96 }
{ "_id" : 99, "totalWeight" : 198 }

// incorrect query
db.movies.find({totalWeight:{$sum:"$weight"}}).pretty()
Error: error: {
	"ok" : 0,
	"errmsg" : "unknown operator: $sum",
	"code" : 2,
	"codeName" : "BadValue"
}
// The query you provided is attempting to find documents where the field totalWeight is equal to the result of applying the $sum operator to the weight field. However, this is not a valid MongoDB query.

Question 9: Find the show with the highest weight.

> db.movies.aggregate([{$project:{name:1,weight:1}}, {$sort:{weight:-1}},{$limit:1}]).pretty()
{
	"_id" : ObjectId("64e3ad1e4ff5db12d7a58e88"),
	"name" : "Arrow",
	"weight" : 99
}


Question 10: Get the names and URLs of shows that have an official website.

db.movies.aggregate([{$project:{name:1,url:1, _id:0}} ]).pretty()
{
	"url" : "http://www.tvmaze.com/shows/1/under-the-dome",
	"name" : "Under the Dome"
}
{
	"url" : "http://www.tvmaze.com/shows/2/person-of-interest",
	"name" : "Person of Interest"
}
{ "url" : "http://www.tvmaze.com/shows/3/bitten", "name" : "Bitten" }
{ "url" : "http://www.tvmaze.com/shows/4/arrow", "name" : "Arrow" }
{
	"url" : "http://www.tvmaze.com/shows/5/true-detective",
	"name" : "True Detective"
}

//Calculate the total number of shows for each genre:

> db.movies.aggregate([ {$unwind:"$genres"},{$group:{_id:"$genres",total:{$sum:1}}} ]).pretty()
{ "_id" : "Thriller", "total" : 2 }
{ "_id" : "Science-Fiction", "total" : 2 }
{ "_id" : "Horror", "total" : 1 }
{ "_id" : "Action", "total" : 2 }
{ "_id" : "Crime", "total" : 2 }
{ "_id" : "Romance", "total" : 1 }
{ "_id" : "Drama", "total" : 5 }

//incorrect query
 db.movies.aggregate([
	... {$unwind:"$genres"},{$group:{_id:"$genres",total:{$sum:"$genres"}}}
	... ]).pretty()
	
	{ "_id" : "Thriller", "total" : 0 }
	{ "_id" : "Science-Fiction", "total" : 0 }
	{ "_id" : "Horror", "total" : 0 }
	{ "_id" : "Action", "total" : 0 }
	{ "_id" : "Crime", "total" : 0 }
	{ "_id" : "Romance", "total" : 0 }
	{ "_id" : "Drama", "total" : 0 }
	
// how many genres are there for each movies
db.movies.aggregate([
	... {$unwind:"$genres"},
	... {$project:{name:1,genres:1}},
	... {$group:{_id:"$name",totalGenres:{$sum:1}}} 
	... ]).pretty()

	{ "_id" : "Under the Dome", "totalGenres" : 3 }
	{ "_id" : "Person of Interest", "totalGenres" : 3 }
	{ "_id" : "Bitten", "totalGenres" : 3 }
	{ "_id" : "True Detective", "totalGenres" : 3 }
	{ "_id" : "Arrow", "totalGenres" : 3 }
	*/
