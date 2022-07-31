import mongoose from 'mongoose';

const db = async () => {
  await mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoose;
};

export default db;
