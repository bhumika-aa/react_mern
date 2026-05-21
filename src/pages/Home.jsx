import React from 'react'

const Home = () => { 

  // const product = {
  //   name : "BBBB",
  //   price: 200,
  //   description: "mimi"}

  // console.log("Product",product.name);

  //let name = "bhumika";


  const product = [
    {
      name : "Apple",
      Price : 200,
    },

    {
      name : "Banana",
      Price : 100,
    },

    {
      name : "Guava",
      Price : 200,
    },

    {
      name : "Mango",
      Price : 250,
    },

  ];

  console.log(product[3]);
  console.log(product[3]?.name); // Logs "Mango"
  

    
  return (
    <>
    {/*\<h1>My name is {name}.</h1> */}
    {/* Map through products and display them */}

    { product.map ((abc) => (

      console.log(abc.name)
    ))}
    <div>Home</div>
    </>
  )
}

export default Home