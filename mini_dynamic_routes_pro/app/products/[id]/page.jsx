
async function generateStaticParams(){
    const res = await fetch('https://dummyjson.com/products?limit=10&select=title,price')
    const data = await res.json();
    console.log(data.products);
    return data.products.map((product) => {
        id : product.id.toString() 
    }) ;
}


async function getProduct(id){
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = res.json();
    return data ;
}


export default async function page({params}) {

    const pData = await getProduct(params.id);
    console.log(pData)
  return (
    <div style={{border:'2px solid white' , margin:'10px' , padding:'20px'}}>
        <img src = {pData.images[0]}></img>
        <br/>
        <h1>{pData.title}</h1>
        <h2>{pData.price}</h2>
      
    </div>
  )
}
