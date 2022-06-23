const express = require("express")
const Contact = require('../models/contactModel')

const mainRouter = express.Router()

//landing page
mainRouter.get('/', (req, res) => {
	res.render('home')
})

//about page
mainRouter.get('/about', (req, res) => {
	res.render('about')
})

//contact page
mainRouter.route('/contact')
  .get((req, res) => {
	res.render('contact')
})
  .post(async(req, res) => {
  	const {name, email, decription} = req.body
  	 try{
  	 	const newContact = new Contact({name, email, description})
  	 	const contact = await newContact.save()
  	 	res.redirect("/contact")
  	 }catch(err){
  	 	res.render("contact")
  	 }
  	res.send("post")
  console.log(req.body)
  })

module.exports = mainRouter