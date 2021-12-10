require("dotenv").config()
const express = require("express")
const app = express()
const nunjucks = require('nunjucks');
const peopleModel = require('./models/people')
const path = require('path')

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.use(express.json())
app.set('view engine', 'njk')

app.get("/people", async(request, response) => {
    try {
        const people = await peopleModel.findAll()
        return response.render('index.nunjucks', { people: people })
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "No person was created, try again"
        })
    }
})

app.post("/people", async(request, response) => {
    try {
        const { name } = request.body
        await peopleModel.create(name)
        return response.status(200).json({
            message: "Person was created successfully"
        })
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "No person was created, try again"
        })
    }
})

app.get("/people/:id", async(request, response) => {
    try {
        const { id } = request.params
        const result = await peopleModel.findOne(id)
        return response.status(200).json({
            person: result[0]
        })
    } catch (error) {
        response.status(500).json({
            status: 500,
            message: "No person was created, try again"
        })
    }
})

app.listen(process.env.NODE_LOCAL_PORT, () => {
    console.log(`[APPLICATION UP AND RUNNING ON ${process.env.NODE_LOCAL_PORT}]`)
})