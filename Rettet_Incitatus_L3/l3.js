/* Lektion 3 – Formen-Daten: Personalendungen, esse, Imperativ, Vokativ (nur Lernwörter aus L1–3) */
(function () {
const P = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie'];
const PL = ['1. Person Sg.', '2. Person Sg.', '3. Person Sg.', '1. Person Pl.', '2. Person Pl.', '3. Person Pl.'];
const END = ['o', 's', 't', 'mus', 'tis', 'nt'];
// [Infinitiv, Stamm, Konjugation, deutsch Infinitiv, deutsche Formen (ich … sie)]
const V = [
 ['vocare', 'voca', 'a', 'rufen', ['rufe', 'rufst', 'ruft', 'rufen', 'ruft', 'rufen']],
 ['laudare', 'lauda', 'a', 'loben', ['lobe', 'lobst', 'lobt', 'loben', 'lobt', 'loben']],
 ['exspectare', 'exspecta', 'a', 'warten', ['warte', 'wartest', 'wartet', 'warten', 'wartet', 'warten']],
 ['laborare', 'labora', 'a', 'arbeiten', ['arbeite', 'arbeitest', 'arbeitet', 'arbeiten', 'arbeitet', 'arbeiten']],
 ['clamare', 'clama', 'a', 'schreien', ['schreie', 'schreist', 'schreit', 'schreien', 'schreit', 'schreien']],
 ['properare', 'propera', 'a', 'eilen', ['eile', 'eilst', 'eilt', 'eilen', 'eilt', 'eilen']],
 ['narrare', 'narra', 'a', 'erzählen', ['erzähle', 'erzählst', 'erzählt', 'erzählen', 'erzählt', 'erzählen']],
 ['cogitare', 'cogita', 'a', 'denken', ['denke', 'denkst', 'denkt', 'denken', 'denkt', 'denken']],
 ['salutare', 'saluta', 'a', 'grüßen', ['grüße', 'grüßt', 'grüßt', 'grüßen', 'grüßt', 'grüßen']],
 ['servare', 'serva', 'a', 'retten', ['rette', 'rettest', 'rettet', 'retten', 'rettet', 'retten']],
 ['rogare', 'roga', 'a', 'fragen', ['frage', 'fragst', 'fragt', 'fragen', 'fragt', 'fragen']],
 ['stare', 'sta', 'a', 'stehen', ['stehe', 'stehst', 'steht', 'stehen', 'steht', 'stehen']],
 ['monere', 'mone', 'e', 'ermahnen', ['ermahne', 'ermahnst', 'ermahnt', 'ermahnen', 'ermahnt', 'ermahnen']],
 ['tacere', 'tace', 'e', 'schweigen', ['schweige', 'schweigst', 'schweigt', 'schweigen', 'schweigt', 'schweigen']],
 ['videre', 'vide', 'e', 'sehen', ['sehe', 'siehst', 'sieht', 'sehen', 'seht', 'sehen']],
 ['ridere', 'ride', 'e', 'lachen', ['lache', 'lachst', 'lacht', 'lachen', 'lacht', 'lachen']],
 ['sedere', 'sede', 'e', 'sitzen', ['sitze', 'sitzt', 'sitzt', 'sitzen', 'sitzt', 'sitzen']],
 ['parere', 'pare', 'e', 'gehorchen', ['gehorche', 'gehorchst', 'gehorcht', 'gehorchen', 'gehorcht', 'gehorchen']],
 ['audere', 'aude', 'e', 'wagen', ['wage', 'wagst', 'wagt', 'wagen', 'wagt', 'wagen']],
 ['audire', 'audi', 'i', 'hören', ['höre', 'hörst', 'hört', 'hören', 'hört', 'hören']],
 ['venire', 'veni', 'i', 'kommen', ['komme', 'kommst', 'kommt', 'kommen', 'kommt', 'kommen']],
 ['scire', 'sci', 'i', 'wissen', ['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen']],
 ['reperire', 'reperi', 'i', 'finden', ['finde', 'findest', 'findet', 'finden', 'findet', 'finden']],
];
const ESSE = ['sum', 'es', 'est', 'sumus', 'estis', 'sunt'];
const ESSE_DE = ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'];
// Form bauen: [Stamm-Teil, Sprechvokal, Endung]
function teile(v, p) {
  const [, st, k] = v;
  if (k === 'a' && p === 0) return [st.slice(0, -1), '', 'o'];
  if (k === 'i' && p === 5) return [st, 'u', 'nt'];
  return [st, '', END[p]];
}
function form(v, p) { if (v === 'esse') return ESSE[p]; return teile(v, p).join(''); }
function deutsch(v, p) {
  const pr = ['ich', 'du', 'er', 'wir', 'ihr', 'sie'][p];
  if (v === 'esse') return pr + ' ' + ESSE_DE[p];
  return pr + ' ' + v[4][p];
}
const pick = a => a[Math.random() * a.length | 0];
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

// Kleine Sätze aus der Geschichte (Lauschen am Fenster): [Satz, Verbform, Person-Index]
const SAETZE = [
 ['Incitatum necare paramus.', 'paramus', 3, 'Wir haben vor, Incitatus zu töten.'], ['Quid cogitas, Narcisse?', 'cogitas', 1, 'Was denkst du, Narcissus?'], 
 ['Ego certe senator sum.', 'sum', 0, 'Ich bin sicherlich Senator.'], ['Tu autem mercator es!', 'es', 1, 'Du aber bist Kaufmann!'], ['Cur hic statis, servi?', 'statis', 4, 'Warum steht ihr hier, Sklaven?'],
 ['Equum non amamus.', 'amamus', 3, 'Wir lieben das Pferd nicht.'], ['Servi non laborant.', 'laborant', 5, 'Die Sklaven arbeiten nicht.'], ['Hic sedeo et exspecto.', 'sedeo', 0, 'Ich sitze hier und warte.'],
 ['Quid audis, Pomponi?', 'audis', 1, 'Was hörst du, Pomponius?'], ['Nunc venimus.', 'venimus', 3, 'Jetzt kommen wir.'], ['Cur ridetis, amici?', 'ridetis', 4, 'Warum lacht ihr, Freunde?'],
 ['Consilium scio.', 'scio', 0, 'Ich kenne den Plan.'], ['Davus nos non videt.', 'videt', 2, 'Davus sieht uns nicht.'], ['Amici consilium sciunt.', 'sciunt', 5, 'Die Freunde kennen den Plan.'],
 ['Cur taces, Pomponi?', 'taces', 1, 'Warum schweigst du, Pomponius?'], ['Statim properamus!', 'properamus', 3, 'Wir beeilen uns sofort!'], ['Bene cogitatis!', 'cogitatis', 4, 'Ihr denkt gut!'],
 ['Equum statim necamus.', 'necamus', 3, 'Wir töten das Pferd sofort.'], ['Victoriam non amo.', 'amo', 0, 'Ich liebe den Sieg nicht.'],
 ['Nunc frumentum paras.', 'paras', 1, 'Jetzt bereitest du Getreide vor.'], ['Servi semper clamant.', 'clamant', 5, 'Die Sklaven schreien immer.'], ['Hic adsumus.', 'adsumus', 3, 'Wir sind hier.'],
 ['Cur non adestis?', 'adestis', 4, 'Warum seid ihr nicht da?'], ['Pomponi, tu bene narras.', 'narras', 1, 'Pomponius, du erzählst gut.'], ['Mercatores veniunt.', 'veniunt', 5, 'Die Kaufleute kommen.'],
 ['Senatorem saluto.', 'saluto', 0, 'Ich grüße den Senator.'], ['Itaque gaudemus.', 'gaudemus', 3, 'Deshalb freuen wir uns.'], ['Verba auditis?', 'auditis', 4, 'Hört ihr die Worte?'],
];

window.L3 = { P, PL, END, V, ESSE, teile, form, deutsch, pick, shuffle, SAETZE,
  // zufällige Aufgabe: Verb (oder 'esse') + Person
  zufall(mitEsse = true) { const v = mitEsse && Math.random() < .15 ? 'esse' : pick(V); return { v, p: Math.random() * 6 | 0 }; },
};
})();
