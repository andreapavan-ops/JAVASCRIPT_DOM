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

/*
## Esercizio 5 — Contatore con cronologia (⭐⭐ medio)

Crea un contatore che:

- Mostra il **valore corrente** in un `<h2>` grande
- Ha tre bottoni: **1**, **Reset**, **+1**
- Sotto ai bottoni c'è un `<ul>` che mostra la **cronologia** di tutte le operazioni fatte, con data e ora

Ogni volta che il valore cambia, aggiunge un `<li>` alla cronologia, ad esempio:

```
[14:32:05] +1 → Valore: 1
[14:32:07] +1 → Valore: 2
[14:32:10] -1 → Valore: 1
[14:32:15] Reset → Valore: 0
```

**Suggerimenti:**

- Usa una variabile `let contatore = 0;` per tenere il valore
- Per la data/ora corrente: `new Date().toLocaleTimeString("it-IT")` restituisce una stringa tipo "14:32:05"
- Aggiorna sia il display (`<h2>`) che la cronologia (`<ul>`) ad ogni operazione
- Per il bottone Reset, riporta il contatore a 0
- Bonus: colora il numero in verde se positivo, rosso se negativo, nero se zero
*/

/*
## Esercizio 6 — Accordion / FAQ (⭐⭐ medio)

Crea un componente accordion (come le FAQ dei siti web):

- Ci sono 4-5 domande, ognuna con un titolo cliccabile
- Cliccando su una domanda, la risposta appare/scompare (toggle)
- Solo **una risposta alla volta** può essere visibile: cliccando una domanda, le altre si chiudono

**HTML suggerito:**

```html
<div class="accordion">
    <div class="accordion-item">
        <h3 class="accordion-header">Cos'è JavaScript?</h3>
        <div class="accordion-body">
            <p>JavaScript è un linguaggio di programmazione creato nel 1995...</p>
        </div>
    </div>
    <div class="accordion-item">
        <h3 class="accordion-header">Cos'è il DOM?</h3>
        <div class="accordion-body">
            <p>Il DOM è la rappresentazione ad albero della pagina HTML...</p>
        </div>
    </div>
    <!-- altre domande... -->
</div>
```

**CSS suggerito:**

```css
.accordion-body { display: none; padding: 12px; }
.accordion-body.aperto { display: block; }
.accordion-header { cursor: pointer; padding: 12px; background: #f0f0f0; border: 1px solid #ddd; }
.accordion-header:hover { background: #e0e0e0; }
```

**Suggerimenti:**

- Usa **event delegation**: metti un solo `addEventListener` sull'elemento `.accordion` genitore
- Quando viene cliccato un header, controlla `event.target.classList.contains("accordion-header")`
- Per chiudere tutte le risposte aperte: `querySelectorAll(".accordion-body.aperto")` e rimuovi la classe `aperto` da ciascuna
- Per aprire la risposta corrente: da `event.target` (l'header cliccato), raggiungi il `.accordion-body` fratello con `.nextElementSibling`
- Usa `.classList.toggle("aperto")` per aprire/chiudere
*/














/*

## Esercizio 7 — Generatore di cards da array (⭐⭐⭐ difficile)

Dato il seguente array di dati, genera dinamicamente una griglia di cards nella pagina:

```jsx
const prodotti = [
    { id: 1, nome: "Laptop", prezzo: 899.99, categoria: "Elettronica", disponibile: true },
    { id: 2, nome: "Cuffie Bluetooth", prezzo: 49.99, categoria: "Elettronica", disponibile: true },
    { id: 3, nome: "Zaino", prezzo: 35.00, categoria: "Accessori", disponibile: false },
    { id: 4, nome: "Mouse Wireless", prezzo: 25.99, categoria: "Elettronica", disponibile: true },
    { id: 5, nome: "Borraccia", prezzo: 15.00, categoria: "Accessori", disponibile: true },
    { id: 6, nome: "Monitor 27\"", prezzo: 329.00, categoria: "Elettronica", disponibile: false },
    { id: 7, nome: "Tappetino Mouse", prezzo: 12.99, categoria: "Accessori", disponibile: true },
    { id: 8, nome: "Webcam HD", prezzo: 59.99, categoria: "Elettronica", disponibile: true }
];
```

Ogni card deve mostrare:

- Nome del prodotto
- Prezzo formattato (es. "€ 899,99")
- Categoria come "badge" colorato
- Se non è disponibile, la card appare semi-trasparente con la scritta "Non disponibile"

**Suggerimenti:**

- Crea una funzione `creaCard(prodotto)` che riceve un oggetto e restituisce un elemento DOM
- Usa `document.createElement` per creare il `<div>` della card e i suoi figli
- Per il prezzo formattato: `prodotto.prezzo.toFixed(2).replace(".", ",")` e aggiungi "€" davanti
- Per la disponibilità: usa `classList.add` per aggiungere una classe come `"non-disponibile"` e gestiscila nel CSS con `opacity: 0.5`
- Usa `dataset.id` per salvare l'id del prodotto sulla card
- Itera sull'array con `forEach` e usa `append` per inserire le cards nel contenitore
- Bonus: usa un `DocumentFragment` per inserire tutte le cards in un colpo solo

---

## Esercizio 8 — Todo List completa (⭐⭐⭐ difficile)

Crea una Todo List con le seguenti funzionalità:

1. **Aggiungere task**: input + bottone (o invio con Enter)
2. **Completare task**: click sul testo del task per segnarlo come completato (testo barrato)
3. **Eliminare task**: ogni task ha un bottone × per rimuoverlo
4. **Conteggio**: mostra "X task rimanenti" sotto la lista
5. **Filtri**: tre bottoni — "Tutti", "Attivi", "Completati" — che filtrano la visualizzazione

**Struttura suggerita per ogni task nel DOM:**

```html
<li class="task" data-completato="false">
    <span class="task-testo">Studiare JavaScript</span>
    <button class="btn-elimina">×</button>
</li>
```

**Suggerimenti:**

- Tieni un array JavaScript `const tasks = []` come "fonte di verità" dei dati, e una funzione `renderTasks()` che ricostruisce il DOM a partire dall'array
- Ogni task nell'array può essere un oggetto: `{ id: Date.now(), testo: "...", completato: false }`
- Per il bottone ×: usa **event delegation** sulla `<ul>` e controlla se `event.target` ha la classe `btn-elimina`
- Per completare: al click sullo `<span>`, trova il task nell'array con `.find()` e inverti il flag `completato`
- Per i filtri: non rimuovere i task dal DOM, ma usa `.classList.add("nascosto")` sui task che non devono essere visibili con il filtro corrente
- Per il conteggio: filtra l'array con `.filter(t => !t.completato).length`
- Per l'invio con Enter: ascolta `keydown` sull'input e controlla `event.key === "Enter"`

---

## Esercizio 9 — Tabella dinamica ordinabile (⭐⭐⭐ difficile)

Crea una tabella HTML che mostra i dati di una classe di studenti. L'utente può:

1. **Ordinare** cliccando sull'intestazione di una colonna (un click = crescente, un altro = decrescente)
2. **Cercare** uno studente tramite una barra di ricerca sopra la tabella
3. **Eliminare** una riga con un bottone su ogni riga

Dati di partenza:

```jsx
const studenti = [
    { nome: "Mario Rossi", voto: 7, classe: "5A" },
    { nome: "Luigi Verdi", voto: 9, classe: "5B" },
    { nome: "Anna Bianchi", voto: 6, classe: "5A" },
    { nome: "Sara Neri", voto: 8, classe: "5A" },
    { nome: "Marco Gialli", voto: 5, classe: "5B" },
    { nome: "Elena Blu", voto: 10, classe: "5B" },
    { nome: "Paolo Rosa", voto: 4, classe: "5A" },
    { nome: "Giulia Viola", voto: 7, classe: "5B" }
];
```

**Struttura della tabella:**

```
| Nome           | Voto ▲▼ | Classe ▲▼ |   |
|----------------|---------|-----------|---|
| Mario Rossi    | 7       | 5A        | × |
| Luigi Verdi    | 9       | 5B        | × |
| ...            | ...     | ...       | × |
```

**Suggerimenti:**

- Crea una funzione `renderTabella(dati)` che svuota il `<tbody>` e ricrea tutte le righe dall'array
- Per l'ordinamento: tieni una variabile `let ordinamento = { colonna: null, direzione: "asc" }` e usa `.sort()` sull'array prima di renderizzare
- Attenzione: `.sort()` per stringhe usa il confronto diretto (`a.nome.localeCompare(b.nome)`), per numeri servono funzioni di confronto (`a.voto - b.voto`)
- Per la ricerca: usa l'evento `input` sulla barra di ricerca e filtra l'array con `.filter()` controllando se il nome `.toLowerCase().includes(query)`
- Per eliminare: usa event delegation sul `<tbody>` e `event.target.closest("tr")` per trovare la riga
- Usa `dataset` sulle intestazioni per sapere quale colonna è stata cliccata

---

## Esercizio 10 — Quiz interattivo (⭐⭐⭐ difficile)

Crea un quiz a scelta multipla con le seguenti caratteristiche:

1. Mostra **una domanda alla volta** con 4 opzioni
2. L'utente seleziona una risposta cliccando su un'opzione
3. La risposta si colora di **verde** (corretta) o **rosso** (sbagliata)
4. Dopo 1 secondo, passa alla **domanda successiva** automaticamente
5. Alla fine mostra il **punteggio** finale e un bottone "Ricomincia"

Dati del quiz:

```jsx
const domande = [
    {
        domanda: "In che anno è stato creato JavaScript?",
        opzioni: ["1991", "1995", "2000", "2005"],
        corretta: 1
    },
    {
        domanda: "Quale operatore si usa per il confronto stretto?",
        opzioni: ["==", "===", "!=", "=>"],
        corretta: 1
    },
    {
        domanda: "Quale metodo aggiunge un elemento alla fine di un array?",
        opzioni: ["append()", "push()", "add()", "insert()"],
        corretta: 1
    },
    {
        domanda: "Cosa restituisce typeof null?",
        opzioni: ["\"null\"", "\"undefined\"", "\"object\"", "\"boolean\""],
        corretta: 2
    },
    {
        domanda: "Quale metodo seleziona elementi con un selettore CSS?",
        opzioni: ["getElement()", "findElement()", "querySelector()", "selectCSS()"],
        corretta: 2
    }
];
```

**Suggerimenti:**

- Tieni una variabile `let domandaCorrente = 0` e `let punteggio = 0`
- Crea una funzione `mostraDomanda(indice)` che aggiorna il DOM con la domanda e le opzioni correnti
- Genera le opzioni come `<button>` o `<div>` cliccabili. Usa un ciclo per crearle dall'array `opzioni`
- Al click su un'opzione, confronta l'indice dell'opzione con `domande[domandaCorrente].corretta`
- Per il ritardo di 1 secondo prima di passare alla domanda successiva: usa `setTimeout(() => { ... }, 1000)`
- Dopo il timeout, incrementa `domandaCorrente` e chiama di nuovo `mostraDomanda`
- Quando `domandaCorrente >= domande.length`, mostra il punteggio finale
- Per il bottone "Ricomincia": resetta `domandaCorrente = 0`, `punteggio = 0` e chiama `mostraDomanda(0)`

---

## Esercizio 11 — Drag and Drop manuale (⭐⭐⭐⭐ sfida)

Crea un'interfaccia con due colonne: "Da fare" e "Fatto". Ogni task è una card che può essere spostata dall'una all'altra colonna cliccando un bottone "→" (sposta a Fatto) o "←" (sposta a Da fare).

**Funzionalità:**

- Almeno 5 task pre-caricati nella colonna "Da fare"
- Ogni card ha il nome del task e un bottone per spostare
- Quando si sposta un task, l'elemento DOM si muove nell'altra colonna (non viene ricreato)
- Un conteggio mostra "Da fare: X | Completati: Y" e si aggiorna automaticamente
- Se una colonna è vuota, mostra un messaggio "Nessun task"

**Suggerimenti:**

- Crea due `<div>` per le due colonne, ciascuno con un `<ul>` dentro
- Per spostare un elemento DOM da un genitore all'altro, basta fare `nuovoGenitore.appendChild(elemento)` — il browser lo rimuove automaticamente dal vecchio genitore
- Usa event delegation su ciascuna colonna
- Quando sposti un task nella colonna "Fatto", cambia il testo del bottone da "→" a "←" (e viceversa)
- Per il conteggio: crea una funzione `aggiornaConteggi()` che conta i `<li>` in ciascuna colonna con `.children.length`
- Per il messaggio "Nessun task": controlla se la colonna è vuota dopo ogni spostamento

---

## 🏆 Esercizio 12 — Editor di note con formattazione (⭐⭐⭐⭐ sfida)

Crea un mini-editor di note che permette di:

1. **Creare nuove note** con un titolo e un contenuto
2. **Visualizzare** tutte le note come cards in una griglia
3. **Modificare** una nota cliccando su di essa (il testo diventa editabile)
4. **Eliminare** note con un bottone ×
5. **Cercare** tra le note con una barra di ricerca
6. **Colorare** le note: ogni nota ha un selettore per cambiare il colore di sfondo (giallo, verde, rosa, azzurro)
7. **Conteggio** del numero di note attive

**Suggerimenti:**

- Struttura i dati come array di oggetti: `{ id: Date.now(), titolo: "...", contenuto: "...", colore: "giallo" }`
- Usa un pattern "dati → render": modifica sempre l'array, poi richiama una funzione `renderNote()` che ricostruisce il DOM
- Per rendere editabile un campo: al doppio click (`dblclick`), sostituisci il `<p>` con un `<input>` precompilato. Al blur o Enter, salva il nuovo valore nell'array e ri-renderizza
- Per la ricerca: filtra l'array su titolo e contenuto con `.toLowerCase().includes()`
- Per il colore: usa un `<select>` o dei pallini colorati cliccabili dentro la card. Al cambio, aggiorna `nota.colore` e imposta `.style.backgroundColor`
- Usa `dataset.id` sulle cards per collegare ogni card al suo oggetto nell'array
- Bonus: salva le note in `localStorage` così sopravvivono al refresh della pagina

/