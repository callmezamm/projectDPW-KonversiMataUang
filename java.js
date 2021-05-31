function convert(Dom,Sub,Mny){
    var Money = parseInt(Mny)
    temp = 0
    // rupiah
    if(Dom == "IDR"){
        if(Dom == "IDR", Sub == "Baht"){
            op = Money * 0.0022
            temp = op
        } 
        else if(Dom == "IDR",Sub == "Ringgit"){
            op = Money * 0.00029
            temp = op
        } 
        else if(Dom == "IDR",Sub == "Dollar2"){
            op = Money * 0.000090
            temp = op
        }
        else if(Dom == "IDR",Sub == "Dollar"){
            op = Money * 0.000070
            temp = op
        } 
        else if(Dom == "IDR",Sub == "Pound"){
            op = Money * 0.000049
            temp = op
        } 
        else if(Dom == "IDR",Sub == "Euro"){
            op = Money * 0.000057
            temp = op
        } 
        else if(Dom == "IDR",Sub == "Yuan"){
            op = Money * 0.000045
            temp = op
        } 
        else if(Dom == "IDR",Sub == "Won"){
            op = Money * 0.078
            temp = op
        } 
        else if(Dom == "IDR",Sub == "Riyal"){
            op = Money * 0.00026
            temp = op
        } 
        else if(Dom == "IDR",Sub == "Yen"){
            op = Money * 0.0076
            temp = op
        } 
        else if(Dom == "IDR",Sub == "Peso"){
            op = Money * 0.0033
            temp = op
        } 
    } 
    // ringgit
        else if (Dom == "Ringgit"){
        if(Dom == "Ringgit",Sub == "Rupiah"){
            op = Money * 3469.62
            temp = op
        } 
        else if(Dom == "Ringgit",Sub == "Baht"){
            op = Money * 7.58
            temp = op
        } 
        else if(Dom == "Ringgit",Sub == "Dollar2"){
            op = Money * 0.31
            temp = op
        }
        else if(Dom == "Ringgit",Sub == "Dollar"){
            op = Money * 0.24
            temp = op
        }
        else if(Dom == "Ringgit",Sub == "Pound"){
            op = Money * 0.17
            temp = op
        }
        else if(Dom == "Ringgit",Sub == "Euro"){
            op = Money * 0.20
            temp = op
        }
        else if(Dom == "Ringgit",Sub == "Yuan"){
            op = Money * 1.55
            temp = op
        }
        else if(Dom == "Ringgit",Sub == "Won"){
            op = Money * 272.40
            temp = op
        }
        else if(Dom == "Ringgit",Sub == "Riyal"){
            op = Money * 0.91
            temp = op
        }
        else if(Dom == "Ringgit",Sub == "Yen"){
            op = Money * 26.30
            temp = op
        }
        else if(Dom == "Ringgit",Sub == "Peso"){
            op = Money * 11.57
            temp = op
        }
    }

        // Baht
        else if (Dom == "Baht"){
        if(Dom == "Baht",Sub == "Rupiah"){
            op = Money * 458.15
            temp = op
        } 
        else if(Dom == "Baht",Sub == "Ringgit"){
            op = Money * 0.13
            temp = op
        } 
        else if(Dom == "Baht",Sub == "Dollar2"){
            op = Money * 0.041
            temp = op
        }
        else if(Dom == "Baht",Sub == "Dollar"){
            op = Money * 0.032
            temp = op
        }
        else if(Dom == "Baht",Sub == "Pound"){
            op = Money * 0.023
            temp = op
        }
        else if(Dom == "Baht",Sub == "Euro"){
            op = Money * 0.026
            temp = op
        }
        else if(Dom == "Baht",Sub == "Yuan"){
            op = Money * 0.21
            temp = op
        }
        else if(Dom == "Baht",Sub == "Won"){
            op = Money * 35.96
            temp = op
        }
        else if(Dom == "Baht",Sub == "Riyal"){
            op = Money * 0.12
            temp = op
        }
        else if(Dom == "Baht",Sub == "Yen"){
            op = Money * 3.47
            temp = op
        }
        else if(Dom == "Baht",Sub == "Peso"){
            op = Money * 1.53
            temp = op
        }
    }
    // dollar australia
    else if (Dom == "Dollar2"){
        if(Dom == "Dollar2",Sub == "Rupiah"){
            op = Money * 11133.81
            temp = op
        } 
        else if(Dom == "Dollar2",Sub == "Ringgit"){
            op = Money * 3.20
            temp = op
        } 
        else if(Dom == "Dollar2",Sub == "Baht"){
            op = Money * 24.25
            temp = op
        }
        else if(Dom == "Dollar2",Sub == "Dollar"){
            op = Money * 0.077
            temp = op
        }
        else if(Dom == "Dollar2",Sub == "Pound"){
            op = Money * 0.55
            temp = op
        }
        else if(Dom == "Dollar2",Sub == "Euro"){
            op = Money * 0.63
            temp = op
        }
        else if(Dom == "Dollar2",Sub == "Yuan"){
            op = Money * 4.97
            temp = op
        }
        else if(Dom == "Dollar2",Sub == "Won"){
            op = Money * 872.17
            temp = op
        }
        else if(Dom == "Dollar2",Sub == "Riyal"){
            op = Money * 2.90
            temp = op
        }
        else if(Dom == "Dollar2",Sub == "Yen"){
            op = Money * 84.25
            temp = op
        }
        else if(Dom == "Dollar2",Sub == "Peso"){
            op = Money * 37.03
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