function convert(Dom,Sub,Mny){
    var Money = parseInt(Mny)
    temp = 0
    if(Dom == "Yuan"){
        if(Dom == "Yuan", Sub == "IDR"){
            op = Money * 2230.51
            temp = op
        } else if(Dom == "Yuan",Sub == "Dollar"){
            op = Money * 0.16
            temp = op
        } else if(Dom == "Yuan",Sub == "Pound"){
            op = Money * 0.11
            temp = op
        } else if(Dom == "Yuan",Sub == "Euro"){
            op = Money * 0.13
            temp = op
        } else if(Dom == "Yuan",Sub == "Yen"){
            op = Money * 16.90
            temp = op
        } else if(Dom == "Yuan",Sub == "Won"){
            op = Money * 174.82
            temp = op
        } else if(Dom == "Yuan",Sub == "Riyal"){
            op = Money * 0.58
            temp = op
        } else if(Dom == "Yuan",Sub == "Peso"){
            op = Money * 7.45
            temp = op
        } else if(Dom == "Yuan",Sub == "Ringgit"){
            op = Money * 0.64
            temp = op
        } else if(Dom == "Yuan",Sub == "Baht"){
            op = Money * 4.87
            temp = op
        } else if(Dom == "Yuan",Sub == "Dollar2"){
            op = Money * 0.20
            temp = op
        }
    } else if(Dom == "Won"){
        if(Dom == "Won", Sub == "IDR"){
            op = Money * 12.71
            temp = op
        } else if(Dom == "Won",Sub == "Dollar"){
            op = Money * 0.00089
            temp = op
        } else if(Dom == "Won",Sub == "Pound"){
            op = Money * 0.00063
            temp = op
        } else if(Dom == "Won",Sub == "Euro"){
            op = Money * 0.00073
            temp = op
        } else if(Dom == "Won",Sub == "Yen"){
            op = Money * 0.097
            temp = op
        } else if(Dom == "Won",Sub == "Yuan"){
            op = Money * 0.0057
            temp = op
        } else if(Dom == "Won",Sub == "Riyal"){
            op = Money * 0.0033
            temp = op
        } else if(Dom == "Won",Sub == "Peso"){
            op = Money * 0.042
            temp = op
        } else if(Dom == "Won",Sub == "Ringgit"){
            op = Money * 0.0037
            temp = op
        } else if(Dom == "Won",Sub == "Baht"){
            op = Money * 0.028
            temp = op
        } else if(Dom == "Won",Sub == "Dollar2"){
            op = Money * 0.0011
            temp = op
        }
    } else if(Dom == "Riyal"){
        if(Dom == "Riyal", Sub == "IDR"){
            op = Money * 3826
            temp = op
        } else if(Dom == "Riyal",Sub == "Dollar"){
            op = Money * 0.27
            temp = op
        } else if(Dom == "Riyal",Sub == "Pound"){
            op = Money * 0.19
            temp = op
        } else if(Dom == "Riyal",Sub == "Euro"){
            op = Money * 0.22
            temp = op
        } else if(Dom == "Riyal",Sub == "Yen"){
            op = Money * 29.05
            temp = op
        } else if(Dom == "Riyal",Sub == "Yuan"){
            op = Money * 1.72
            temp = op
        } else if(Dom == "Riyal",Sub == "Won"){
            op = Money * 300.51
            temp = op
        } else if(Dom == "Riyal",Sub == "Peso"){
            op = Money * 12.78
            temp = op
        } else if(Dom == "Riyal",Sub == "Ringgit"){
            op = Money * 1.10
            temp = op
        } else if(Dom == "Riyal",Sub == "Baht"){
            op = Money * 8.36
            temp = op
        } else if(Dom == "Riyal",Sub == "Dollar2"){
            op = Money * 0.34
            temp = op
        }
    } else if(Dom == "Peso"){
        if(Dom == "Peso", Sub == "IDR"){
            op = Money * 299.39
            temp = op
        } else if(Dom == "Peso",Sub == "Dollar"){
            op = Money * 0.021
            temp = op
        } else if(Dom == "Peso",Sub == "Pound"){
            op = Money * 0.015
            temp = op
        } else if(Dom == "Peso",Sub == "Euro"){
            op = Money * 0.017
            temp = op
        } else if(Dom == "Peso",Sub == "Yen"){
            op = Money * 2.27
            temp = op
        } else if(Dom == "Peso",Sub == "Yuan"){
            op = Money * 0.13
            temp = op
        } else if(Dom == "Peso",Sub == "Won"){
            op = Money * 23.51
            temp = op
        } else if(Dom == "Peso",Sub == "Riyal"){
            op = Money * 0.078
            temp = op
        } else if(Dom == "Peso",Sub == "Ringgit"){
            op = Money * 0.086
            temp = op
        } else if(Dom == "Peso",Sub == "Baht"){
            op = Money * 0.65
            temp = op
        } else if(Dom == "Peso",Sub == "Dollar2"){
            op = Money * 0.027
            temp = op
        }
    }
    return temp
}

function klik2(){
    var mny = document.getElementById("jumlah2").value
    var dom = document.getElementById("Dom").value
    var sub = document.getElementById("Sub").value
    var hasil = convert(dom,sub,mny)
    document.getElementById("hasil2").innerHTML = hasil
}