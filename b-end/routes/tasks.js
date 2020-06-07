const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks_controller');

router.get('/profile/:id', tasksController.profile);
router.delete('/destroy/:id', tasksController.destroy);
router.post('/create', tasksController.create);
router.put('/profile/:id', tasksController.update);

module.exports = router;