import { useEffect, useState } from "react";

const User = ()=>{
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> console.log(data))
    },[]);
    return(
        <div>
            <h3>{2}</h3>
        </div>
    )
}

export default User;