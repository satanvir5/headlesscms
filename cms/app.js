// const express = require('express');
// const app = express();
// // var router = express.Router();

// const contentRoutes = require('./routes/contentRoutes'); // Adjust the path as needed
// // Middleware to parse JSON request bodies
// app.use(express.json());

// // Register routes
// app.use('/api', contentRoutes); // Make sure '/api' or any other base path matches your API call

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


import app from "./app";
import logger from "./shared/utils/logger";
import { ENV_CONFIG } from './config/environment';

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    logger.info(`${ENV_CONFIG.APP_NAME} is successfully initiated on port: ${port}`);
});