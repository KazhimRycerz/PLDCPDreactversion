import mongoose from "mongoose";
import connectMongoose from "../util/connectMogoose.js";

const isConnected = await connectMongoose();

if (!isConnected) {
   process.exit("Exit because could not connect to mongodb")
 }

 async function insertMovies(){
   const movies = [
     {
       _id: new mongoose.Types.ObjectId("6284e2d58d762ce79e828fef"), // wir vergeben die ObjectId hier von Hand (nicht automatisch)       
       title: "Where Are My Children?",
       year: 2016,
       languages: ["English", "German", "Spanish"],
       runtime: 102
     },
     {
       _id: new mongoose.Types.ObjectId("6284e31f6142de9b3743017f"),
       title: "Foolish Husbands",
       year: 1922,
       languages: ["English", "German"],
       runtime: 124
     },
     {
       _id: new mongoose.Types.ObjectId("6284e32d3348ce8b8cc5e1ca"),
       title: "Divine Trash",
       year: 1998,
       languages: ["English"],
       runtime: 97
     }
   ];
 
    // Jetzt die Movies in die Datenbank einfügen
    try {
     const res =  await mongoose.connection.collection("movies").insertMany(movies);
     console.log({res})
   } catch (error) {
     console.error(error);
   }
 
 }

 async function insertComments() {
   const comments = [{
     _id: new mongoose.Types.ObjectId("6284e49d40e221cb6f7fb045"),
     name: "Alliser Thorne",
     email: "owen_teale@gameofthron.es",
     movie_id: new mongoose.Types.ObjectId("6284e2d58d762ce79e828fef"), // diese id findest du unten bei den movies wieder
     text: "Richtig guter Film, wenn man betrunken ist! Disclaimer: Don't drink and drive!",
     date: 394816241000
   },
   {
     _id: new mongoose.Types.ObjectId("6284e4a7a1be41ea1a23754b"),
     name: "John Bishop",
     email: "john_bishop@fakegmail.com",
     movie_id: new mongoose.Types.ObjectId("6284e2d58d762ce79e828fef"), // diese id findest du unten bei den movies wieder
     text: "Naja, die Socken hat der Film mir nicht ausgezogen. Aber das ist auch ganz gut, denn es ist kalt",
     date:72283973000
   },
   {
     _id: new mongoose.Types.ObjectId("6284e4b559f611162acd68c6"),
     name: "Kelsey Smith",
     email: "kelsey_smith@fakegmail.com",
     movie_id: new mongoose.Types.ObjectId("6284e31f6142de9b3743017f"), // diese id findest du unten bei den movies wieder
     text: "Ich fand den Film langweilig. Aber ich benutze aktuell meine Waschmaschine als Fernseher. Vielleicht liegt es daran.",
     date: 136774699000
   },
   {
     _id: new mongoose.Types.ObjectId("6284e4c482ae6d2df3c693a9"),
     name: "Ronald Cox",
     email: "ronald_cox@fakegmail.com",
     movie_id: new mongoose.Types.ObjectId("6284e32d3348ce8b8cc5e1ca"), // diese id findest du unten bei den movies wieder
     text: "Sooo viel gelacht, dass ich zwischendurch brechen musste. Zum Glück hab ich einen Hund...",
     date: 385729960000
   }];   
 }

 try {
  const res =  await mongoose.connection.collection("comments").insertMany(comments);
  console.log({res})
} catch (error) {
  console.error(error);
}


insertComments()
insertMovies();