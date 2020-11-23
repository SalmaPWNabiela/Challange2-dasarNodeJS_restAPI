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
app.post("/kubus", (req,res) => {
    //menampung data yang dikirimkan 
    //dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) //mengambil nilai sisi dari body

    let volume = sisi * sisi * sisi
    let luasPermukaan = 6 * sisi * sisi

    //membuat objek yang berisi data yang
    //akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    //memberikan respon dengan format JSON
    //yang berisi objek di atas
    res.json(response)
})

//menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})


//end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    //menampung data yang dikirimkan 
    //dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) //mengambil nilai sisi dari body
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let luasPermukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))

    //membuat objek yang berisi data yang
    //akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luasPermukaan: luasPermukaan
    }

    //memberikan respon dengan format JSON
    //yang berisi objek di atas
    res.json(response)
})


// end-point "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let r = Number(req.body.r) // mengambil nilai sisi dari body
    let t = Number(req.body.t) // mengambil nilai sisi dari body

    let volume = 3.14 * r * r * t
    let luaspermukaan = 2 * 3.14 * r * ( r + t)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari_jari : r,
        tinggi : t,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let r = Number(req.body.r) // mengambil nilai sisi dari body

    let volume = 4/3 * 3.14 * (r * r *r)
    let luaspermukaan = 4 * 3.14 * (r * r)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jari_jari : r,
        volume: volume,
        luaspermukaan: luaspermukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})