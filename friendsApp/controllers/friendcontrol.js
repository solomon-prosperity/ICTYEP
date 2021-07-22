let friendList = require('../models/friendList');

const getFriends = (req , res) => {
    res.status(200).json({success: true , data: friendList})
}

const getSingleFriend = (req , res) => {
    const {id} = req.params;
    const singleFriend = friendList.find ( singleFriend => singleFriend.id === Number(id))
    if (!singleFriend) {
        res.status(400).json({ success: false , data: `No friend with this  id:${id}`})
    }
    res.status(200).json({success: true , data: singleFriend})

}

const createFriend = (req , res) => {
    const friend = req.body;
    const id = friendList.length + 1
    const newFriendList = {id, ...friend};
    friendList.push(newFriendList)
    res.status(200).json({success: true , data: friendList})
}

const updateFriend = (req , res) => {
    const {id} = req.params
    const { name , age , phoneNo} = req.body
    const friend = friendList.find(friend => friend.id === Number(id))
    if (!friend) {
        res.status(400).json({ success: false , data: `No friend with this  id:${id}`})
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
}

const deleteFriend = (req , res) => {
    const {id} = req.params
    const friend = friendList.find(friend => friend.id === Number(id))
    if (!friend) {
        res.status(400).json({ success: false , data: `No friend with this id:${id}`})
    }

    const updatedFriendList = friendList.filter((friend) => 
        (friend.id !== Number(id))
    )
    res.status(200).json({success : true , data: updatedFriendList}) 
}

module.exports = {
    getFriends,
    getSingleFriend,
    createFriend,
    updateFriend,
    deleteFriend
}