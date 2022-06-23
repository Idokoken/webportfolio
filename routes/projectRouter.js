const express = require("express")

const projectRouter = express.Router()

//all projects
projectRouter.get('/', (req, res) => {
	res.render('projects/projects')
})

//project one
projectRouter.get('/project1', (req, res) => {
	res.render('projects/project1')
})

//project two
projectRouter.get('/project2', (req, res) => {
	res.render('projects/project2')
})

//project three
projectRouter.get('/project3', (req, res) => {
	res.render('projects/project3')
})

//project four
projectRouter.get('/project4', (req, res) => {
	res.render('projects/project4')
})



module.exports = projectRouter