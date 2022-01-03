
const express = require ("express")
const router = express.Router()
const Pizza = require('../models/pizzaModel')

router.get("/getallpizzas" , async(req, res) => {

    try {
        const pizzas = await Pizza.find({})
        res.send(pizzas)
    } catch (error) {
        res.status(400).json({message:error})
    }
})

try {
    router.post("/addpizza" ,async (req,res) => {
        const pizza = req.body.pizza;
    
        const newPizza = new Pizza({
            name:pizza.name,
            image:pizza.imahe,
            varients :['small' ,'medium' ,'large'],
            description : pizza.description,
            category : pizza.category,
            prices:[pizza.prices]
        })
        await newPizza.save()
        res.send('pizza added successfully')
    })
} catch (error) {
    return res.status(400).json({message : error})
    
}
 

router.post("/getpizzabyid" ,async(req,res) => {
    const pizzaid = req.body.pizzaid

    try {
        const pizza = await Pizza.findOne({_id : pizzaid})
   res.send(pizza) 
    } catch (error) {
        return res.status(400).json({message : error})
    }
})


router.post("/editpizza" , async (req,res) => {
    const editedPizza = req.body.editedPizza

    try {
        const pizza = await  Pizza.findOne({_id : editedPizza._id})
    
        pizza.name = editedPizza.name,
        pizza.description = editedPizza.description,
        pizza.image = editedPizza.image,
        pizza.category= editedPizza.category,
        pizza.prices = [editedPizza.prices]

       await pizza.save()
       res.send('pizza edited successfully')
     } catch (error) {
        res.status(400).json({message : error})
    }
})

router.post("/deletepizza" , async (req,res) => {

    const pizzaid = req.body.pizzaid

    try {
        await Pizza.findOneAndDelete({_id : pizzaid})
        res.send('Pizza deleted')
    } catch (error) {
        return res.status(400).json({message:error})
    }
})
module.exports = router

