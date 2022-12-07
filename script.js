let mojBrojac = 0;
let brojacKompa = 0;

const divSaTekstom = document.querySelector('.text')

function random(){
    let broj = Math.floor(Math.random() * 3) + 1;
    if(broj == 1){
        return "list";
    }else if(broj == 2){
        return "kamen";
    }else{
        return "makaze";
    }
}




function probaDomacin(){
    const domaci = document.querySelector('.home-container');
    const rezultatDOmaci = document.querySelector('.homeResult')
    rezultatDOmaci.remove();
    //mojBrojac++;
    let text = mojBrojac.toString();
    const divDomaci = document.createElement('div');
    divDomaci.classList.add('homeResult');
    divDomaci.style.border = "1px solid black";
    divDomaci.style.padding = "5px"
    divDomaci.style.borderRadius = "4.5px"
    divDomaci.textContent = text;
    domaci.appendChild(divDomaci);
}

    function probaGost(){
        const gosti = document.querySelector(".guest-container");
        const rezultatGosti = document.querySelector(".guestResult")
        rezultatGosti.remove();
        //brojacKompa++
        let text = brojacKompa.toString();
        const divGosti = document.createElement("div");
        divGosti.classList.add('guestResult');
        divGosti.style.border = "1px solid black";
        divGosti.style.padding = "5px"
        divGosti.style.borderRadius = "4.5px"
        divGosti.textContent = text;
        gosti.appendChild(divGosti);
        }




function jednaRunda() {
    console.log("moj brojac: " + mojBrojac)
    console.log("brojac kompa: " + brojacKompa)
    if(mojBrojac<5 && brojacKompa<5){
    let odabirKompa = random();
    console.log(odabirKompa)
    
    let mojOdabir = ""

    
    
    while(mojOdabir != "list" && mojOdabir != "kamen" && mojOdabir != "makaze"){
        mojOdabir = prompt("Molimo unesite svoj odabir!")
    }
    let final = mojOdabir.toLowerCase();
    //ovdje je bio if
    switch(final){
        case "makaze":
            if (final === odabirKompa){
                console.log("Isti odabir!");
                textRezultat = "Nerjesena runda! Rezultat ostaje isti"
                divSaTekstom.textContent = textRezultat
                divSaTekstom.textContent = textRezultat
                console.log("Rezultat je: " + mojBrojac + ":" + brojacKompa)
            }else if(odabirKompa == "list"){
                textRezultat = "Pobjedili ste ovu rundu, " + "Racunar je izabrao: " + odabirKompa
                divSaTekstom.textContent = textRezultat
                console.log("Pobjedili ste ovu rundu, " + "Racunar je izabrao: " + odabirKompa);
                mojBrojac++;
                probaDomacin();
                console.log(mojBrojac);
                console.log("Rezultat je: " + mojBrojac + ":" + brojacKompa)
            }else if(odabirKompa == "kamen"){
                textRezultat = "Izgubili ste rundu, " + "Racunar je izabrao: " + odabirKompa
                divSaTekstom.textContent = textRezultat
                console.log("Izgubili ste rundu, " + "Racunar je izabrao: " + odabirKompa);
                brojacKompa++;
                probaGost();
                console.log(brojacKompa);
                console.log("Rezultat je: " + mojBrojac + ":" + brojacKompa)
            }
            break;
        case "list":
            if (final === odabirKompa){
                console.log("Isti odabir!");
                textRezultat = "Nerjesena runda! Rezultat ostaje isti"
                divSaTekstom.textContent = textRezultat
                console.log("Rezultat je: " + mojBrojac + ":" + brojacKompa)
            }else if(odabirKompa == "kamen"){
                textRezultat = "Pobjedili ste ovu rundu, " + "Racunar je izabrao: " + odabirKompa
                divSaTekstom.textContent = textRezultat
                console.log("Pobjedili ste ovu rundu, " + "Racunar je izabrao: " + odabirKompa);
                mojBrojac++;
                probaDomacin();
                console.log("Rezultat je: " + mojBrojac + ":" + brojacKompa)
            }else if(odabirKompa == "makaze"){
                console.log("Izgubili ste ovu rundu, " + "Racunar je izabrao: " + odabirKompa);
                textRezultat = "Izgubili ste ovu rundu, " + "Racunar je izabrao: " + odabirKompa
                divSaTekstom.textContent = textRezultat
                brojacKompa++;
                probaGost();
                console.log("Rezultat je: " + mojBrojac + ":" + brojacKompa)
            }
            break;

        case "kamen":
            if (final === odabirKompa){
                console.log("Isti odabir!");
                textRezultat = "Nerjesena runda! Rezultat ostaje isti"
                divSaTekstom.textContent = textRezultat
                console.log("Rezultat je: " + mojBrojac + ":" + brojacKompa)
            }else if( odabirKompa == "makaze"){
                textRezultat = 'Pobjedili ste ovu rundu, racunar je izabrao: ' + odabirKompa
                divSaTekstom.textContent = textRezultat
                console.log("Pobjedili ste ovu rundu, " + "Racunar je izabrao: " + odabirKompa);
                mojBrojac++
                probaDomacin();
                console.log("Rezultat je: " + mojBrojac + ":" + brojacKompa)
            }else if(odabirKompa == "list"){
                textRezultat = "Izgubili ste ovu rundu, " + "Racunar je izabrao: " + odabirKompa
                divSaTekstom.textContent = textRezultat
                console.log("Izgubili ste ovu rundu, " + "Racunar je izabrao: " + odabirKompa);
                brojacKompa++
               probaGost();
                console.log("Rezultat je: " + mojBrojac + ":" + brojacKompa)

            }
            break;
    }
}else{
    return;
}

if(mojBrojac == 5 && mojBrojac > brojacKompa){
    console.log("Pobjedio je Orhan!")
    divSaTekstom.textContent = "Vaša pobjeda"
}else if(brojacKompa == 5 && mojBrojac < brojacKompa){
    console.log("Pobjedio je racunar")
    divSaTekstom.textContent = "Pobjeda kompjutera"
}
}
    


function ispocetka(){
    mojBrojac = 0;
    probaDomacin();
    const domacin = document.querySelector(".homeResult")
    domacin.style.backgroundColor = "#b5cdcf"
    domacin.style.border = "none"
    brojacKompa = 0;
    probaGost();
    const gost = document.querySelector(".guestResult")
    gost.style.backgroundColor = "#b5cdcf"
    gost.style.border = "none"
    const divSaTekstom = document.querySelector(".text")
    divSaTekstom.textContent = ""
}




