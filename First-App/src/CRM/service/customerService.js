var customers = [
  { id: "1", name: "sanika", email: "sanika@gmail.com", password: "sanika" },
  { id: "2", name: "sumit", email: "sumit@gmail.com", password: "sumit" },
  { id: "3", name: "disha", email: "disha@gmail.com", password: "disha" },
  { id: "4", name: "payal", email: "payal@gmail.com", password: "payal" },
  { id: "5", name: "snehal", email: "snehal@gmail.com", password: "snehal" },
];

const CustomerService = {
  getAll() {
    return customers;
  },

  getById(id) {
    var product = customers.find((p) => p.id == id);
    return product;
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
