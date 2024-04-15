import { useState, useEffect } from 'react'; // Import des hooks useState et useEffect de React
import { useParams,useNavigate } from 'react-router-dom'; // Import du hook useParams de react-router-dom
import { getUserAverageSessions } from "../ServiceAPI/ServiceAPI";


function MyAverageSessions() {
    const [averageSessionsData, setAverageSessions] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams() 
  
    useEffect(() => {
        getUserAverageSessions(id)
        .then(averageSessionsData => setAverageSessions(averageSessionsData))
        .catch(() => navigate('/Error'))
    }, [id, navigate])
  
    return averageSessionsData
  }
// Export du hook personnalisé 
export default MyAverageSessions