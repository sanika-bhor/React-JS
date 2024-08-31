class InventatoryManagement{

    constructor()
    {
        this.products = [
           {id: 1, title: "naipaint", price: 30},
          { id: 2, title: "Watch", price: 550}
        ]
    }

    static getManager()
    {
        let mgr=new InventatoryManagement();
        return mgr;
    }
    getAll()
    {
        return this.products;
    }

    getById(id)
    {
        let product=this.products.find((p)=>(p.id==id));
        return product;
    }

    insert(product)
    {
        this.products.push(product);
    }
    update(product)
    {
        this.products.filter((p)=>(p.id!=product.id));
        this.products.push(product);
    }

    delete(id){
        this.products.filter((p)=>(p.id!=id));
    }
}
export default InventatoryManagement;