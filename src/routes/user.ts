import express, { Router } from 'express'
import controller from '../controllers/user'

const router: Router = express();

// functions for each route are handled by the user controller

router.get('/register', controller.register);
router.get('/login', controller.login);
router.get('/read', controller.read);
router.get('/remove', controller.remove);
router.get('/update', controller.update);
router.get('/validate', controller.validate);

export = router;