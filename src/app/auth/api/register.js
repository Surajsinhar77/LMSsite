// pages/api/register.js

import { hash } from "bcryptjs";
import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
    const { name, email, password } = req.body;

    // Validate the input
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Please fill in all fields" });
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Connect to the database
    const { db } = await connectToDatabase();

    // Save the user data to the database
    try {
        const result = await db.collection("users").insertOne({
        name,
        email,
        password: hashedPassword,
        createdAt: new Date(),
    });

        return res.status(201).json({
        message: "User registered successfully",
        userId: result.insertedId,
        });
    } catch (error) {
    return res.status(500).json({ error: "Failed to register user" });
    }
    } else {
    return res.status(405).json({ error: "Method not allowed" });
    }
}
