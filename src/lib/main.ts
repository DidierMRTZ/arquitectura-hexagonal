import express, { Request, Response } from "express";

// Crear una instancia de Express
const app = express();

// Definir un puerto
const PORT = 3000;

// Crear una ruta que responda con "Hola Mundo"
app.get("/", (req: Request, res: Response) => {
  res.send("Hola Mundo");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
