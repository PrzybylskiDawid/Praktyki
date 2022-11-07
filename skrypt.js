function waliduj(){
    var imie = document.getElementById('imie').value;
    var imieregex = /[A-ZÀ-ÿ][a-z]*/;
    var imiewynik = imieregex.test(imie)
    
    if(imiewynik = true)
    {
        document.getElementById('wynik').innerHTML = 'poprawnie';
    }
    else
    {
        document.getElementById('wynik').innerHTML = 'skill issue';
    }
}