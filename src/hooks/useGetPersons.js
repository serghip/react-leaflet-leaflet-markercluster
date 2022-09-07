import { useEffect, useState } from "react";
import axios from 'axios';

const useGetPersons = (API) => {
	const [persons, setPersons] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setPersons(response.data);
	}, []);

	return persons;
};


export default useGetPersons;
