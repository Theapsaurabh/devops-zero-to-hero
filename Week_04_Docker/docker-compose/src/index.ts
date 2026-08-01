import express from 'express';
import { prisma } from "./lib/prisma.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //  

//  Health check
app.get('/', (req, res) => {
  res.send('API is running...');
});


//  CREATE USER (POST)
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await prisma.user.create({
      data: { name, email }
    });

    res.status(201).json(user);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
});


//  GET ALL USERS (GET)
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
});


//  GET SINGLE USER (GET by ID)
app.get('/users/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);

    const user = await prisma.user.findUnique({
      where: { id }
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
});


//  UPDATE USER (PUT - full update)
app.put('/users/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name, email }
    });

    res.json(updatedUser);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
});


//  PARTIAL UPDATE (PATCH)
app.patch('/users/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);

    const updatedUser = await prisma.user.update({
      where: { id },
      data: req.body 
    });

    res.json(updatedUser);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
});


//  DELETE USER
app.delete('/users/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.user.delete({
      where: { id }
    });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});