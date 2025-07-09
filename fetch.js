async function fetchDataProducts(){
    const data=await fetch('https://dummyjson.com/products');
    const finalData=await data.json();
    console.log(finalData);
}
fetchDataProducts()