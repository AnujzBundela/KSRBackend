// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const contactRoutes = require("./routes/contactRoutes");

// const app = express();

// // Database
// connectDB();

// // Body parsers
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // 🌐 Correct CORS settings
// app.use(cors({
//   origin: ["https://ksrinternational.in", "http://localhost:5500", "http://localhost:3000"],
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true
// }));

// // Allow preflight
// app.options("*", cors()); // IMPORTANT

// // Routes
// app.use("/api", contactRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes")
const app = express();
app.use(express.json()); // ✅ Required for parsing JSON
app.use(express.urlencoded({ extended: true })); // ✅ Required if you're using forms
connectDB();
app.use(express.json());
app.use(cors())
app.use("/api", contactRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






