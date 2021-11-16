const CategorySchema = require('../models/CategorySchema')


const saveCategory =(req,res)=>{
    const category = new CategorySchema({category: req.body.category});

    category.save().then(saveResponse => {
        res.status(200).json({"message": 'Success', "state": true})
    }).catch(responseError => {
        res.status(500).json({"message": 'Internal Server Error', "state": false, "error": responseError})
    })
}

const getAllCategory = async ( req , res ) => {
    try {
        const categorys = await CategorySchema.find()
        res.status(200).json({message: "Success",state:true,data: categorys})
    } catch (error) {

    }
}

module.exports={
    saveCategory,
    getAllCategory
}