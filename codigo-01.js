const express = require('express');
const app = express();
const port = 3000;

// Servir archivos estáticos (como logo.png)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`

  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bienvenido a la API</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Inter', sans-serif;
        background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        text-align: center;
      }

      .container {
        background: rgba(255, 255, 255, 0.08);
        padding: 3rem 4rem;
        border-radius: 16px;
        backdrop-filter: blur(12px);
        box-shadow: 0 8px 32px rgba(0,0,0,0.25);
        animation: fadeIn 1s ease-in-out;
        max-width: 600px;
      }

      img {
        width: 140px;
        margin-bottom: 1.5rem;
      }

      h1 {
        font-size: 2.4rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.2rem;
        opacity: 0.9;
        margin-bottom: 2rem;
      }

      .btn {
        display: inline-block;
        padding: 0.8rem 1.6rem;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        background: linear-gradient(135deg, #00c6ff, #0072ff);
        border: none;
        border-radius: 8px;
        text-decoration: none;
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <img src="/logo.png" alt="Logo ITIC" />
      <h1>🚀 Bienvenido a la API de Gestión de Eventos</h1>
      <p>Explora las funcionalidades y disfruta tu experiencia.</p>
      <a href="#" class="btn">Ver Documentación</a>
    </div>
  </body>
  </html>

  `);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
