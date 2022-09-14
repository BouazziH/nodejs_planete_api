const sqlite3  = require("sqlite3").verbose();
const dbname = 'univers.db';
let db = new sqlite3.Database(dbname, err => {
    if(err)
    throw err
    console.log("Base de donnée initialisé dans le fichier : " +  dbname);
});
db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY AUTOINCREMENT , name VARCHAR(25) , url VARCHAR(255) ,created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)');
db.run("INSERT INTO planetes(name,url) values (?,?)", ["Venus", "https://theconversation.com/vie-sur-venus-que-sait-on-vraiment-146775"]);
db.run("INSERT INTO planetes(name,url) values (?,?)", ["Mars","https://fr.wikipedia.org/wiki/Mars_%28plan%C3%A8te%29"]);
db.run("INSERT INTO planetes(name,url) values (?,?)", ["Terre","https://fr.wikipedia.org/wiki/Terre"]);
db.run("INSERT INTO planetes(name,url) values (?,?)", ["Mercure","https://www.stelvision.com/astro/mercure-petite-planete-grandes-decouvertes/"]);
db.all("SELECT * FROM planetes", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  