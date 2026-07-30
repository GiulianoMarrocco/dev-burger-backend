
import 'dotenv/config';
import express from 'express';
import routes from './routes.js';
import fileRouteConfig from './config/fileRoutes.cjs';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('./src/docs/swagger.yaml');


class App{
    constructor(){
        this.app = express();

        this.app.use(cors());
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use('/product-file', fileRouteConfig);
        this.app.use('/category-file', fileRouteConfig);
    }

    routes(){
        this.app.use(
        '/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
    );

        this.app.use(routes);
    }
}

export default new App().app;
