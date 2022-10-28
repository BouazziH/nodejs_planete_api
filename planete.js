const sqlite3 = require("sqlite3").verbose();
const dbname = 'univers.db';
let db = new sqlite3.Database(dbname, err => {
    if (err)
        throw err
    console.log("Base de donnée initialisé dans le fichier : " + dbname);
});
db.run("Insert into PLANETES (nom, image) values (?, ?)", ["Mars", "https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg"])
db.run("Insert into PLANETES (nom, image) values (?, ?)", ["Terre", "https://upload.wikimedia.org/wikipedia/commons/d/d9/Earth_by_the_EPIC_Team_on_21_April_2018.png"])
db.run("Insert into PLANETES (nom, image) values (?, ?)", ["Mercure", "https://upload.wikimedia.org/wikipedia/commons/3/30/Mercury_in_color_-_Prockter07_centered.jpg"])
db.run("Insert into PLANETES (nom, image) values (?, ?)", ["Venus", "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"])
db.all("SELECT * FROM planetes", (err, data) => {


    if (err) throw err;
    console.log(data); 
}); */
 db.run('update planetes set url=("https://cdn.futura-sciences.com/buildsv6/images/wide1920/4/8/8/488b05cd29_121945_venus-akatsuki.jpg") where id =1 ');