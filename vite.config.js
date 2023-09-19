import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

export default {
  root: path.join(__dirname, 'src'),
  build: {
    outDir: path.join(__dirname, 'dist'),
  },
  server: {
    host: true,
    port: process.env.VITE_PORT, // This is the port which we will use in docker
    // add the next lines if you're using windows and hot reload doesn't work
    // watch: {
    //   usePolling: true
    // }
  },
};
