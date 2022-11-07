function waliduj(){

    var imie = document.getElementById('imie').value;
    var imieregex = /^[A-Z][a-z]+$/;
    var imiewynik = imieregex.test(imie)

    var nazwisko = document.getElementById('nazwisko').value;
    var nazwiskoregex = /^[A-Z][a-z]+$/;
    var nazwiskowynik = nazwiskoregex.test(nazwisko)

    var urodziny = document.getElementById('urodziny').value;
    var urodzinyregex = /^([01-31]+-[01-12]+-\d{4})$/i;
    
    var urodzinywynik = urodzinyregex.test(urodziny)
    
    if(imiewynik == true && nazwiskowynik == true && urodzinywynik == true)
    {
        document.getElementById("walidacja").innerHTML = "brawo";
    }
    else
    {
        document.getElementById("walidacja").innerHTML = "źle";
    }
}

