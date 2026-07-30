import {Router} from 'express';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import ProductController from './app/controllers/ProductController.js';
import CategoryController from './app/controllers/CategoryController.js';
import multer from 'multer';
import multerConfig from './config/multer.cjs';
import authMiddleware from './app/middlewares/auth.js';
import adminMiddleware from './app/middlewares/admin.js';
import OrderController from './app/controllers/OrderController.js';

const routes = new Router();
const upload = multer(multerConfig);

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cadastra um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *       400:
 *         description: Dados inválidos.
 */

//Rotas publicas
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/products', ProductController.index);
routes.get('/categories', CategoryController.index);

//Rotas privadas
routes.use(authMiddleware);
routes.post('/products', adminMiddleware, upload.single('file'), ProductController.store);
routes.put('/products/:id', adminMiddleware, upload.single('file'), ProductController.update);

routes.post('/categories', adminMiddleware, upload.single('file'), CategoryController.store);
routes.put('/categories/:id', adminMiddleware, upload.single('file'), CategoryController.update);


routes.post('/orders', adminMiddleware, OrderController.store);
routes.put('/orders/:id', adminMiddleware, OrderController.update);
routes.get('/orders', OrderController.index);

    
    export default routes;
    