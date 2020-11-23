const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//end-point "/kubus" dengan method POST
app.post("/desimal", (req,res) => {
    //menampung data yang dikirimkan 
    //dan mengkonversi menjadi tipe numerik
    let tes = Number(req.body.tes) //mengambil nilai desimal dari body

    var binner = parseInt(tes, 10).toString(2)
    var oktal = parseInt(tes, 10).toString(8)
    var hexa = parseInt(tes, 10).toString(16)

    //membuat objek yang berisi data yang
    //akan dijadikan response
    let response = {
        tes: tes,
        binner: binner,
        oktal: oktal,
        hexa: hexa
    }

    //memberikan respon dengan format JSON
    //yang berisi objek di atas
    res.json(response)
}) 

//menjalankan server pada port 8000
app.listen(8080, () => {
    console.log("Server run on port 8080");
})

//end-point "/binner" dengan method POST
app.post("/binner", (req,res) => {
    //menampung data yang dikirimkan 
    //dan mengkonversi menjadi tipe numerik
    let coba = Number(req.body.coba) //mengambil nilai desimal dari body

    var desimal = parseInt(coba, 2).toString(10)
    var oktal = parseInt(coba, 2).toString(8)
    var hexa = parseInt(coba, 2).toString(16)

    //membuat objek yang berisi data yang
    //akan dijadikan response
    let response = {
        coba: coba,
        desimal: desimal,
        oktal: oktal,
        hexa: hexa
    }

    //memberikan respon dengan format JSON
    //yang berisi objek di atas
    res.json(response)
}) 

//end-point "/binner" dengan method POST
app.post("/oktal", (req,res) => {
    //menampung data yang dikirimkan 
    //dan mengkonversi menjadi tipe numerik
    let c = Number(req.body.c) //mengambil nilai desimal dari body

    var desimal = parseInt(c, 8).toString(10)
    var binner = parseInt(c, 8).toString(2)
    var hexa = parseInt(c, 8).toString(16)

    //membuat objek yang berisi data yang
    //akan dijadikan response
    let response = {
        c: c,
        desimal: desimal,
        binner: binner,
        hexa: hexa
    }

    //memberikan respon dengan format JSON
    //yang berisi objek di atas
    res.json(response)
}) 

//end-point "/binner" dengan method POST
app.post("/hexadesimal", (req,res) => {
    //menampung data yang dikirimkan 
    //dan mengkonversi menjadi tipe numerik
    let d = Number(req.body.d) //mengambil nilai desimal dari body

    var desimal = parseInt(d, 16).toString(10)
    var oktal = parseInt(d, 16).toString(8)
    var binner = parseInt(d, 16).toString(2)

    //membuat objek yang berisi data yang
    //akan dijadikan response
    let response = {
        d: d,
        desimal: desimal,
        oktal: oktal,
        binner: binner
    }

    //memberikan respon dengan format JSON
    //yang berisi objek di atas
    res.json(response)
}) 