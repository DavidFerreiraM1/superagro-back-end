import dotenv from 'dotenv';
dotenv.config();

const config: any = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database: process.env.DB_PORT,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}

export default config;