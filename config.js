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
  'U12 - 2015': { voce: 'under 12',      alias: ['U12', 'under 12', '2015', 'Esordienti B'] },
  'U11 - 2016A': { voce: 'under 12',      alias: ['U11', 'under 11', '2016', 'Pulcini 2016'] },
  'U11 - 2016B': { voce: 'under 12',      alias: ['U11', 'under 11', '2016', 'Pulcini 2016'] },
  'U10 - 2017A': { voce: 'under 12',      alias: ['U10', 'under 10', '2017', 'Pulcini 2017'] },
  'U10 - 2017B': { voce: 'under 12',      alias: ['U10', 'under 10', '2017', 'Pulcini 2017'] },
  'U9 - 2018A': { voce: 'under 12',      alias: ['U9', 'under 9', '2018', 'Primi Calci 2018'] },
  'U9 - 2018B': { voce: 'under 12',      alias: ['U9', 'under 9', '2018', 'Primi Calci 2018'] },
  'U8 - 2019A': { voce: 'under 12',      alias: ['U8', 'under 8', '2019', 'Primi Calci 2019'] },
  'U8 - 2019B': { voce: 'under 12',      alias: ['U8', 'under 8', '2019', 'Primi Calci 2019'] },
  'U7 - 2020A': { voce: 'under 12',      alias: ['U7', 'under 7', '2020', 'Piccoli Amici'] }
 };
