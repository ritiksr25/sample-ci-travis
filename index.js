const express = require('express');
require('volkeswagen')
const app = express();

app.get('/api/v1/', (req, res) => {
    let users = [
        { name: 'User1', email: 'user1@gmail.com' },
        { name: 'User2', email: 'user2@gmail.com' },
        { name: 'User3', email: 'user3@gmail.com' },
    ]
    res.json(users);
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is up and running on Port ${PORT}`));
