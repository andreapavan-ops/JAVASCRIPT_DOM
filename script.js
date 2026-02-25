/* ESERCIZIO 1 - Scrivi in `script.js` il codice per stampare nella console:

1. Il testo contenuto nel titolo `h1`
2. Il numero di paragrafi con classe `descrizione`
3. Il testo del secondo elemento `<li>` della lista
4. Il tag del genitore della lista (cioè di `<ul>`)

**Suggerimenti:**

- Per il punto 1: seleziona con `getElementById` o `querySelector`, poi leggi `.textContent`
- Per il punto 2: usa `querySelectorAll` e controlla `.length`
- Per il punto 3: `querySelectorAll` restituisce una lista indicizzata a partire da `[0]`
- Per il punto 4: ogni elemento ha una proprietà `.parentElement` e `.tagName`
*/

// 1. Il testo contenuto nel titolo h1
const titolo = document.getElementById("titolo");
console.log(titolo.textContent); // "Benvenuto"

// 2. Il numero di paragrafi con classe "descrizione"
const paragrafi = document.querySelectorAll(".descrizione");
console.log(paragrafi.length); // 2

// 3. Il testo del secondo elemento <li> della lista
const voci = document.querySelectorAll("#lista li");
console.log(voci[1].textContent); // "Secondo"

// 4. Il tag del genitore della lista <ul>
const lista = document.getElementById("lista");
console.log(lista.parentElement.tagName); // "BODY"



/*
## Esercizio 2 — Cambia tutto! (⭐ facile)

Partendo dallo stesso HTML dell'esercizio 1, scrivi il codice JavaScript per:

1. Cambiare il testo dell'`h1` in "DOM Manipulation è fantastico!"
2. Aggiungere la classe `evidenziato` al primo paragrafo
3. Cambiare il colore di sfondo dell'`h1` in `lightblue`
4. Aggiungere un attributo `data-versione="2.0"` alla lista `ul`
5. Cambiare il testo del terzo `<li>` in "Terzo (modificato)"

Aggiungi questo CSS per vedere l'effetto della classe:

```css
.evidenziato { background-color: yellow; padding: 4px; }
```

**Suggerimenti:**

- Per il testo: `.textContent = "..."`
- Per le classi: `.classList.add("...")`
- Per lo sfondo: `.style.backgroundColor = "..."`
*/

// 1. Cambia il testo dell'h1
document.getElementById("titolo").textContent = "DOM Manipulation è fantastico!";

// 2. Aggiunge la classe "evidenziato" al primo paragrafo
const primoP = document.querySelector(".descrizione");
primoP.classList.add("evidenziato");

// 3. Cambia il colore di sfondo dell'h1

/*
Ho riusato titolo già dichiarato alla riga 17 dell'Esercizio 1 — non serve ri-selezionare.

Nota importante: in JavaScript le proprietà CSS si scrivono in camelCase:
CSS	                JavaScript
background-color	backgroundColor
font-size	        fontSize
border-radius	    borderRadius
Ricarica con F5 e l'h1 avrà lo sfondo azzurro.
*/

titolo.style.backgroundColor = "lightblue";

// 4. Aggiunge l'attributo data-versione="2.0" alla lista ul
lista.setAttribute("data-versione", "2.0");

// 5. Cambia il testo del terzo <li>
voci[2].textContent = "Terzo (modificato)";




/*
## Esercizio 3 — Generatore di lista (⭐⭐ medio)

Crea una pagina con:

- Un `<input>` di tipo testo con placeholder "Aggiungi elemento..."
- Un `<button>` con testo "Aggiungi"
- Un `<ul>` vuoto

Quando l'utente scrive qualcosa nell'input e clicca il bottone:

1. Viene creato un nuovo `<li>` con il testo dell'input
2. Il `<li>` viene aggiunto alla lista `<ul>`
3. L'input viene svuotato e rimette il focus sull'input

Se l'input è vuoto, non aggiungere nulla.

**Suggerimenti:**

- Seleziona input, bottone e lista con `querySelector`
- Aggiungi un `addEventListener("click", ...)` al bottone
- Leggi il valore dell'input con `.value` e controllalo con `.trim() === ""`
- Crea il `<li>` con `document.createElement("li")`
- Imposta il testo con `.textContent`
- Aggiungilo alla lista con `.appendChild()` o `.append()`
- Svuota l'input impostando `.value = ""` e rimetti il focus con `.focus()`
*/

// Seleziona input, bottone e lista
const campo = document.querySelector("#campo");
const btn = document.querySelector("#btn");
const listaNuova = document.querySelector("#lista-nuova");

// Ascolta il click sul bottone
btn.addEventListener("click", function() {
    const testo = campo.value;

    if (testo.trim() === "") {
        return; // input vuoto: non fare nulla
    }

    // Crea un nuovo elemento <li> e imposta il testo
    const nuovoLi = document.createElement("li");
    nuovoLi.textContent = testo;

    // Aggiunge il <li> alla lista
    listaNuova.appendChild(nuovoLi);

    // Svuota l'input e rimette il focus
    campo.value = "";
    campo.focus();
});


/*

## Esercizio 4 — Semaforo (⭐⭐ medio)
Crea un semaforo interattivo:

- Tre cerchi (rosso, giallo, verde) disposti verticalmente, tutti grigi di default
- Un bottone "Prossimo" che ad ogni click accende il colore successivo (e spegne gli altri)
- Il ciclo è: rosso → giallo → verde → rosso → ...

**HTML suggerito:**

```html
<div id="semaforo">
    <div class="luce" id="rosso"></div>
    <div class="luce" id="giallo"></div>
    <div class="luce" id="verde"></div>
</div>
<button id="btn-prossimo">Prossimo</button>
```

**CSS suggerito:**

```css
.luce {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #ddd;
    margin: 8px auto;
    border: 2px solid #999;
    transition: background-color 0.3s;
}

#semaforo {
    width: 120px;
    background: #333;
    padding: 16px;
    border-radius: 12px;
}
```

**Suggerimenti:**

- Tieni una variabile `let stato = 0;` che tiene traccia della luce corrente (0=rosso, 1=giallo, 2=verde)
- Ad ogni click, incrementa lo stato con `stato = (stato + 1) % 3` (il modulo fa tornare a 0 dopo 2)
- Prima resetta tutte le luci a grigio, poi colora quella giusta in base allo stato
- I colori: `#e74c3c` (rosso), `#f1c40f` (giallo), `#2ecc71` (verde)

*/

const luci = document.querySelectorAll(".luce");
const btnProssimo = document.querySelector("#btn-prossimo");
const colori = ["#e74c3c", "#f1c40f", "#2ecc71"];

// Partiamo da 2 (verde) così il primo click mostra il rosso
let stato = 2;

btnProssimo.addEventListener("click", function() {
    // Avanza allo stato successivo (0=rosso, 1=giallo, 2=verde)
    stato = (stato + 1) % 3;

    // Spegni tutte le luci
    luci.forEach(luce => luce.style.backgroundColor = "");

    // Accendi solo la luce corrente
    luci[stato].style.backgroundColor = colori[stato];
});





