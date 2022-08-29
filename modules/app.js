
const Movie = require("../movie");

async function addMovie(req,res) {
  let title = req.body.title;
  let overview= req.body.overview;
  let release_date = req.body.release_date;
  let vote_average = req.body.vote_average;
  let vote_count=req.body.vote_count;
  const movie = await Movie.findOne({
    title,
    overview,
    release_date,
    vote_average,
    vote_count
  });

  if (movie) {
    return res.status(400).send({
      status: "error",
      message: "Task already registered",
    });
  }

  await Movie.create({
    title,
    cast,
    release,
    rating
  });

  return res.status(200).send({
    status: "Successful",
    message: "Movie registered successfully.",
  });
}
async function getMovies(req,res) {
    const movies=await Movie.find();
    return res.status(200).send(movies);
}
 
async function filterMovies(req,res) {
  const { limit, page, type, q} = req.query;
  let query={};
  if (q) {
    query.Title = { $regex: q };
  }
  if (type) {
    query.Type = type
  }
    const movies=await Movie.find(query).limit(limit).skip(limit * (page - 1));
     return res.status(200).send(movies);
} 
module.exports = {
    getMovies,
    filterMovies,
    addMovie
  };