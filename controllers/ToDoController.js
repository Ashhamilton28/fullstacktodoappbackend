const ToDoModel = require('../models/ToDoModel')




module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo =  (req, res) => {

    const { text } = req.body

    ToDoModel
        .create({ text })
        .then((data) => {
            console.log('To do was successful...')
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err))
}

module.exports.deleteToDo = (req, res)=>{
    const{_id} = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=> res.set(201).send('Deleted...'))
    .catch((err)=>console.log(err))
}


module.exports.updateToDo = async(req, res)=>{
    const{_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.set(201).send('Updated...'))
    .catch((err)=>console.log(err))
}

