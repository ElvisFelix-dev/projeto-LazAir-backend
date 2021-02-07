const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const path = require('path')

const routes = require('./routes')

const app = express()

mongoose.connect("mongodb+srv://devhouse:devhouse@devhouse.zxkf1.mongodb.net/devhouse?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'avatar')));
app.use(routes)

app.listen(3333)
