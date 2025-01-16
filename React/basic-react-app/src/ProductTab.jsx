import Product from "./Product"

function ProductTab(){
    return (
    <>
        {/* React props */}
        <Product  title="Laptop" price="100000" features={["High-Tech", "Durable"]}/>
        <Product title="I-pad" price="90000"></Product>
        <Product title="Apple Pencil" price="12000"></Product>
    </>
    )
}

export default ProductTab;