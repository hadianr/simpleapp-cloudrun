// Importing necessary modules
const express = require('express');

// Creating an instance of Express application
const app = express();

// Dummy JSON data
const users = [
  { id: 1, name: 'Marselino Ferdinand', email: 'marselino@gmail.com' },
  { id: 2, name: 'Edo Febriansyah', email: 'edo@gmail.com' },
  { id: 3, name: 'Tom Haye', email: 'haye@gmail.com' },
  { id: 4, name: 'Ragnar Oratmangoen', email: 'ragnar@gmail.com' },
  { id: 5, name: 'Jay Idzes', email: 'jay@gmail.com' },
  { id: 6, name: 'Ramadhan Sananta', email: 'sananta@gmail.com'},
  { id: 7, name: 'Ernando Ari', email: 'ernando@gmail.com' },
  { id: 8, name: 'Nathan Tjoe An', email: 'nathan@gmail.com' },
  { id: 9, name: 'Sandy Walsh', email: 'sandy@gmail.com' }

];

// Define a route for fetching all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Define a route for fetching a single user by ID
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
});

// Define a route for handling 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Define the port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
});
