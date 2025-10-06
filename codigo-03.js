const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

app.use((req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

let eventos = [
    { id: 1, nombre: 'Concierto de Rock', fecha: '2023-09-15'},
    { id: 2, nombre: 'Feria de Tecnología', fecha: '2023-10-20'},
    { id: 3, nombre: 'Exposición de Arte', fecha: '2023-11-05' }
];

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Eventos');
});

app.get('/eventos',(req,res)=>{
    res.json(eventos);
});

app.get('/eventos/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const evento = eventos.find(e => e.id === id);
    if(!evento){
        return res.status(404).json({error: 'Evento no encontrado'});
    }
    res.json(evento);
});

app.post('/eventos',(req,res)=>{
    const { nombre, fecha } = req.body;
    if(!nombre || !fecha){
        return res.status(400).json({error: 'Nombre y fecha son requeridos'});
    }
    const nuevoEvento = {
        id: eventos.length ? eventos[eventos.length - 1].id + 1 : 1,
        nombre,
        fecha
    };
    eventos.push(nuevoEvento);
    res.status(201).json(nuevoEvento);
});

app.put('/eventos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const eventoIndex = eventos.findIndex(e => e.id === id);

  if (eventoIndex === -1) {
    return res.status(404).json({ error: 'Evento no encontrado' });
  }

  const { nombre, fecha } = req.body;
  if (!nombre || !fecha) {
    return res.status(400).json({ error: 'Nombre y fecha son obligatorios' });
  }

  eventos[eventoIndex] = { id, nombre, fecha };
  res.json(eventos[eventoIndex]);
});

app.delete('/eventos/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = eventos.findIndex(e => e.id === id);
    if(index === -1){
        return res.status(404).json({error: 'Evento no encontrado'});
    }
    eventos.splice(index,1);
    res.status(204).json('Evento' + id + ' eliminado');
});

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});