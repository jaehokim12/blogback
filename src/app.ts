import express, { Request, Response } from 'express';
import router from './api/routes/authRoutes';
import cors from 'cors';
import config from './config';
import swaggerUi from 'swagger-ui-express';
import swaggerJson from './swagger.json';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use('/api', router);
app.listen(config.apiport, () => {
    console.log(`
    ***********************************
    server listensng port:${config.apiport}
    ***********************************
    `);
});

export default app;
