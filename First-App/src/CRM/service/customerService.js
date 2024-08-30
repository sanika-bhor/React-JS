var customers = [
  { id: "1", name: "sanika", age:19, email: "sanika@gmail.com", password: "sanika" },
  { id: "2", name: "sumit", age:19, email: "sumit@gmail.com", password: "sumit" },
  { id: "3", name: "disha", age:19, email: "disha@gmail.com", password: "disha" },
  { id: "4", name: "payal",  age:19,email: "payal@gmail.com", password: "payal" },
  { id: "5", name: "snehal", age:19, email: "snehal@gmail.com", password: "snehal" },
];

const CustomerService = {
  getAll() {
    return customers;
  },

  getById(id) {
    var customer = customers.find((p) => p.id == id);
    return customer;
  },

  insert(customer) {
    customers.push(customer);
  },

  update(customer) {
    customers.filter((p) => p.id == customer.id);
    customers.push(customer);
  },

  delete(customer) {
    customers.filter((p) => p.id == customer.id);
  },
};

export default CustomerService;
