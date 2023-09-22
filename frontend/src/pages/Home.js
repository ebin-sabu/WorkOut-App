import { useEffect} from "react"
import WorkoutInfo from '../components/WorkoutInfo'
import WorkoutForm from "../components/WorkoutForms"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
const Home = () =>{
    const { workouts, dispatch } = useWorkoutsContext()

    useEffect(() => {
        const fetchWorkouts = async () =>{
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchWorkouts()
    }, [dispatch])

    return(
        <div className="home">
            <WorkoutForm />
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutInfo key={workout._id} workout = {workout} />
                ))}
            </div>
        </div>
    )
}

export default Home