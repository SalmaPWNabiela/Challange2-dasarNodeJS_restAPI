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

app.get("/convert/celcius/:c", (req,res) => {
    //:c -> diberikan titik dua di depan menunjukkan
    // sifatnya dinamis, dapat diganti nilainya saat melakukan
    // request. menampung data yang dikirim
    let c = req.params.c //mengambil nilai sisi dari body

    let reamur = (4/5) * c
    let fahrenheit = ( 9/5 ) * c + 32
    let kelvin = c + 273

    //membuat objek yang berisi data yang
    //akan dijadikan response
    let response = {
        celcius: c,
        result: {
            reamur: reamur,
            fahrenheit : fahrenheit,
            kelvin: kelvin
        }
    }

    //memberikan respon dengan format JSON
    //yang berisi objek di atas
    res.json(response)
})

//menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})


app.get("/convert/reamur/:r", (req,res) => {
    //:c -> diberikan titik dua di depan menunjukkan
    // sifatnya dinamis, dapat diganti nilainya saat melakukan
    // request. menampung data yang dikirim
    let r = req.params.r //mengambil nilai sisi dari body

    let celcius = (5/4) * r
    let kelvin = (5/4) * r + 273
    let fahrenheit = (9/4) * r + 32

    //membuat objek yang berisi data yang
    //akan dijadikan response
    let response = {
        reamur: r,
        result: {
            celcius: celcius,
            fahrenheit : fahrenheit,
            kelvin: kelvin
        }
    }
    //memberikan respon dengan format JSON
    //yang berisi objek di atas
    res.json(response)
})


app.get("/convert/kelvin/:k", (req,res) => {
    //:c -> diberikan titik dua di depan menunjukkan
    // sifatnya dinamis, dapat diganti nilainya saat melakukan
    // request. menampung data yang dikirim
    let k = req.params.k //mengambil nilai sisi dari body

    let celcius = k - 273
    let reamur = (4/5) * (k-273)
    let fahrenheit = ((9/5) * (k-273)) + 32

    //membuat objek yang berisi data yang
    //akan dijadikan response
    let response = {
        kelvin: k,
        result: {
            celcius: celcius,
            fahrenheit : fahrenheit,
            reamur: reamur
        }
    }
    //memberikan respon dengan format JSON
    //yang berisi objek di atas
    res.json(response)
})


app.get("/convert/fahrenheit/:f", (req,res) => {
    //:c -> diberikan titik dua di depan menunjukkan
    // sifatnya dinamis, dapat diganti nilainya saat melakukan
    // request. menampung data yang dikirim
    let f = req.params.f //mengambil nilai sisi dari body

    let celcius = 5/9 * (f-32) 
    let reamur = 4/9 * (f-32)
    let kelvin = ((5/9) * (f-32)) + 273

    //membuat objek yang berisi data yang
    //akan dijadikan response
    let response = {
        fahrenheit: f,
        result: {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }
    //memberikan respon dengan format JSON
    //yang berisi objek di atas
    res.json(response)
})