const express = require('express');
const router = express.Router();
let friendList = require('../models/friendList');


router.get('/' , (req , res) => {
    res.status(200).json({success: true , data: friendList})
});

router.post('/' , (req , res) => {
    const friend = req.body;
    const id = friendList.length + 1
    const newFriendList = {id, ...friend};
    friendList.push(newFriendList)
    res.status(200).json({success: true , data: friendList})
});
router.put('/:id' , (req , res) => {
    const {id} = req.params
    const { name , age , phoneNo} = req.body
    const friend = friendList.find(friend => friend.id === Number(id))
    if (!friend) {
        res.status(400).json({ success: false , data: `No product with this  id:${id}`})
    }

    const updatedFriendList = friendList.map((friend) =>{
        if (friend.id === Number(id)) {
            friend.id = Number(id),
            friend.name = name,
            friend.age = age,
            friend.phoneNo = phoneNo
        }
        return friend
    })
    res.status(200).json({success : true , data: updatedFriendList})
})

router.delete('/:id' , (req , res) => {
    const {id} = req.params
    const { name , age , phoneNo} = req.body
    const friend = friendList.find(friend => friend.id === Number(id))
    if (!friend) {
        res.status(400).json({ success: false , data: `No product with this  id:${id}`})
    }

    const updatedFriendList = friendList.filter((friend) => 
        (friend.id !== Number(id))
    )
    res.status(200).json({success : true , data: updatedFriendList}) 
})


module.exports = router