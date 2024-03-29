const express = require('express');
const {registerUser,postData,likePost,followUser,getFollow,getPosts,getUserFromPost,getUsers}=require('./controller/route-controller');
const router = express.Router();

router.post('/register',registerUser);

router.post('/post',postData);

router.post('/like',likePost);

router.post('/follow',followUser);

router.get('/getFollowers',getFollow);

router.get('/getPosts',getPosts);

router.get('/getUserFromPost',getUserFromPost);

router.get('/getUsers',getUsers);

module.exports=router;