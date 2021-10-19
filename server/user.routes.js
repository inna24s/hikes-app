const Router = require('express');
const router = new Router();
const userController = require('./user.controller');

router.post('/test', userController.createWish);
router.post('/getSutHikes', userController.getSutHikes);
router.get('/suggestedHikes', userController.getHikes);
router.get('/suitableHikes', userController.test);
router.get('/aboutHikes', userController.aboutHikes);
router.get('/aboutUs', userController.aboutUs);
router.get('/mainPage', userController.mainPage);
router.get('/reviews', userController.reviews);
router.get('/contacts', userController.contacts);
router.get('/test',userController.test);
router.post('/findEquip', userController.findEquip);
router.post('/findCostHike', userController.findCostHike);
router.post('/findCostTrans', userController.findCostTransfer);
router.post('/findCostNutr', userController.findCostNutrition);
router.get('/equipment', userController.test)





module.exports = router;