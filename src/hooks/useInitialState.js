import useGetPersons from "./useGetPersons";

//Colocar aqui la API GET
const APIpaciente = 'http://localhost:3000/getpostspacientes';

const useInitialState = () => {
    const persons = useGetPersons(APIpaciente);
    return persons;
}

export default useInitialState;
