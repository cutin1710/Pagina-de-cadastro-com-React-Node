const express = require('express')

const routes = express.Router()
const users = [{
    id: 1,
    name: 'Gabriel',
    Email: 'gcutin@gmail.com',
    Password: '123'
}]

routes.post('/login', (req, res) => {
    const {Email, Password} = req.body

    const user = users.find(user => user.Email === Email && user.Password === Password)
    if (user) {
        return res.status(200).json(user)
    }
    return res.status(401).json({ message: 'Invalid credentials' })

    res.send(Email)
})

module.exports = routes