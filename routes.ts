import { Router }   from 'https://deno.land/x/oak/mod.ts'
import { getProducts, 
         getProduct, 
         addProduct, 
         updateProduct, 
         deleteProduct 
        }  from './controllers/products.ts'

import messages     from './messages.ts';

const router = new Router()

router.get('/', ( {response}:{response:any} ) => {
    response.body = {
        success: true,
        data: [ "HTTP GET       /api/v1/products",
                "HTTP GET       /api/v1/products/:id",
                "HTTP POST      /api/v1/products",
                "HTTP PUT       /api/v1/products/:id",
                "HTTP DELETE    /api/v1/products/:id"
              ],
        about : messages
    }   
})


router.get('/api/v1/products',      getProducts)
    .get('/api/v1/products/:id',    getProduct)
    .post('/api/v1/products',       addProduct)
    .put('/api/v1/products/:id',    updateProduct)
    .delete('/api/v1/products/:id', deleteProduct)

export default router