import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// let payments = [
  
//   {
//     id: "728ed52f",
//     amount: 100,
//     status: "pending",
//     email: "m@example.com",
//   },
//   {
//     id: "a3f8e1b9",
//     amount: 150,
//     status: "pending",
//     email: "a@example.com"
//   },
//   {
//     id: "b7c4d6e3",
//     amount: 200,
//     status: "pending",
//     email: "b@example.com"
//   },
//   {
//     id: "d5a9f2c7",
//     amount: 250,
//     status: "pending",
//     email: "c@example.com"
//   },
//   {
//     id: "e2c6b4a1",
//     amount: 300,
//     status: "pending",
//     email: "d@example.com"
//   },
//   {
//     id: "f9b1d8e5",
//     amount: 350,
//     status: "pending",
//     email: "e@example.com"
//   },
  
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "a9bcd4ef",
//       amount: 150,
//       status: "success",
//       email: "john.doe@example.com",
//     },
//     {
//       id: "c5d3f2b8",
//       amount: 200,
//       status: "failed",
//       email: "jane.smith@example.com",
//     },
//     {
//       id: "e4a7c6d3",
//       amount: 120,
//       status: "pending",
//       email: "alex.brown@example.com",
//     },
    
//   // Add all other payments here...
// ];

let payments = [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      name: "Michael"
    },
    {
      id: "a3f8e1b9",
      amount: 150,
      status: "pending",
      email: "a@example.com",
      name: "Alice"
    },
    {
      id: "b7c4d6e3",
      amount: 200,
      status: "pending",
      email: "b@example.com",
      name: "Bob"
    },
    {
      id: "d5a9f2c7",
      amount: 250,
      status: "pending",
      email: "c@example.com",
      name: "Charlie"
    },
    {
      id: "e2c6b4a1",
      amount: 300,
      status: "pending",
      email: "d@example.com",
      name: "David"
    },
    {
      id: "f9b1d8e5",
      amount: 350,
      status: "pending",
      email: "e@example.com",
      name: "Emma"
    },
    {
      id: "a9bcd4ef",
      amount: 150,
      status: "success",
      email: "john.doe@example.com",
      name: "John"
    },
    {
      id: "c5d3f2b8",
      amount: 200,
      status: "failed",
      email: "jane.smith@example.com",
      name: "Jane"
    },
    {
      id: "e4a7c6d3",
      amount: 120,
      status: "pending",
      email: "alex.brown@example.com",
      name: "Alex"
    }
  ];
  

app.get('/api/payments', (req, res) => {
  res.json(payments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
