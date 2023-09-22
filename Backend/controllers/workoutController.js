const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')

// GET A Workout --
const getAWorkout = async(req, res) =>{
    const { id } = req.params
    //Checks if valid mongoose id type 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Workout Not Found'})
    }

    const workout = await Workout.findById(id)
    //Checks if id exists
    if (!workout){
        return res.status(404).json({error: 'Workout Not Found'})
    }

    res.status(200).json(workout)
} 

// GET All Workouts --
const getAllWorkouts = async(req, res) =>{
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// Make A Workout --
const createWorkout = async(req, res) =>{
    const{title, weight, reps} = req.body
    try{
        const workout = await Workout.create({title, weight, reps})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

// Delete A Workout --
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    //Checks if valid mongoose id type 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Workout Not Found to Delete'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    //Checks if id exists
    if (!workout){
        return res.status(404).json({error: 'Workout Not Found to Delete'})
    }

    res.status(200).json(workout)

}

// Update A Workout --
const updateWorkout = async (req, res) => {
    const { id } = req.params
    //Checks if valid mongoose id type 
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Workout Not Found to Update'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if (!workout){
        return res.status(404).json({error: 'Workout Not Found to Update'})
    }
    
    res.status(200).json(workout)
}


// Export the Functions -- 
module.exports = {
    createWorkout,
    getAllWorkouts,
    getAWorkout,
    deleteWorkout,
    updateWorkout
}