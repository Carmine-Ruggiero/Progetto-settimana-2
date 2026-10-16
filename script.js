/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 const prodotti = [
    {
        name: 'Cuffie',
        category: 'Electronica',
        price: '89,99',
        rating: '4,2',
        image: 'Unavailable',
        available: 'Disponibile',
    },
    {
        name: 'Tablet',
        category: 'Electronics',
        price: '119,00',
        rating: '4,7',
        image: 'Unavailable',
        available: 'Non disponibile',
    },
    {
        name: 'Libro',
        category: 'Books',
        price: '14,90',
        rating: '4,0',
        image: 'Unavailable',
        available: 'Disponibile',
    },
    {
        name: 'Zaino',
        category: 'Scuola',
        price: '49,99',
        rating: '4,2',
        image: 'Unavailable',
        available: 'Disponibile',
    },
    {
        name: 'Lampada',
        category: 'Home',
        price: '29,50',
        rating: '3,8',
        image: 'Unavailable',
        available: 'Disponibile',
    },
    {
        name: 'Smartwatch',
        category: 'Electronics',
        price: '119,00',
        rating: '4,4',
        image: 'Unavailable',
        available: 'Disponibile',
    },
    {
        name: 'Mouse',
        category: 'Electronics',
        price: '24,90',
        rating: '4,1',
        image: 'Unavailable',
        available: 'Disponibile',
    },
    {
        name: 'Caffettiera',
        category: 'Home',
        price: '22,00',
        rating: '4,6',
        image: 'Unavailable',
        available: 'Disponibile',
    },
    {
        name: 'Giacca a Vento',
        category: 'Clothing',
        price: '120,00',
        rating: '4,5',
        image: 'Unavailable',
        available: 'Disponibile',
    },
    {
        name: 'Set Cacciaviti Professionali',
        category: 'Tools',
        price: '27,90',
        rating: '4,3',
        image: 'Unavailable',
        available: 'Disponibile',
    },
    {
        name: 'Croccantini Gatto 5kg',
        category: 'Pet Supplies',
        price: '32,50',
        rating: '4,8',
        image: 'Unavailable',
        available: 'Non disponibile',
    },
    {
        name: 'Gioco da Tavolo Strategy',
        category: 'Toys & Games',
        price: '44,99',
        rating: '4,6',
        image: 'Unavailable',
        available: 'Disponibile',
    }
]; 


/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/
/* SCRIVI QUI LA TUA RISPOSTA */




/**
 * VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
 * Funzione che ritorna una stringa tipo "€ 19,99".
 */

function formattaPrezzo(prezzo) {
    return `€ ${prezzo}`;
}
prodotti.forEach(prodotto => {
    console.log(`${prodotto.name}: ${formattaPrezzo(prodotto.price)}`);
});



/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// --- Ciclo classico per scorrere i prodotti uno alla volta ----//

for (let i = 0; i < prodotti.length; i++) {
    let p = prodotti[i]; 
    let stelline = "";
    if (p.rating === "4,7" || p.rating === "4,6" || p.rating === "4,5" || p.rating === "4,8") {
        stelline = "★★★★★";
    } else {
        stelline = "★★★★☆";
    }
    console.log(p.name + " → " + stelline);
}



/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtraPerCategoria(arrayProdotti, categoriaCercata) {
    return arrayProdotti.filter(prodotto => 
        prodotto.category.toLowerCase() === categoriaCercata.toLowerCase()
    );
}


/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function filtraProdottiSemplice() {
  let risultati = [];

  // Uso un ciclo for classico per scorrere i prodotti
  for (let i = 0; i < prodotti.length; i++) {
    let prodotto = prodotti[i];
 // Controllo direttamente il testo della disponibilità e del rating
    if (prodotto.available === 'Disponibile' && prodotto.rating >= '4,0') {
      risultati.push(prodotto);
    }
  }
  return risultati;
}
const prodottiScelti = filtraProdottiSemplice();
prodottiScelti.forEach(prodotto => {
  console.log(`${prodotto.name}: ${prodotto.rating} stelle`);
});











/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
