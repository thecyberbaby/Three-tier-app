const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://mongodb-svc:27017'; // Update with your MongoDB service URL
const dbName = 'todo';

const tasks = [
  { title: 'First Task', completed: false },
  { title: 'Second Task', completed: false }
];

async function seedDatabase() {
  const client = new MongoClient(url);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db(dbName);
    const collection = db.collection('tasks');
    
    // Insert tasks if the collection is empty
    const count = await collection.countDocuments();
    if (count === 0) {
      await collection.insertMany(tasks);
      console.log('Tasks created:', tasks);
    } else {
      console.log('Tasks already exist in the database');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();
