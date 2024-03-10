import { useState, useEffect } from 'react';
import {getUserActivity} from "../ServiceAPI/ServiceAPI";
import { useParams } from "react-router-dom";

function MyActivity(){
    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
		const getData = async () => {
			const request = await getUserActivity(id);
			if (!request) return alert('data error');
			
			setData(request.data.sessions);
		};
		getData();
	}, [id]);
	if (data.length === 0) return null;
	//format data.day
	for (let i = 0 ; i < data.length ; i ++){data[i].day = i + 1;}
	//console.log(data)
}

export default MyActivity;