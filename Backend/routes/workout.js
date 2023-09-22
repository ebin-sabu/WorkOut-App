const express = require('express')

const {
    createWorkout,
    getAllWorkouts,
    getAWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


const router = express.Router()
//GET All Workouts
router.get('/', getAllWorkouts)

//GET One Workout
router.get('/:id', getAWorkout)

//Make A Workout
router.post('/', createWorkout)


//Delete A Workout
router.delete('/:id', deleteWorkout)

//Update A Workout
router.patch('/:id', updateWorkout)

module.exports = router