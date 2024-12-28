import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  corsOrigin: process.env.CORS_ORIGIN || '*',
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/your_database',
  jwt:process.env.JWT_SECRET||"secret",
  hash:process.env.HASH_SECRET||"hash_secret"
};

export default config;