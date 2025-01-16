import "./Product.css";

/* React props */
// To-do - Fix the linting error
function Product({title = null, price = 0, features = []}){
    return (
        <div className="Product">
            <h3>Product Tile: {title}</h3>
            <h5>Product Price: {price}</h5>
            <p>{features.map((ele) => <li>{ele}</li>)}</p>
            {price > 30000 ? <p>Discount of 5%</p>:null}
        </div>
    )
}

export default Product;