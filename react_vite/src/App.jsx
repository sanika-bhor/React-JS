// import { useState } from 'react'
 import './App.css'
 import Login from './components/login'

import Products from "./components/products"

var products = [
  {
    id: 12,
    productName: "gerbera",
    discription: "wedding flower",
    price: 56,
    likes: 67567,
    imageurl: "/flowers/gerbera.jpg",
  },
  {
    id: 13,
    productName: "rose",
    discription: "valentine flower",
    price: 5,
    likes: 67567,
    imageurl: "/flowers/rose.jpg",
  },
  {
    id: 14,
    productName: "lotus",
    discription: "worship flower",
    price: 23,
    likes: 7867,
    imageurl: "/flowers/lotus.jpg",
  },
  {
    id: 15,
    productName: "jasmine",
    discription: "fregrance flower",
    price: 4,
    likes: 5670,
    imageurl: "/flowers/jasmine.jpg",
  },
  {
    id: 16,
    productName: "marigold",
    discription: "festival flower",
    price: 12,
    likes: 8900,
    imageurl: "/flowers/marigold.jpg",
  },
  {
    id: 17,
    productName: "dahlia",
    discription: "festival flower",
    price: 43,
    likes: 5645,
    imageurl: "/flowers/dahlia.jpg",
  },
];

function App() {

  return (
    <>
      <div>
        <Login/>
          {/* <Products products={products}/> */}
      </div>
      
    </>
  )
}

export default App
