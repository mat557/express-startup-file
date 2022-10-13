const express = require('express');
const router = express.Router();
const getRequestController = require('../../controllers/getAllRequest.js');
const putRequest = require('../../controllers/putRequestController.js');
const patchRequest = require('../../controllers/patchRequestController.js');

//all get request
router.route('/').get(getRequestController.getAllUsers)
router.route('/getUser/:email').get(getRequestController.getSingleUser)
router.route('/courses').get(getRequestController.getAllCourse)
router.route('/singleCourse/:id').get(getRequestController.getSingleCourse)
router.route('/singleEnrole/:email').get(getRequestController.getSingleEnrole)
router.route('/enroleByCondition').get(getRequestController.getEnroleByCondition)
router.route('/comment').get(getRequestController.getAllComment)
router.route('/countComment').get(getRequestController.getCommentCount)
router.route('/getEnroled/:serial').get(getRequestController.getSingleEnrol)
router.route('/blog').get(getRequestController.getAllBlog)
router.route('/teacherDoc/:email').get(getRequestController.getTeacherByID)


//all put request 
router.route('/enroleOne').put(putRequest.putToEnrole)
router.route('/postBlog').put(putRequest.putBlogPost)
router.route('/addCourse').put(putRequest.addCourse)
router.route('/addCourse').put(putRequest.addCourse)
router.route('/teacherDoc').put(putRequest.teacherRequest)
router.route('/addUser/:email').put(putRequest.addUser)


//all patch request 
router.route('/updateSeat/:id').patch(patchRequest.updateSeatNumber)
router.route('/updateProfile/:email').patch(patchRequest.updateProfileData)
router.route('/addComment/:email').patch(patchRequest.updateAndAddComment)


module.exports =  router;