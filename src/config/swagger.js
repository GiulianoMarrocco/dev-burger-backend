import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DevBurger API',
      version: '1.0.0',
      description:
        'API REST para gerenciamento de usuários, produtos, categorias e pedidos do DevBurger.',
      contact: {
        name: 'Giuliano Marrocco',
        url: 'https://github.com/GiulianoMarrocco',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Servidor Local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  // Caminho absoluto para o routes.js
  apis: [path.resolve(__dirname, '../routes.js')],
};

const swaggerSpec = swaggerJsdoc(options);

console.log('Arquivo lido:', path.resolve(__dirname, '../routes.js'));
console.log('Swagger paths:', JSON.stringify(swaggerSpec.paths, null, 2));

export default swaggerSpec;