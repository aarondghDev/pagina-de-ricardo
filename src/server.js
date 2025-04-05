const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.PORT || 5000;
// const PORT = 5000;
//prueba
const corsOptions = {
  origin: '*', // Permitir solicitudes desde cualquier origen
  methods: 'GET,POST', // Métodos HTTP permitidos
  allowedHeaders: 'Content-Type', // Encabezados permitidos
};
//prueba
// Middleware
app.use(cors(corsOptions)); // Permite solicitudes desde otros orígenes
app.use(bodyParser.json()); // Parsear JSON en las solicitudes

// Configuración del pool de conexiones
const pool = mysql.createPool({
  host: 'PMYSQL172.dns-servicio.com', // Cambia esto si usas otro host
  user: 'aegarcia5b_cm27y5v6',       // Tu usuario de MySQL
  password: 'PRiK10!_X',             // Tu contraseña de MySQL
  database: '10358585_ricardo',      // El nombre de tu base de datos
  port: 3306,                        // Puerto de conexión
  waitForConnections: true,          // Esperar conexiones cuando el pool esté lleno
  connectionLimit: 10,               // Número máximo de conexiones en el pool
  queueLimit: 0,                     // Límite de cola (0 significa sin límite)
  enableKeepAlive: true,             // Habilitar paquetes keep-alive
  keepAliveInitialDelay: 0           // Retraso inicial antes de enviar el primer paquete keep-alive
});

// Exportar el pool para usarlo en otras partes de la aplicación
module.exports = pool;

// Conectar a la base de datos
async function connectToDatabase() {
  try {
    const connection = await pool.getConnection();
    console.log("Conexión exitosa a la base de datos");
    connection.release(); // Liberar la conexión para su reutilización
  } catch (err) {
    console.error("Error conectando a la base de datos:", err);
  }
}

// Llamar a la función para establecer la conexión
connectToDatabase();

// Enviar la información del formulario a la base de datos
app.post("/submit-form", async (req, res) => {
  const { FullName, phone, email, address, city, zip, message } = req.body;

  console.log("Datos recibidos del formulario:", req.body);
  console.log("Insertando datos en la base de datos:", [FullName, phone, email, address, city, zip, message]);

  // Verificar si todos los campos son enviados
  if (FullName && phone && email && address && city && zip && message) {
    // Consulta SQL para insertar los datos en la tabla "contactos"
    const query = `INSERT INTO users (FullName, phone, email, address, city, zip, message) 
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

    try {
      // Ejecutar la consulta
      const [result] = await pool.execute(query, [FullName, phone, email, address, city, zip, message]);
      console.log("Datos insertados correctamente en la base de datos", result);
      res.status(200).json({ message: "Datos recibidos y guardados correctamente" });
    } catch (err) {
      console.error("Error al insertar los datos en la base de datos:", err);
      res.status(500).json({ error: "Hubo un problema al guardar los datos" });
    }
  } else {
    res.status(400).json({ error: "Faltan campos obligatorios" });
  }
});

// Iniciar el servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor ejecutándose en https://0.0.0.0:${PORT}`);
});