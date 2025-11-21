const express = require("express");
const handleContactForm = require("../controllers/contactController");
const handleCompanyEmail = require("../controllers/userController");

const router = express.Router();

router.post("/sendEmail", handleContactForm);
router.post("/sendCompanyEmail", handleCompanyEmail);

// router.post("/sendCompanyEmail", async (req, res) => {
//     try {
//         const { email, companyName } = req.body;

//         if (!email || !companyName) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Email and Company Name are required"
//             });
//         }

//         // Save to MongoDB (your existing code)

//         // Send Email (your existing code)

//         return res.status(200).json({
//             success: true,
//             message: "E-Catalogue email sent successfully"
//         });

//     } catch (error) {
//         console.error("Error in sendCompanyEmail:", error);

//         return res.status(500).json({
//             success: false,
//             message: error.message || "Internal Server Error"
//         });
//     }
// });


module.exports = router;
