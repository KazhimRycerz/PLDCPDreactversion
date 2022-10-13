import mongoose from "mongoose";
import connectMongoose from "../util/connectMogoose.js"

const isConnected = await connectMongoose();

if (!isConnected) {
  process.exit("Exit because could not connect to mongodb")
}

// Um Schreibarbeit zu sparen und dennoch eine Referenz herstellen zu können, 
// erstellen wir ein nicht striktes Schema (=> schema wird von mongoose ignoriert)
const movieSchema = mongoose.Schema({}, {strict: false}); 
const MovieModel = mongoose.model("Movie", movieSchema);

const commentSchema = mongoose.Schema({
  movie_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: MovieModel // diese ID stellt eine Referenz auf einen movie dar
  }
}, {strict: false}); 
const CommentModel = mongoose.model("Comment", commentSchema);

// Mit ref sagen wir also
// das Feld "movieId" von Comment enthält eine ObjectId, die auf
// einen Movie referiert

async function showAllComments() {
  
  try {
    const comments = await CommentModel.find({})
    console.log('\n***** NICHT Populated Comments *****')
    console.log({comments})
  } catch (error) {
    console.error(error)
  }
}

async function showAllCommentsPopulated() {
  try {

    const commentsPopulated = await CommentModel
      .find({})
      .populate("movie_id");

      console.log('\n***** Populated Comments *****')
      console.log( commentsPopulated);

    const commentsPopulatedSelected = await CommentModel
      .find({})
      .populate("movie_id", "-_id title year");
      // "bevökere" das Feld movie_id mit dem title des referenzierten movies
      // _id hat Sonderstellung: wir müssen explizit mit Minus (-) sagen, dass wir _id nicht haben wollen

   

    console.log('\n***** Populated Comments Selected *****')
    console.log( commentsPopulatedSelected );

  } catch (error) {
    console.error(error)
  }
}


//showAllComments();
showAllCommentsPopulated();