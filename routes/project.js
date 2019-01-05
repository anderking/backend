'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');
const auth = require('../middlewares/auth');
var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './img' });

router.post('/save-project', auth, ProjectController.saveProject);
router.get('/project/:id?', auth, ProjectController.getProject);
router.get('/projects', auth, ProjectController.getProjects);
router.get('/projects/:id', auth, ProjectController.getProjectsUser);
router.put('/project/:id', auth, ProjectController.updateProject);
router.delete('/project/:id', auth, ProjectController.deleteProject);
router.post('/upload-image-project/:id', multipartMiddleware, ProjectController.uploadImage);
router.get('/get-image-project/:image', ProjectController.getImageFile);

module.exports = router;