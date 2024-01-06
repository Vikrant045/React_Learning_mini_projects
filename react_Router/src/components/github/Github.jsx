import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github(){
    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //         setData(data)
    //         console.log(data)
    //     })
    // },[])
     const data = useLoaderData();
     console.log(data)
    return (
        <div className="bg-green-700 text-white p-4 text-3xl text-center">
         Github Followers :{data.followers}
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}