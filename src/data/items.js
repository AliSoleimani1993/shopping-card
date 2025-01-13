const productList = [
    {
        id: '1',
        title: 'producto:',
        price: 12000,
        image: '/images/product.jpg'
    },
    {
        id: '2',
        title: 'producto:',
        price: 17000,
        image: '/images/OML.jpg'
    },
    {
        id: '3',
        title: 'producto:',
        price: 15000,
        image: '/images/productos-omnilife.png'
    },
    {
        id: '4',
        title: 'producto:',
        price: 2000,
        image: '/images/Cosas-que-deber-8.webp'
    },
]

function getProductData(id){
  let productData = productList.find((item) => item.id === id)

  return productData
}

export { productList, getProductData }