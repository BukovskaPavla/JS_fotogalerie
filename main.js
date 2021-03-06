/*
Úkol:
=====
Tvoříš galerii obrázků. Seznam obrázků máš uložený v poli obrazky[].
Z celé galerie je vidět vždy jen jeden obrázek.
Na stránce jsou tlačítka "Předchozí" a "Další"- při stisknutí tlačítka
zobraz předchozí/následující obrázek (nahraď zdroj "src" obrázku
jménem nového obrázku).

Na stránce je také prvek <div id="pocitadlo", do kterého vždy vypiš,
název a pořadí obrázku, na kterém se nacházíš. Např. "ovce.jpg - 3 / 5".
Mysli na to, že člověk a JavaScript přemýšlí o "prvním" obrázku
každý trochu jinak :)


Bonusový úkol:
==============
Doplň logiku, která zajistí, že po poslední fotce následuje znovu
ta první a před první fotkou je znovu ta poslední. Tzn. galerii lze
procházet v kruhu "dokola".

Tlačítka předchozí/následující nahraď malým náhledem dalšího/
předcházejícího obrázku. Všechny tři obrázky (velký aktuální a malý
předchozí/následující se samozřejmě budou měnit adekvátně tomu, jak procházíš
galerií.


Extra bonus:
============================
Na konec stránky přidej proužek, kde budou malé náhledy všech obrázků
v galerii. Aktuální obrázek bude vždy nějakým způsobem zvýrazněn.

Co musíš udělat:
- doplnit do HTML značku, do které pak JavaScriptem vygeneruješ seznam obrázků
- trochu CSS, aby to nevypadalo úplně příšerně. Pokud CSS neovládáš tak dobře,
netrap se tím - jde nám hlavně o JavaScript. Případně se zeptej na Facebooku
a my ti rádi připravíme CSS na míru tvému řešení úkolu.
- při startu stránky musíš do svého nového HTML prvku vygenerovat seznam
všech obrázků v galerii
- aktuální obrázek zvýraznit - např. přidáním nějaké třídy s červeným rámečkem
nebo něco podobného
- při změně obrázku odstranit zvýraznění z předchozího obrázku a zvýraznit nový
*/


let obrazky = [
    'kocka.jpg',
    'opice.jpg',
    'ovce.jpg',
    'pes.jpg',
    'sova.jpg',
    'zajic.jpg'
];



let obrazek = document.querySelector("#foto")
let sipkaLeva = document.querySelector(".sipkaLeva")
let sipkaPrava = document.querySelector(".sipkaPrava")
let pocitadlo = document.querySelector("#pocitadlo")

let poradi = 0

sipkaPrava.addEventListener("click", dalsiObrazek)
sipkaLeva.addEventListener("click", predchoziObrazek)



function priNacitani(){
    obrazek.src = "obrazky/" + obrazky[poradi]
    obrazek.alt = obrazky[poradi]
    
    //nacteni obrazku do HTML do pruhGalerie na spod stranky
    let obsah = ""
    for (let i = 0; i < obrazky.length; i++){
        obsah += `<img id="fotoPruh" src="obrazky/${obrazky[i]}" alt="${obrazky[i]}">`
        pruhGalerie.innerHTML = obsah
    }

    //podminky, kvuli nahledum fotek na sipkach
    if (poradi > 0 && poradi < obrazky.length-1) { 
    sipkaPrava.src = "obrazky/" + obrazky[poradi + 1]
    sipkaLeva.src = "obrazky/" + obrazky[poradi - 1]
    }
    else if( poradi == 0){
        sipkaPrava.src = "obrazky/" + obrazky[poradi + 1]
        sipkaLeva.src = "obrazky/" + obrazky[obrazky.length-1]
    }
    else if (poradi == obrazky.length-1){
        sipkaPrava.src = "obrazky/" + obrazky[0]
        sipkaLeva.src = "obrazky/" + obrazky[poradi - 1]
    }

    
    pocitadlo.innerHTML = `${obrazky[poradi]} - ${(poradi+1)} / ${(obrazky.length)}`
}

function dalsiObrazek(){
    if (poradi < 5){
    poradi = poradi + 1
    priNacitani()
    }
    else {
        poradi = 0
        priNacitani()
    }
}

function predchoziObrazek(){
    if (poradi > 0){
    poradi = poradi - 1
    priNacitani()
    }
    else {
        poradi = 5
        priNacitani()
    }
}

