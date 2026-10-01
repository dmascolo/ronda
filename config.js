// Configurazione di RONDA su GitHub Pages.
// Incolla qui l'URL della Web App (Apps Script → Esegui il deployment → Gestisci deployment), quello che finisce con /exec.
// Questo file si carica una volta sola: quando aggiorni index.html non serve toccarlo.
window.RONDA_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxuvzYDkP5zd9fpWjHXaRouZCtSUbTeolR8oxQkscsTPlX973_LbvU7sWsP5sgfz0S-/exec';

// Build mostrata in basso a sinistra: aggiornala a ogni rilascio (es. data + progressivo)
window.RONDA_BUILD = '2026.10.01-4';
 
// Sinonimi delle categorie: nome come scritto nel Gestionale → modi in cui può essere chiesto.
// "voce" è come RONDA pronuncia la categoria. Per aggiungerne una, copia una riga e adattala.
window.RONDA_ALIASES = {
  '1a SQ.':     { voce: 'prima squadra', alias: ['Prima Squadra', 'Seconda Categoria'] },
  'Juniores': { voce: 'Juniores',      alias: ['Juniores'] },
  'U18': { voce: 'under 18',      alias: ['U18', 'Under 18', '2009'] },
  'U17 - 2010': { voce: 'under 17',      alias: ['U17', 'under 17', '2010', 'Allievi A'] },
  'U16 - 2011': { voce: 'under 16',      alias: ['U16', 'under 16', '2011', 'Allievi B'] },
  'U15 - 2012': { voce: 'under 15',      alias: ['U15', 'under 15', '2012', 'Giovanissimi A'] },
  'U14 - 2013': { voce: 'under 14',      alias: ['U14', 'under 14', '2013', 'Giovanissimi B'] },
  'U13 - 2014': { voce: 'under 13',      alias: ['U13', 'under 13', '2014', 'Esordienti A'] },
  'U12 - 2015': { voce: 'under 12',      alias: ['U12', 'under 12', '2015', 'Esordienti B'] }
 };
 
