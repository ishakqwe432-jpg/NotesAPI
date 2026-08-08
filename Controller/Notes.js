const Notes = require("../models/Notes");

async function CreateNote(req, res,next) {

const { title, content } = req.body;

        const newData = await Notes.create({
            title,
            content
        });

        return res.status(201).json({
            message: "Successful",
            data: newData
        });
}

async function GetNotes(req, res,next) {
    try {
        const data = await Notes.find();

        return res.status(200).json({
            message: "Successful",
            data
        });
    } catch (error) {

   next(error);
    }
}

module.exports = {
    CreateNote,
    GetNotes
};
