const fs = require("fs");
const util = require("util");
const path = require("path");
const { networkInterfaces } = require("os");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const dbPath = path.join(__dirname,"../db/db.json");

class Store {
    read()
    {
        return readFileAsync(dbPath, "utf-8");
    }

    getNotes()

    {
        return this.read().then((data) => {

            return data 

            ? JSON.parse ( data ) 

            : [];
         });
       
    }

    addNotes( note )
    {
        return this.getNotes().then((notes) =>
        {
            notes.push ({ ...note});

        });

    }

    write( content )
    {
        return fs.writeFileAsync(dbPath, "utf-8");

    }

}

module.exports = new Store;