import { useEffect, useState } from "react";


const useGetUser = () => {

    const [usersData,setUsers] = useState()

    useEffect(()=>{

        fetch('https://dummyjson.com/users')
        .then(res=>res.json())
        .then(data => setUsers(data))

    },[])
    

    return [usersData]

};

export default useGetUser;