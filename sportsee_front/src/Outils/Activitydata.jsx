import { useState, useEffect } from 'react';
import { getUserActivity } from "../ServiceAPI/ServiceAPI";
import { useNavigate, useParams } from "react-router-dom";

function MyActivity() {
    const [activity, setActivity] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams() 
  
    useEffect(() => {
        getUserActivity(id)
        .then(activityData => setActivity(activityData))
        .catch(() => navigate('/not-found'))
    }, [id, navigate])
  
    return activity
  }

export default MyActivity;