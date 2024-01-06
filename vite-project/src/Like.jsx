import { useState } from "react"

export default function Like(){
    let [isliked, setliked]=useState(false);
    let [count, setCount] = useState(0);
    function toggle(){
        setliked(!isliked);
        setCount(count+1);
    }
    return(
        <p onClick={toggle} >
             <h3>count=   {count}</h3>
            {
            isliked ?(<i className="fa-solid fa-heart"></i> )
            : (<i className="fa-regular fa-heart"></i>)
            }
        </p>
    )
   
}