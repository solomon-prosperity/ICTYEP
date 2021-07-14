const express = require('express');
const router = express.Router();
const {
    getFriends,
    getSingleFriend,
    createFriend,
    updateFriend,
    deleteFriend
}= require('../controllers/friendcontrol');


router.route('/').get(getFriends).post(createFriend)
router.route('/:id').put(updateFriend).delete(deleteFriend).get(getSingleFriend)

module.exports = router