// Configurazione di RONDA su GitHub Pages.
// Incolla qui l'URL della Web App (Apps Script → Esegui il deployment → Gestisci deployment), quello che finisce con /exec.
// Questo file si carica una volta sola: quando aggiorni index.html non serve toccarlo.
window.RONDA_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxuvzYDkP5zd9fpWjHXaRouZCtSUbTeolR8oxQkscsTPlX973_LbvU7sWsP5sgfz0S-/exec';

// Build mostrata in basso a sinistra: aggiornala a ogni rilascio (es. data + progressivo)
window.RONDA_BUILD = '2026.10.01-2';
 
// Sinonimi delle categorie: nome come scritto nel Gestionale → modi in cui può essere chiesto.
// "voce" è come RONDA pronuncia la categoria. Per aggiungerne una, copia una riga e adattala.
window.RONDA_ALIASES = {
  '1a SQ.':     { voce: 'prima squadra', alias: ['prima squadra', 'seconda categoria'] },
  'U17 - 2010': { voce: 'under 17',      alias: ['U17', 'under 17', '2010', 'allievi A'] }
};
 
