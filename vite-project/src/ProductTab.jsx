import Product from "./Product.jsx";
function ProductTab(){
   let styles={
      display:"flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems:"center",
      marginleft:"10px"
   }
return(
  <div style={styles}>
     <Product title="Bat" idx={0}/>
     <Product title="Laptop" idx={1}/>
     <Product title="Phone" idx={2}/>
  </div>
      );
}

export default ProductTab;