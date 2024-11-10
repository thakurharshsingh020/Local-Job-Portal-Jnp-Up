const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

app.post("/apply", (req, res) => {
    const { jobTitle, email } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "thakurharshsingh020@gmail.com",
            pass: "harsh@321",
        },
    });

    const mailOptions = {
        from: "thakurharshsingh020@gmail.com",
        to: email,
        subject: `Application for ${jobTitle}`,
        text: `Thank you for applying for the position: ${jobTitle}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.send("Email sent: " + info.response);
    });
});

app.listen(3000, () => console.log("Server started on port 3000"));
