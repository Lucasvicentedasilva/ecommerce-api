/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'



const UsersController = () => import('#controllers/users_controller')
const ProductController = () => import('#controllers/products_controller')
const SessionController = () => import('#controllers/session_controller')
const CaterogiesController = () => import('#controllers/categories_controller')


router.get('users', [UsersController, 'index'])
router.post('users', [UsersController, 'store'])
router.get('users/:id', [UsersController, 'show'])

router.get('products', [ProductController, 'index'])
router.post('products', [ProductController, 'store'])
router.put('products/:id', [ProductController, 'update'])   
router.get('products/:id', [ProductController, 'show'])
router.delete('products/:id', [ProductController, 'destroy'])

router.post('session', [SessionController, 'login'])


router.get('categories', [CaterogiesController, 'index'])
router.post('categories/create', [CaterogiesController, 'create'])
router.get('categories/:id', [CaterogiesController, 'show'])
router.delete('categories/:id/delete', [CaterogiesController, 'delete'])


