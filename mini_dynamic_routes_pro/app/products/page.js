import ProductShow from "../Components/ProductShow";
import ProductButton from "../Components/ProductButton";



async function getProduct(){
    const res = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
    const data = await res.json();
    console.log(data.products);
    return data.products ;
}

export default async function Products() {
    const pro = await getProduct();
    console.log(pro[0]);
  return (
    <div>
        <h1>Products List</h1>
      {
        pro.length > 0 && (
            pro.map(({id,title,price})=>{
                return (<>
                <ProductShow key = {id}  title={title} price={price}/>
                <ProductButton id ={id} />
                        </>)
            })
        )
      }
    </div>
  )
}
