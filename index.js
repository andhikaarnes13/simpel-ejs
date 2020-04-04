const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

//memagggil css di public
app.use("/public", express.static(process.cwd() + "/public"));
app.set("view engine", "ejs")
app.set('views', './views')

let person  = [
  {
    name: 'Andhika arnes syahputra',
    email: 'andhika@gmail.com',
    class: 'X RPL',
    school: 'SMK JAKARTA PUSAT 1',
    phone: '263586837456528'

  },
  {
    name: 'Andra',
    email: 'andra@backbone',
    class: 'X RPL',
    school: 'SMK JAKARTA PUSAT 1',
    phone: '263586837456528'
  }
]

app.get("/", function (req, res) {
  res.render("pages/list", {
    person: person
  });
});

app.post("/add", function (req, res) {
  person.push(req.body)

  res.redirect("/");
});

app.get("/form", function (req, res) {
  res.render("pages/form")
})

app.listen(2020, () => {
  console.log('Listen in 2020')
})