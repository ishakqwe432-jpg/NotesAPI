const Notes = require("../models/Notes");

async function CreateNote(req, res) {
    try {
        const { title, content } = req.body;

        const newData = await Notes.create({
            title,
            content
        });

        return res.status(201).json({
            message: "Successful",
            data: newData
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

async function GetNotes(req, res) {
    try {
        const data = await Notes.find();

        return res.status(200).json({
            message: "Successful",
            data
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports = {
    CreateNote,
    GetNotes
};
