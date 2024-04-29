const express = require('express')

const routes = express.Router()
const users = [
    {
        id: 1,
        name: 'Gabriel',
        email: 'gcutin@gmail.com',
        password: '123'
    },
    {
        id: 2,
        name: 'Pedro',
        email: 'pedro@gmail.com',
        password: '123'
    }    
]

routes.post('/login', (req, res) => {
    const {email, password} = req.body

    const user = users.find(user => user.email === email && user.password === password)
    if (user) {
        return res.status(200).json(user)
    }
    return res.status(401).json({ message: 'Invalid credentials' })

    res.send(email)
})

module.exports = routes