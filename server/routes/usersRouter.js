const express = require('express')

const router = express.Router()

const user = require('../usersModel')

router.get('/', function(req,resp){
    user.find(({}), function(err,users)
    {
        if(err)
            return resp.send(err)
        else
            return resp.json(users)
    })
})


router.post('/', function(req,resp)
{
    console.log(req.body)
    const u = new user({
        Name: req.body.Name,
        Phone: req.body.Phone
    })
    u.save(function(err)
    {
        if(err)
            return resp.send(err)
        else
            return resp.send('user '+req.body.Name+' Created !')
    })

})    
        
module.exports = router
