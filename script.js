let liczbaOcen = 2;
let suma = 0;


const kafelki = document.getElementById("kafelki");
const zmien = document.getElementById("zmien");
zmien.addEventListener("click", function () {
    const liczba = parseInt(document.getElementById("liczbaOcen").value);
    if (liczba>liczbaOcen) {
        for (let i=liczbaOcen+1;i<=liczba;i++) {
          const nowaOcena = document.createElement("div");
          nowaOcena.className = "kafelek";
          nowaOcena.innerHTML = `<input type="text" class="nazwa" id="nazwa${i}" placeholder="Przedmiot">
          <input type="number" min="1" max="6" id="oceny${i}" class="ocena" placeholder="Ocena">`;
          kafelki.append(nowaOcena);
        }
    }
    else if (liczba<liczbaOcen) {
        for (let i=liczba+1;i<=liczbaOcen;i++) {
            
            kafelki.removeChild(kafelki.lastElementChild);
        }
    }
    liczbaOcen = liczba;
});
const guzik = document.getElementById("policz");
guzik.addEventListener("click",function () {
for (let i=1; i<=liczbaOcen; i++) {
const ocena = parseInt(document.getElementById(`oceny${i}`).value);
suma+=ocena; 
}
const wynik = document.getElementById("wynik");
if (suma/liczbaOcen>=4.75) {
    wynik.style.backgroundColor = "#ff9f43";
    wynik.innerHTML = "Twoja średnia wynosi: " + suma/liczbaOcen;
}
else if (suma/liczbaOcen<=1.75) {
    wynik.style.backgroundColor = "#ee5253";
    wynik.innerHTML = "Twoja średnia wynosi: " + suma/liczbaOcen;

}
else {
    wynik.style.backgroundColor = "#58eb34";
    wynik.innerHTML = "Twoja średnia wynosi: " + suma/liczbaOcen;
}

suma=0;

});

