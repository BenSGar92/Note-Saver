const fs = require('fs');

const rawNoteData = fs.readFileSync('../db/db.json');
let noteData = JSON.parse(rawNoteData);
console.log(noteData);

noteArray = require("../db/db.json")

module.exports = function(app) {
    app.post("/api/notes", function(req, res) {
        noteArray.push(req.body);
        res.json(true);
    });
}