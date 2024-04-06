// CLIENT SIDE RENDERING CODE

import { list } from "postcss";


// "use client"

// import { useEffect, useState } from "react";

// export default function Home() {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//         const res = await fetch("https://dummyjson.com/products");
//         const data = await res.json();
//         console.log(data)
//         setProduct(data.products);
//       }

//     fetchData();
//   }, []);

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
//       {/* <Counter/> */}
//       <h1 className="font-bold text-5xl">Products List</h1>
//       <ul>
//         {product.map((item, index) => (
//           <li key={index}>
//             <img src={item.images[0]}></img>
//             Name :- {item.title}</li>
//         ))}
//       </ul>
//     </main>
//   );
// }




// SERVER SIDE RENDERING CODE

// async function loadData(){
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();
//   // console.log(data)
//   return data.products;
// }

// export default async function Home(){

//   let pro = await loadData();
//   return( 
//     <div>
//     <h1 className="font-bold text-5xl">ProductsList</h1>
//     <br/>
//     <ul>
//       {

//         pro.map((item) => (<li key={item.id}>
//                       <img src={item.thumbnail}></img>
//                       <h2 className="font-bold text-2xl">{item.title}</h2>
//                       <p>{item.description}</p><br/></li>)
//         )

//       }
//     </ul></div>
//   )
// }



// SERVER SIDE RENDERING DATA AND CLIENT SIDE BUTTON HANDLING


import ProductButton from "./product";

async function loadData(){
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  // console.log(data)
  return data.products;
}

export default async function Home(){

  let pro = await loadData();
  return( 
    <div>
      <h1 className="font-bold text-5xl">ProductsList</h1>
      <br/>
      <ul>
        {
          pro.map((item) => (
            <div key={item.id}> {/* Add key prop */}
              <img src={item.thumbnail} alt={item.title} /> {/* Add alt attribute */}
              <h2 className="font-bold text-2xl">{item.title}</h2>
              <p>{item.description}</p><br/>
              <ProductButton price={item.price} />
            </div>
          ))
        }
      </ul>
    </div>
  )
}
