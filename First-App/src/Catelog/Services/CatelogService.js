var products = [
  { id: "1", title: "nailPaint", price: 10, quantity: 5000 },
  { id: "2", title: "Ear Ring", price: 10, quantity: 1250 },
  { id: "3", title: "Necklace", price: 10, quantity: 1250 },
  { id: "4", title: "watch", price: 10,  quantity: 1250 },
  { id: "5", title: "braclet", price: 10, quantity: 1250 },
];



const CatelogService ={
    getAll()
    {
        return products;
    },

    getById(id)
    {
        var product=products.find((p)=>(p.id==id));
        return product;
    },

    insert(product)
    {
        products.push(product);
    },

    update(product)
    {
        products.filter((p)=>(p.id==product.id));
        products.push(product);
    },

    delete(product)
    {
        products.filter((p) => p.id == product.id);
    }
}

export default CatelogService;