
import mongoose from "mongoose";


const Connection = async () => {
    const DB_URI = 'mongodb://username:password@ac-row14wq-shard-00-00.pfg0wvf.mongodb.net:27017,ac-row14wq-shard-00-01.pfg0wvf.mongodb.net:27017,ac-row14wq-shard-00-02.pfg0wvf.mongodb.net:27017/?ssl=true&replicaSet=atlas-2sd8ns-shard-0&authSource=admin&retryWrites=true&w=majority';
    try {
        await mongoose.connect(DB_URI, { useUnifiedTopology:true, useNewUrlParser: true });
        console.log('priya your Database connected successfully ');


    }
    catch (error) {
        console.log('error while connecting with the database', error.message);
         
    }
}
   export default Connection;