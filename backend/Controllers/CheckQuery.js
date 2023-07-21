import pkg from 'mongodb';
const {MongoClient} = pkg;

// const db = "mongodb://localhost:27017";

export const CheckQuery = async (req, res) => {
  const client = await MongoClient.connect("mongodb://localhost:27017");
  // console.log('Database Working');
  const db = client.db("test");
  const collection = db.collection("users");
  // console.log(collection);
  const pipeline = [
    {
      $group: {
        _id: {
          name: "$name"
        },
        count: {
          $sum: 1
        }
      }
    },
    {
      $match: {
        count: {
          $gt: 1
        }
      }
    }
  ];

  // console.log("working")
  const cursor = collection.aggregate(pipeline);


  console.log(pipeline);

  cursor.on('data', (document) => {
    console.log(document,"Cursor Working");
  });

  cursor.on('end', () => {
    client.close();
  });

  cursor.next();
};



export default CheckQuery;

