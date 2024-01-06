import { useState } from "react";

export default function Lottery(){
 let[lottery, setlottery] = useState("001");
 let [lottery_msg,setlottery_msg] =useState("Lottery")
 function getRandom(){
    let random_num = Math.floor(Math.random()*1000);
    let  ticket = random_num.toString().padStart(3,'0');
    console.log(ticket);
    setlottery(ticket);
    let sum=0;
    for(let i=0;i<ticket.length;i++){
        sum+= parseInt(ticket[i]);
    }
    if(sum=== 15){
        setlottery_msg("Congratulations you are winner!");
    }
    else{
        setlottery_msg("Lottery");
    }

 }
    return(
        <div>
            <h1>{lottery_msg}</h1>
            <h2>Lottery Ticket = {lottery}</h2><br /><br />
            <button onClick={getRandom}>Generate new Lottery</button>
        </div>
    );
}