const express = require("express");
const connectDatabase = require("./config/db");
const komikRoutes = require("./routes/api");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Definisikan route di sini (misalnya untuk komik)
app.use("/api/v1", komikRoutes);

async function startServer() {
  try {
    // Koneksi database
    await connectDatabase();

    // Jalankan server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
