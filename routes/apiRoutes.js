const fs = require('fs');

const rawNoteData = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');


module.exports = function(app) {
    app.post("/api/notes", function(req, res) {
    
        req.body.id = uuidv4();
        rawNoteData.push(req.body);
        //push to arrayof object
        //fs.writefile rawNoteData
            //fs write file needs stringify

        //fs.writeFIle("location of file to update", data, callback function)
        fs.writeFile("./db/db.json", JSON.stringify(rawNoteData), function(err) {
            if (err) {
              return console.log(err);
            }
          
            console.log("Success!");
          
          });


        res.json(true);
    });

    app.get("/api/notes", function(req, res) {
       // noteArray.push(req.body);
        //res.json(rawNoteData);
       
        res.json(rawNoteData);
    });

    
    
    app.delete("/api/notes:id", function(req, res) {
      // console.log(rawNoteData);
      for (let i = 0; i < rawNoteData.length; i++) {
        if (rawNoteData[i].id === req.params.id) {
            rawNoteData.splice(i, 1);
        }
      }
      fs.writeFile("./db/db.json", JSON.stringify(rawNoteData), function(err) {
        if (err) throw err;
        res.json(rawNoteData);
      });
      
    })
    


    
    //array of object rawNoteData
        //get access to the id = req.params.id
        //indexof to find loc based id
        //remove that index loc off of the array (.splice(indexloc, 1))
        //show the update fswritefile

}