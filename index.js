//'fs.js' dosyasini aldi getirdi, fileSystem degiskinine esitledi
const express = require('express');
const app = express();

// "/" anasayfayi temsil eder
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/iletisim", function(req,res){
  res.sendFile(__dirname + "/iletisim.html");
});

app.get("/giris", function(req,res){
  res.sendFile(__dirname + "/giris.html");
});

app.post("/profil", function(req, res){
  res.send("Profiline hosgeldin. Buraya normalde adrese yazarak gelemezsin.")
});

app.get("*", function(req, res){
  res.send("Hata! Yanlis sayfadasiniz, lutfen tarayicinizin ayarlariyla oynayiniz.")
});

app.listen(8000);
