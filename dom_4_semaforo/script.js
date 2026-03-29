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

