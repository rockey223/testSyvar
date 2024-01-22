const transporter = require('../utils/transporter');
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");
const required = require("../model/Contact");
const Contact = require('../model/Contact');

exports.sendContactUsEmail = catchAsyncErrors(async (req, res, next) => {

    const info = await transporter.sendMail({
        from: "jinaalchemycustomermessages@gmail.com",
        to: "technihax@gmail.com",
        subject: "From customer " + req.body.customerName,
        html: `
        <h2 style="font-size: 24px;">Customer Name: ${req.body.customerName}</h2>
        <p style="font-size: 18px;">Contact Number: ${req.body.customerPhone}</p>
        <p style="font-size: 18px;">Customer Email: ${req.body.customerEmail}</p>
        <p style="font-size: 18px;">Message: ${req.body.customerMessage}</p>
    `
    })

    //saving contact us user data in database
    // const newContactUs = req.body;
    // const contact = await Contact(newContactUs).save();

    res.status(200).json({
        success: true,
        message: "Email sent",
        data: info.messageId,
    });
    
});


