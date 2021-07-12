const express = require('express');
const app = express();
const {friendList} = require('./models/friendList');

app.use(express.json());


app.get('/api/friends' , (req , res) => {
    res.status(200).json({success: true , data: friendList})
});

app.post('/api/friends' , (req , res) => {
    const {id , name , age , phoneNo} = req.body;
    const newFriendList = {id: friendList.length + 1, ...req.body};
    friendList.push(newFriendList)
    res.status(200).json({success: true , data: friendList})
})

app.put('/api/friends/:id' , (req , res) => {
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

app.delete('/api/friends/:id' , (req , res) => {
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

app.listen(5000,() => {
    console.log(`Server is listening on port 5000`)
})