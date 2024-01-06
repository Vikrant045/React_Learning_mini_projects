import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {id}= useParams();
    return (
        <div className="bg-green-700 text-white p-4 text-3xl text-center">
            Vikrant : {id}
        </div>
    )
}