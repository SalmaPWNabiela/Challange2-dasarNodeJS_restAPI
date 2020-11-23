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

// end-point "/bmi" dengan method POST
app.post("/bmi", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi) // mengambil nilai panjang dari body
    let berat = Number(req.body.berat) // mengambil nilai lebar dari body 

    // hasil = () => {
        let bmi = berat / (tinggi * tinggi)
        if (bmi < 18.5){
            message = "Rata-rata BMI : " + bmi + "\nStatus Badan : Kekurangan berat badan"
        }
        else if(bmi >= 18.5 && bmi < 25){
            message = "Rata-rata BMI : " + bmi + "\nStatus Badan : Normal (Ideal)"
        }
        else if(bmi >= 25 && bmi < 30){
            message = "Rata-rata BMI : " + bmi + "\nStatus Badan : Kelebihan berat badan"
        }
        else if(bmi >= 30){
            message = "Rata-rata BMI : " + bmi + "\nStatus Badan : Kegemukan (Obesitas)"
        }
        else{
            message = "Not Found"
        }
    // }

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: message
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})