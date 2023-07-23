import pkg from 'mongodb';
const {MongoClient} = pkg;

export const CheckQuery = async (req, res) => {
  const client = await MongoClient.connect("mongodb://localhost:27017");
 
  const db = client.db("test");
  const collection = db.collection("users");
 
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

  
  const cursor = collection.aggregate(pipeline);

  cursor.on('data', (document) => {
    console.log(document,"Cursor Working");
  });

  cursor.on('end', () => {
    client.close();
  });

  cursor.next();
};



export default CheckQuery;

