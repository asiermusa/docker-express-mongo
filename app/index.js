const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = 8081

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://root:secret@mongo:27017/sample_db?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    slug: {
        type: String,
        unique: true
    },
})

const someMiddleware = (req, res, next) => {
    if (2 == 1) {
        res.status(500).send('Something broken');
    } else {
        next()
    }
}

// Create a model
const PostModel = mongoose.model('sample_collection', PostSchema, 'sample_collection');

app.post('/new', someMiddleware, (req, res) => {
    PostModel.find({
        org: 'org1'
    }, (err, response) => {
        res.status(200).send({
            response
        })
    })
})

app.listen(port, () => {
    console.log(`Example listening app at http://localhost:${port}`)
})