const liste = [1,3,5,2,7,-9];

liste[0] = 10;

for(let i = 0; i < liste.length; i++) {
    console.log(liste[i]);
}

for(let i of liste) {
    console.log(i);
}

liste.push(23); // setter inn heltallet 23 etter siste verdi i Arrayet
lengde = liste.length; // gir lendgen på Arrayet
liste.splice(1,2); // sletter to verdier i Arrayet fra og med plass 1
const posisjon = liste.indexOf(23); // gir posisjonen i Arrayet hvor verdien er 23 (nummer 4)
liste.sort(); // sorterer Arrayet
console.log(liste);
console.log(posisjon);
