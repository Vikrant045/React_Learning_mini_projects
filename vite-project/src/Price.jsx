 export default function Price({oldPrice,newPrice}){

    let oldStyles={
        textDecorationLine: "line-through",
    }
    return (
        <div>
            <span style={oldStyles}>{oldPrice}</span>
           <b><span> {newPrice}</span></b> 
        </div>
    );
}