'use strict'

var express = require('express');
var UserController = require('../controllers/user');
const auth = require('../middlewares/auth');
var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './img' });

//router.post('/save-user', UserController.saveUser);
router.get('/user/:id?', auth, UserController.getUser);
router.get('/users', auth, UserController.getUsers);
router.put('/user/:id', auth, UserController.updateUser);
router.delete('/user/:id', auth, UserController.deleteUser);
router.post('/upload-image-user/:id', multipartMiddleware, UserController.uploadImage);
router.get('/get-image-user/:image', UserController.getImageFile);

router.get('/events',  (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(events)
})

module.exports = router;