import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Gopinath",
      email: "gopinath@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "sooon",
      email: "sooon@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Arrow Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 900,
      countInStock: 0,
      brand: "Arrow",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Raymond Fit Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 850,
      countInStock: 15,
      brand: "Raymond",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Allen Solly Free Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 799,
      countInStock: 20,
      brand: "Allen Solly",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product",
    },
    {
      name: "Peter England Slim Pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 1100,
      countInStock: 50,
      brand: "Peter England",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Puma Slim Pant",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 1500,
      countInStock: 4,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Fit Pant",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 1499,
      countInStock: 8,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product",
    },
  ],
};

export default data;