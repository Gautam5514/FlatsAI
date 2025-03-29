import contact from "../models/Contact.js";
import twilio from "twilio";

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const handleContactForm = async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Save to MongoDB
        const newContact = await contact.create({ name, email, phone, message });
        await newContact.save();

        const whatsappMessage = `📩 New Contact Request:\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n💬 Message: ${message}`;

        // Send WhatsApp message via Twilio
        await client.messages.create({
            from: process.env.TWILIO_WHATSAPP_NUMBER,
            to: process.env.OWNER_PHONE,
            body: whatsappMessage
        });

        return res.status(200).json({ success: "Message sent via WhatsApp and stored in DB!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to process request" });
    }
};
