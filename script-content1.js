function convert(Dom,Sub,Mny){
    var Money = parseInt(Mny)
    temp = 0
    // amerika to any
    if(Dom == "Dollar"){
        if(Dom == "Dollar", Sub == "Baht"){
            op = Money * 31.38
            temp = op
        } 
        else if(Dom == "Dollar",Sub == "Ringgit"){
            op = Money * 4.14
            temp = op
        } 
        else if(Dom == "Dollar",Sub == "Dollar2"){
            op = Money * 1.29
            temp = op
        }
        else if(Dom == "Dollar",Sub == "IDR"){
            op = Money * 14367.70
            temp = op
        } 
        else if(Dom == "Dollar",Sub == "Pound"){
            op = Money * 0.71
            temp = op
        } 
        else if(Dom == "Dollar",Sub == "Euro"){
            op = Money * 0.82
            temp = op
        } 
        else if(Dom == "Dollar",Sub == "Yuan"){
            op = Money * 6.43
            temp = op
        } 
        else if(Dom == "Dollar",Sub == "Won"){
            op = Money * 1127.79
            temp = op
        } 
        else if(Dom == "Dollar",Sub == "Riyal"){
            op = Money * 3.75
            temp = op
        } 
        else if(Dom == "Dollar",Sub == "Yen"){
            op = Money * 108.93
            temp = op
        } 
        else if(Dom == "Dollar",Sub == "Peso"){
            op = Money * 47.92
            temp = op
        }
    }
    // britania to any
    else if (Dom == "Pound"){ 
        if(Dom == "Pound", Sub == "Baht"){
            op = Money * 44.40
            temp = op
        } 
        else if(Dom == "Pound",Sub == "Ringgit"){
            op = Money * 5.86
            temp = op
        } 
        else if(Dom == "Pound",Sub == "Dollar2"){
            op = Money * 1.83
            temp = op
        }
        else if(Dom == "Pound",Sub == "IDR"){
            op = Money * 20331.01
            temp = op
        } 
        else if(Dom == "Pound",Sub == "Dollar"){
            op = Money * 1.42
            temp = op
        } 
        else if(Dom == "Pound",Sub == "Euro"){
            op = Money * 1.16
            temp = op
        } 
        else if(Dom == "Pound",Sub == "Yuan"){
            op = Money * 9.11
            temp = op
        } 
        else if(Dom == "Pound",Sub == "Won"){
            op = Money * 1596.10
            temp = op
        } 
        else if(Dom == "Pound",Sub == "Riyal"){
            op = Money * 5.31
            temp = op
        } 
        else if(Dom == "Pound",Sub == "Yen"){
            op = Money * 154.21
            temp = op
        } 
        else if(Dom == "Pound",Sub == "Peso"){
            op = Money * 67.82
            temp = op
        }
    } 
    // euro to any
    else if (Dom == "Euro"){ 
        if(Dom == "Euro", Sub == "Baht"){
            op = Money * 38.22
            temp = op
        } 
        else if(Dom == "Euro",Sub == "Ringgit"){
            op = Money * 5.04
            temp = op
        } 
        else if(Dom == "Euro",Sub == "Dollar"){
            op = Money * 1.58
            temp = op
        }
        else if(Dom == "Euro",Sub == "IDR"){
            op = Money * 17499.86
            temp = op
        } 
        else if(Dom == "Euro",Sub == "Dollar"){
            op = Money * 1.22
            temp = op
        } 
        else if(Dom == "Euro",Sub == "Pound"){
            op = Money * 0.86
            temp = op
        } 
        else if(Dom == "Euro",Sub == "Yuan"){
            op = Money * 7.84
            temp = op
        } 
        else if(Dom == "Euro",Sub == "Won"){
            op = Money * 1373.65
            temp = op
        } 
        else if(Dom == "Euro",Sub == "Riyal"){
            op = Money * 4.57
            temp = op
        } 
        else if(Dom == "Euro",Sub == "Yen"){
            op = Money * 132.68
            temp = op
        } 
        else if(Dom == "Euro",Sub == "Peso"){
            op = Money * 58.37
            temp = op
        }
    } 
    // jepang to any
    else if (Dom == "Yen"){ 
        if(Dom == "Yen", Sub == "Baht"){
            op = Money * 0.29
            temp = op
        } 
        else if(Dom == "Yen",Sub == "Ringgit"){
            op = Money * 0.038
            temp = op
        } 
        else if(Dom == "Yen",Sub == "Dollar2"){
            op = Money * 0.012
            temp = op
        }
        else if(Dom == "Yen",Sub == "IDR"){
            op = Money * 131.86
            temp = op
        } 
        else if(Dom == "Yen",Sub == "Dollar"){
            op = Money * 0.0092
            temp = op
        } 
        else if(Dom == "Yen",Sub == "Euro"){
            op = Money * 0.0075
            temp = op
        } 
        else if(Dom == "Yen",Sub == "Yuan"){
            op = Money * 0.059
            temp = op
        } 
        else if(Dom == "Yen",Sub == "Won"){
            op = Money * 10.35
            temp = op
        } 
        else if(Dom == "Yen",Sub == "Riyal"){
            op = Money * 0.034
            temp = op
        } 
        else if(Dom == "Yen",Sub == "Pound"){
            op = Money * 0.0065
            temp = op
        } 
        else if(Dom == "Yen",Sub == "Peso"){
            op = Money * 0.44
            temp = op
        }
    } 
    else if(Dom == "Yuan"){
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
    } 
    else if(Dom == "Won"){
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
    } 
    else if(Dom == "Riyal"){
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
    } 
    else if(Dom == "Peso"){
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