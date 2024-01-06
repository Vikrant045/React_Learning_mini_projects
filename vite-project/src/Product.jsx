
import "./Product.css"; 
import Price from "./Price.jsx";
function Product({title,idx}){
    let old=["200","300","500"];
    let neww=["100","150","250"];
    return (
        <div className="Product">
            <h2>{title}</h2>
           <h3>description</h3>

           <Price oldPrice={old[idx]} newPrice={neww[idx]} />
        </div>
    );
}
export default Product;