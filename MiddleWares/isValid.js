function isValidator(req, res, next) {
    const { title, content } = req.body;
    const errors = [];

    if (typeof title !== "string") {
        errors.push("Title must be a string");
    } else if (title.trim() === "") {
        errors.push("Title cannot be empty");
    }

    if (typeof content !== "string") {
        errors.push("Content must be a string");
    } else if (content.trim() === "") {
        errors.push("Content cannot be empty");
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
}

module.exports = isValidator;
