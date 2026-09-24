/* Langua — shared content and interactions for the five exhibits. */
const exhibits = {
  english: {
    name: 'English', native: 'English', country: 'United Kingdom', code: 'EN', accent: '#bd3348', deep: '#762132', wash: '#dce2dd',
    hero: 'assets/english-hero.jpg',
    rootsImage: 'assets/english-roots.jpg',
    storyImage: 'assets/english-story.jpg',
    wordsImage: 'assets/english-words.jpg',
    soundImage: 'assets/english-hero.jpg',
    intro: 'A Germanic island language that learned to spread: first through conquest, then print, trade, science, migration, and the internet.',
    lineage: [['c. 4500–2500 BCE', 'Proto-Indo-European', 'The reconstructed ancestor of most languages in Europe and parts of Asia.'], ['c. 500 BCE', 'Proto-Germanic', 'The shared source of English, German, Dutch and the Scandinavian languages.'], ['c. 450–1100', 'Old English', 'Brought to Britain by Anglo-Saxon settlers; its grammar was much more inflected than today.'], ['today', 'English', 'A global language with a Germanic core and a remarkably mixed vocabulary.']],
    history: [['5th–7th c.', 'Anglo-Saxon settlement', 'Angles, Saxons and Jutes brought West Germanic dialects to Britain. Their speech became Old English.'], ['1066', 'The Norman Conquest', 'French became an important language of the ruling elite and administration. English kept its Germanic grammar but absorbed thousands of French words.'], ['c. 1380s', 'Chaucer’s London English', 'The Canterbury Tales showed that English could support ambitious literature, not only everyday speech.'], ['1476', 'Printing reaches England', 'William Caxton’s press helped spread written forms, though spelling was never fully regularized.'], ['present', 'A pluricentric world language', 'English has many standard and regional varieties, shaped by communities on every continent.']],
    words: [['word with a past', 'window', 'From Old Norse vindauga, literally “wind-eye.” Viking contact left a durable mark on everyday English.'], ['French arrival', 'justice', 'A word of Norman French origin that entered English after 1066, alongside court, parliament and prison.'], ['worldwide life', 'tea', 'Borrowed through trade from Chinese varieties. English vocabulary records the language’s long contact history.']],
    traits: [['Word order does heavy work', 'Modern English has little noun-case marking, so it usually relies on subject–verb–object order: “The dog bit the man” is not the same as “The man bit the dog.”'], ['A spelling time capsule', 'English spelling often records earlier pronunciations. The Great Vowel Shift changed many long vowels after spelling had begun to stabilize in print.'], ['Stress changes the sound', 'Unstressed syllables commonly reduce to a quiet schwa /ə/, one reason natural English rhythm can sound very different from its spelling.'], ['Many Englishes, no single accent', 'Received Pronunciation, General American, Indian English, Nigerian English and countless other varieties are all part of English’s living story.']],
    culture: { title: 'A language carried by pages and people.', text: ['English did not spread only through one place or one institution. Its literature moves from Beowulf and Shakespeare to novels, spoken-word poetry, music, film, journalism and online communities. Every stage adds new voices and new ways of writing.', 'Its global reach also means responsibility: English is often a bridge language, but it should not erase the many other languages people bring into a conversation. The most interesting English is often English in contact with another language.'], quote: '“The limits of my language mean the limits of my world.” — Ludwig Wittgenstein' },
    phrase: 'How do you do?', phonetic: '/haʊ duː juː duː/', meaning: 'Originally a polite greeting, not a question asking for information. The response can simply repeat the phrase.',
    sources: 'Photography: local project assets sourced from Unsplash. Language facts: Encyclopaedia Britannica and the Oxford English Dictionary’s historical notes.'
  },
  french: {
    name: 'French', native: 'Français', country: 'France', code: 'FR', accent: '#355ea8', deep: '#213d73', wash: '#e0e7ee',
    hero: 'assets/french-hero.jpg',
    rootsImage: 'assets/french-roots.jpg',
    storyImage: 'assets/french-story.jpg',
    wordsImage: 'assets/french-words.jpg',
    soundImage: 'assets/french-hero.jpg',
    intro: 'Le français s’est développé à partir du latin parlé dans le nord de la Gaule, puis est devenu une langue de littérature, de diplomatie, de droit, de migration et d’échanges internationaux.',
    lineage: [['env. 4500–2500 av. J.-C.', 'Proto-Indo-Européen', 'L’ancêtre reconstruit de la branche romane et de nombreuses autres familles de langues.'], ['1er–5e siècle', 'Latin vulgaire', 'Le latin parlé dans tout l’Empire romain, évoluant selon chaque province.'], ['9e–13e siècle', 'Ancien français', 'Des variétés gallo-romanes du nord sont attestées dans des textes comme les Serments de Strasbourg.'], ['aujourd’hui', 'Français', 'Une langue romane parlée en Europe, en Afrique, en Amérique, dans le Pacifique et au-delà.']],
    history: [['842', 'Les Serments de Strasbourg', 'L’un des premiers textes survivants dans une variété romane distincte du latin.'], ['1539', 'L’ordonnance de Villers-Cotterêts', 'L’ordonnance de Villers-Cotterêts imposa l’usage du français dans les actes judiciaires et notariés, à la place du latin.'], ['1635', 'L’Académie française', 'Fondée pour travailler sur la langue française et son dictionnaire ; son rôle reste surtout consultatif.'], ['19e–20e siècle', 'École et standardisation', 'L’école nationale a accéléré l’usage du français standard avec les langues régionales.'], ['aujourd’hui', 'Une langue à plusieurs pôles', 'Le français est façonné par les locuteurs de France et d’autres pays, chacun avec son propre vocabulaire et son accent.']],
    words: [['histoire d’emprunt', 'week-end', 'Emprunt familier à l’anglais dans le français contemporain, surtout dans les usages informels.'], ['du latin', 'parler', 'Du latin tardif parabolare, “parler en paraboles” ; il a remplacé loqui dans le parler quotidien.'], ['un petit mot précis', 'chez', 'Signifie “chez, à la maison de”. Sa brièveté en fait une préposition immédiatement reconnaissable.']],
    traits: [['Le genre est grammatical', 'Les noms français sont masculins ou féminins. Le genre appartient au mot, pas à la chose elle-même : le livre, la table.'], ['Les voyelles nasales comptent', 'Dans bon, pain et un, l’air passe aussi par le nez. Le n ou le m écrit indique souvent cette voyelle plutôt qu’une consonne séparée.'], ['La liaison relie les mots', 'Dans certains contextes soignés ou fixes, une consonne finale normalement muette se prononce avant une voyelle : les amis se prononce comme /le.z‿a.mi/.'], ['Le français a plusieurs centres', 'Le français de Paris n’est qu’une variété. Les locuteurs du Québec, du Sénégal, de Belgique, de Suisse, des Caraïbes et de l’océan Indien apportent chacun leur usage.']],
    culture: { title: 'Une langue du salon, de la rue et du monde.', text: ['Le français a une longue tradition littéraire, des chansons médiévales à Molière, Duras, Césaire, Senghor et aux écrivains contemporains du monde francophone. Son histoire inclut la culture de cour et le pouvoir colonial, mais son présent ne se réduit ni à l’un ni à l’autre.', 'Étudier le français sérieusement, c’est écouter au-delà de la France. Un mot, un accent ou une expression peuvent porter le son de Montréal, Dakar, Port-au-Prince, Bruxelles ou Marseille — et cette variété est l’une de ses grandes richesses.'], quote: '“La langue française est une langue qui fait sentir les choses.” — Albert Camus' },
    phrase: 'Enchanté de faire votre connaissance.', phonetic: '/ɑ̃.ʃɑ̃.te də fɛʁ vɔ.tʁə kɔ.nɛ.sɑ̃s/', meaning: '« Heureux de vous connaître. » Remarquez les voyelles nasales : elles s’écrivent avec une voyelle suivie de n ou m, sans produire un son nasal complet à chaque fois.',
    sources: 'Photographie : éléments visuels locaux issus d’Unsplash. Faits linguistiques : Encyclopaedia Britannica et l’Académie française.'
  },
  german: {
    name: 'Deutsch', native: 'Deutsch', country: 'Deutschland', code: 'DE', accent: '#c79021', deep: '#725111', wash: '#e7dfce',
    hero: 'assets/german-hero.jpg',
    rootsImage: 'assets/german-roots.jpg',
    storyImage: 'assets/german-story.jpg',
    wordsImage: 'assets/german-words.jpg',
    soundImage: 'assets/german-sound.jpg',
    intro: 'Deutsch ist eine westgermanische Sprache, deren regionale Vielfalt, Wortbildungskraft und Lautverschiebungen eine der markantesten Sprachgeschichten Europas ausmachen.',
    lineage: [['ca. 4500–2500 v. Chr.', 'Proto-Indoeuropäisch', 'Die rekonstruierte gemeinsame Wurzel vieler Sprachen in Europa und Teilen Asiens.'], ['ca. 500 v. Chr.', 'Urgermanisch', 'Die gemeinsame Vorstufe von Deutsch, Englisch, Niederländisch und den skandinavischen Sprachen.'], ['ca. 750–1050', 'Althochdeutsch', 'Eine Gruppe hochdeutscher Dialekte, in religiösen und rechtlichen Texten überliefert.'], ['heute', 'Deutsch', 'Eine Standardsprache mit starken regionalen Varianten in Mitteleuropa.']],
    history: [['ca. 750–1050', 'Althochdeutsch', 'Die hochdeutsche Lautverschiebung unterschied die hochdeutschen Varietäten deutlich von Englisch und Niederländisch.'], ['1522–1534', 'Luthers Bibel', 'Martin Luthers Übersetzung benutzte eine ostmitteldeutsche Schriftsprache, die sehr einflussreich wurde.'], ['18.–19. Jh.', 'Ein literarischer Standard', 'Schriftsteller, Schulen und Druckkultur stabilisierten die Standardsprache, während Dialekte weiterlebten.'], ['1901', 'Orthographische Konferenz', 'Eine Konferenz in Berlin legte gemeinsame Regeln für die deutsche Rechtschreibung fest, die ab 1902 offiziell angewendet wurden.'], ['heute', 'Eine Sprache der Regionen', 'Die Standardsprache koexistiert mit Dialekten und eng verwandten Varietäten in Deutschland, Österreich, der Schweiz und darüber hinaus.']],
    words: [['ein Wort aus Teilen', 'Handschuh', 'Wörtlich bedeutet es „Handschuh“. Deutsche Zusammensetzungen schaffen oft klare, einprägsame Begriffe.'], ['ein grammatischer Hinweis', 'Fernweh', '„Fernweh“ bedeutet die Sehnsucht, weit weg zu sein; ein modernes Kompositum nach dem Muster von Heimweh.'], ['Klang und Schrift', 'ich', 'Das ch verändert sich je nach Kontext: Nach vorderen Vokalen klingt es meist weicher wie [ç].']],
    traits: [['Drei grammatische Geschlechter', 'Deutsche Substantive sind maskulin, feminin oder neutrum: der, die und das. Lernende lernen sie meist mit dem bestimmten Artikel zusammen.'], ['Fälle zeigen Beziehungen', 'Nominativ, Akkusativ, Dativ und Genitiv helfen dabei, zu zeigen, wer handelt, wem etwas gegeben wird und wie Wörter zueinander stehen.'], ['Komposita können umfangreich sein', 'Deutsch kann Nomen zu einem einzigen präzisen Wort verbinden. Die Teile bleiben lesbar und dadurch verständlich.'], ['Die Verbstellung erzeugt Spannung', 'Im Hauptsatz steht das finite Verb oft an zweiter Stelle; in Nebensätzen rückt es oft ans Ende und hält die Aussage zurück.']],
    culture: { title: 'Eine Sprache, die in Strukturen denkt und sie zugleich aufbricht.', text: ['Deutsch hat eine enorme literarische und philosophische Tradition: Hildegard von Bingen, Goethe, Schiller, Kafka, Brecht, Arendt und viele andere. Zugleich ist es eine Sprache von Liedern, Theater, Wissenschaft, Migration und täglicher regionaler Rede.', 'Die Standardsprache schafft eine gemeinsame Schriftform, aber die Dialektlandschaft ist ebenso wichtig. Von Plattdeutsch im Norden bis zum Alemannischen im Süden zeigen die Varianten, wie viel Geschichte in einem Klang lebt.'], quote: '„Wer fremde Sprachen nicht kennt, weiß nichts von seiner eigenen.” — Johann Wolfgang von Goethe' },
    phrase: 'Schön, Sie kennenzulernen.', phonetic: '/ʃøːn ziː ˈkɛnənˌtsuːlɛʁnən/', meaning: '„Schön, Sie kennenzulernen.“ Deutsch schreibt alle Substantive groß — eines der auffälligsten Merkmale der Schriftsprache.',
    sources: 'Fotografie: lokale Projektbilder aus Unsplash. Sprachfakten: Encyclopaedia Britannica und das Goethe-Institut.'
  },
  italian: {
    name: 'Italiano', native: 'Italiano', country: 'Italia', code: 'IT', accent: '#a54038', deep: '#6f2520', wash: '#e8ddd1',
    hero: 'assets/italian-hero.jpg',
    rootsImage: 'assets/italian-roots.jpg',
    storyImage: 'assets/italian-story.jpg',
    wordsImage: 'assets/italian-words.jpg',
    soundImage: 'assets/italian-sound.jpg',
    intro: 'L’italiano nasce dal latino parlato, con la letteratura toscana che ne offrì un modello scritto molto influente già prima dell’unità d’Italia.',
    lineage: [['ca. 4500–2500 a.C.', 'Protoindoeuropeo', 'L’antenato ricostruito del ramo italico e di molte altre famiglie linguistiche.'], ['ca. 1000 a.C.', 'Lingue italiche', 'Latino e falisco appartenevano a un ramo; osco e umbro a un altro.'], ['1°–8° secolo', 'Latino parlato', 'Il latino quotidiano cambiò gradualmente dopo l’Impero romano e sviluppò forme regionali.'], ['oggi', 'Italiano', 'Una lingua romanza affiancata da importanti lingue e varietà regionali.']],
    history: [['960', 'Placiti Cassinesi', 'Le dichiarazioni giuridiche di Capua sono tra le prime attestazioni significative del volgare italiano.'], ['ca. 1300', 'Dante e il toscano', 'L’opera di Dante mostrò il grande potenziale letterario del volgare toscano.'], ['1525', 'La questione della lingua', 'Le Prose della volgar lingua di Pietro Bembo proposero un modello letterario fondato soprattutto sulla tradizione toscana di Petrarca e Boccaccio.'], ['1861 in poi', 'Unificazione e scuola', 'Lo Stato nazionale, la scuola di massa e i media ampliarono gradualmente la conoscenza dell’italiano standard.'], ['oggi', 'Italiano e vicinanze', 'L’italiano è parlato insieme alle lingue regionali e ai continui dialettali, che hanno grande importanza culturale.']],
    words: [['un sopravvissuto latino', 'ciao', 'Da veneziano s-ciào vostro, “il vostro servo”. Un saluto regionale diventato famoso in tutto il mondo.'], ['una regola sonora', 'gnocchi', 'La sequenza gn rappresenta /ɲ/, una consonante nasale palatale presente anche nello spagnolo, dove è scritta ñ, e nel francese, dove compare in parole come montagne.'], ['fatto in Italia', 'sprezzatura', 'Parola resa popolare da Baldassare Castiglione per indicare una grazia studiata ma apparentemente naturale.']],
    traits: [['La pronuncia è molto regolare', 'La grafia italiana offre indicazioni affidabili sul suono. Le consonanti doppie sono importanti: pala “pala” e palla “palla” si distinguono per lunghezza.'], ['I nomi hanno genere e numero', 'La maggior parte dei nomi è maschile o femminile e le desinenze cambiano spesso da singolare a plurale: ragazzo/ragazzi, ragazza/ragazze.'], ['Il soggetto può essere sottinteso', 'Le desinenze verbali indicano spesso chi compie l’azione, quindi il pronome soggetto non è sempre necessario: parlo significa “parlo”.'], ['La varietà regionale fa parte del quadro', 'L’italiano è usato insieme a molte lingue regionali e varietà locali. Non sono semplicemente “italiano sbagliato”: hanno una loro storia.']],
    culture: { title: 'Dalle città-stato alla voce quotidiana.', text: ['La letteratura italiana si è formata con Dante, Petrarca e Boccaccio, ma la vita culturale è molto più ampia: teatro dialettale, opera, cinema, radio, commenti calcistici e le intense identità locali delle città e delle regioni.', 'La fama musicale dell’italiano deriva in parte dalle vocali e dalle sillabe ben distinte, ma anche dal suo uso nella musica e nell’opera. L’italiano è stato a lungo una lingua cantata, recitata e ascoltata in pubblico tanto quanto letta in silenzio.'], quote: '“La semplicità è l’ultima sofisticazione.” — spesso attribuita a Leonardo da Vinci' },
    phrase: 'Piacere di conoscerti.', phonetic: '/pjaˈtʃe.re di ko.noˈʃer.ti/', meaning: '« Piacere di conoscerti. » L’italiano ha una grafia relativamente regolare: lettere e suoni corrispondono spesso in modo molto stretto.',
    sources: 'Fotografia: immagini locali da Unsplash. Fatti linguistici: Encyclopaedia Britannica e Treccani.'
  },
  albanian: {
    name: 'Shqip', native: 'Shqip', country: 'Shqipëri', code: 'SQ', accent: '#bc3035', deep: '#741a21', wash: '#e4ded5',
    hero: 'assets/albanian-hero.jpg',
    rootsImage: 'assets/albanian-roots.jpg',
    storyImage: 'assets/albanian-story.jpg',
    wordsImage: 'assets/albanian-hero.jpg',
    soundImage: 'assets/albanian-roots.jpg',
    intro: 'Shqipja është një degë e veçantë e familjes indo-evropiane: jo një gjuhë romake, sllave ose greke, por një dëshmi e thellë e historisë gjuhësore të Ballkanit.',
    lineage: [['rreth 4500–2500 p.e.s.', 'Proto-indoevropiane', 'Burimi i rindërtuar i shqipes dhe shumë degëve të tjera indo-evropiane.'], ['antikiteti', 'Shqipja e hershme', 'Prehistoria e saj është e debatuar, por shqipja u zhvillua në mënyrë të pavarur në Ballkanin perëndimor.'], ['1462', 'Fjalia e parë e njohur', 'Një formulë pagëzimi e shkruar nga peshkopi Pal Engjëlli është teksti më i hershëm i njohur shqip.'], ['sot', 'Shqip', 'Një gjuhë me dy grupe kryesore dialektesh, gegërisht dhe toskërisht, me një standard të bazuar kryesisht në toskërishten.']],
    history: [['1462', 'Fillimi i shkrimit', 'Formula e pagëzimit e Pal Engjëllit ruan fjalinë më të hershme të njohur në shqip.'], ['1555', 'Meshari', 'Missali i Gjon Buzukut është libri i parë i njohur i shtypur në shqip.'], ['1908', 'Kongresi i Manastirit', 'Delegatët miratuan një alfabet latin, duke unifikuar përdorimin e alfabetit latin.'], ['1972', 'Kongresi i drejtshkrimit', 'Në 1972 u vendosën dhe u konsoliduan rregullat e drejtshkrimit standard të shqipes.'], ['sot', 'Një gjuhë ndër kufij', 'Shqipja flitet në Shqipëri, Kosovë, vende fqinjë dhe në komunitete të gjera të diasporës.']],
    words: [['një mirëseardhje e gjallë', 'mirë se vini', 'Përkthim i drejtpërdrejtë: “mirë që vijnë”, një mirëseardhje e përdorur për mysafirë ose në formë zyrtare.'], ['një shkronjë, një tingull', 'shqip', 'sh është /ʃ/, ndërsa q është një tingull palatal ndalues. Alfabeti latin ka 36 shkronja.'], ['një dëshmi e Ballkanit', 'besë', 'Shpesh përkthehet si “betim i nderit”, por kuptimi kulturor është më i gjerë dhe varet nga konteksti.']],
    traits: [['Artikulli i caktuar vjen pas emrit', 'Ndryshe nga anglishtja, shqipja shpesh e shpreh shquarsinë duke e bashkangjitur nyjën e shquar në fund të emrit. Libër do të thotë “libër”; libri do të thotë “libri”.'], ['Dy grupe kryesore dialektesh', 'Gegërishtja flitet kryesisht në veri të lumit Shkumbin, kurse toskërishtja kryesisht në jug. Standardi bazohet kryesisht në dialektin toskë.'], ['Një sistem i pasur foljor', 'Foljet shqipe shprehin personin, numrin, kohën, mënyrën dhe diatezën. Shqipja ka gjithashtu një sistem të pasur foljor, me forma të ndryshme që përdoren sipas funksionit dhe kuptimit të shprehjes.'], ['Alfabet latin me 36 shkronja', 'Disa tinguj shënohen me dyshkronja si dh, gj, ll, nj, rr, sh, th, xh dhe zh. Këto dyshkronja konsiderohen shkronja më vete.']],
    culture: { title: 'Një gjuhë që mban një kujtesë të gjerë ballkanike.', text: ['Shkrimi shqip u rrit përmes librave fetarë, folklorit, poezisë dhe veprës së Rilindjes Kombëtare në shekullin XIX. Letërsia moderne mbart kujtime nga jeta e fshatit, qytetet, migrimet dhe ndryshimet politike.', 'Meqë shqipja flitet përtej kufijve kombëtarë dhe në një diasporë të madhe, ajo vazhdimisht përshtatet. Ky nuk është një rrezik për gjuhën; është prova se shqipja mbetet një mënyrë e gjallë dhe e veçantë e të shprehurit.'], quote: '“Gjuha ruhet atje ku flitet me dashuri.” — një parim i thjeshtë shqip: gjuha ruhet atje ku flitet me kujdes.' },
    phrase: 'Mirë se vini!', phonetic: '/mi.ɾə sɛ ˈvi.ni/', meaning: '“Mirë se vini.” Shqipja ka një sistem të pasur të përemrave dhe mbaresave të caktuara: nyja e shquar zakonisht i bashkëngjitet emrit në fund.',
    sources: 'Fotografi: imazhe lokale nga Unsplash. Fakte gjuhësore: Encyclopaedia Britannica dhe Biblioteka Kombëtare e Shqipërisë.'
  }
};

const ui = {
  english: {
    skip: 'Skip to language story',
    brand: 'Langua',
    languageMenu: 'Languages',
    onPage: 'On this page',
    nav: ['Roots', 'History', 'Words', 'Traits', 'Sound', 'Culture'],
    country: 'Country focus',
    code: 'Language code',
    explore: 'Scroll to explore',
    begin: 'Begin',
    sectionPrefix: ['01 / Language family', '02 / A language in time', '03 / Small words, long journeys', '04 / How the language works', '05 / Hear the shape of it', '06 / Literature, memory, identity'],
    sectionHeadings: ['Where it comes from.', 'History leaves a grammar.', 'Vocabulary is a map of contact.', 'Its own way of building meaning.', 'A greeting, close up.', ''],
    sectionIntro: ['Languages are not frozen objects. This line traces the language through the family relationships and historical stages that explain its structure today.', 'Wars, books, schools, cities and migration all change what people say, write and hear.', 'A single word can preserve a trade route, a sound change, a social custom or a centuries-old encounter.', 'Grammar is not a collection of obstacles. It is the pattern speakers use to show emphasis, relationships, time and belonging.', 'Listen for the rhythm and sounds the spelling represents. Each language makes its own patterns of emphasis, vowels and consonants.', ''],
    hear: 'Hear the phrase',
    back: 'Back to top ↑',
    footer: 'Five languages. Five living histories.',
    made: 'Made for Langua.',
    imageAlt: 'A real photograph from',
    historyLabel: 'A real historical scene from',
    cultureLabel: 'A real view of',
    hearLabel: 'Hear the',
    footnote: 'Images are used as real-place visual references; visit the image hosts for individual creator and licence information.'
  },
  french: {
    skip: 'Aller au récit de la langue',
    brand: 'Langua',
    languageMenu: 'Langues',
    onPage: 'Sur cette page',
    nav: ['Racines', 'Histoire', 'Mots', 'Caractéristiques', 'Son', 'Culture'],
    country: 'Pays d’étude',
    code: 'Code de langue',
    explore: 'Faire défiler',
    begin: 'Commencer',
    sectionPrefix: ['01 / Famille de langues', '02 / Une langue dans le temps', '03 / Petits mots, longs voyages', '04 / La manière dont la langue fonctionne', '05 / Écouter sa forme', '06 / Littérature, mémoire, identité'],
    sectionHeadings: ['D’où elle vient.', 'L’histoire laisse une grammaire.', 'Le vocabulaire est une carte des contacts.', 'Sa propre manière de construire le sens.', 'Un salut, de près.', ''],
    sectionIntro: ['Les langues ne sont pas des objets figés. Cette ligne retrace la langue à travers ses liens familiaux et les étapes historiques qui expliquent sa structure aujourd’hui.', 'Guerres, livres, écoles, villes et migrations changent tout ce que les gens disent, écrivent et entendent.', 'Un seul mot peut conserver une route commerciale, un changement de son, une coutume sociale ou une rencontre vieille de plusieurs siècles.', 'La grammaire n’est pas une collection d’obstacles. C’est le modèle que les locuteurs utilisent pour montrer l’accent, les relations, le temps et l’appartenance.', 'Écoutez le rythme et les sons que représente l’orthographe. Chaque langue construit ses propres schémas d’accentuation, de voyelles et de consonnes.', ''],
    hear: 'Écouter la phrase',
    back: 'Retour en haut ↑',
    footer: 'Cinq langues. Cinq histoires vivantes.',
    made: 'Fait pour Langua.',
    imageAlt: 'Une vraie photographie de',
    historyLabel: 'Une scène historique réelle de',
    cultureLabel: 'Une vue réelle de',
    hearLabel: 'Écouter le',
    footnote: 'Les images servent de références visuelles de lieux réels ; consultez les pages d’origine pour connaître les créateurs et les licences.'
  },
  german: {
    skip: 'Zum Sprachbericht springen',
    brand: 'Langua',
    languageMenu: 'Sprachen',
    onPage: 'Auf dieser Seite',
    nav: ['Wurzeln', 'Geschichte', 'Wörter', 'Merkmale', 'Klang', 'Kultur'],
    country: 'Landesfokus',
    code: 'Sprachcode',
    explore: 'Scrollen zum Entdecken',
    begin: 'Starten',
    sectionPrefix: ['01 / Sprachfamilie', '02 / Eine Sprache in der Zeit', '03 / Kleine Wörter, weite Reisen', '04 / Wie die Sprache funktioniert', '05 / Hören Sie ihre Form', '06 / Literatur, Erinnerung, Identität'],
    sectionHeadings: ['Woher sie stammt.', 'Geschichte hinterlässt Grammatik.', 'Wortschatz ist eine Karte der Kontakte.', 'Ihre eigene Art, Bedeutung zu bauen.', 'Ein Gruß aus nächster Nähe.', ''],
    sectionIntro: ['Sprachen sind keine eingefrorenen Gegenstände. Diese Spur zeigt die Sprache durch ihre Verwandtschaftsbeziehungen und die geschichtlichen Stufen, die ihre Struktur heute erklären.', 'Kriege, Bücher, Schulen, Städte und Migration verändern alles, was Menschen sagen, schreiben und hören.', 'Ein einziges Wort kann eine Handelsroute, eine Lautveränderung, eine gesellschaftliche Gewohnheit oder ein jahrhundertealtes Zusammentreffen bewahren.', 'Grammatik ist keine Ansammlung von Hindernissen. Sie ist das Muster, mit dem Sprecher Betonung, Beziehungen, Zeit und Zugehörigkeit ausdrücken.', 'Achten Sie auf den Rhythmus und die Laute, die durch die Rechtschreibung dargestellt werden. Jede Sprache bildet ihre eigenen Muster aus Betonung, Vokalen und Konsonanten.', ''],
    hear: 'Die Phrase hören',
    back: 'Nach oben ↑',
    footer: 'Fünf Sprachen. Fünf lebendige Geschichten.',
    made: 'Für Langua gemacht.',
    imageAlt: 'Ein echtes Foto aus',
    historyLabel: 'Eine echte historische Szene aus',
    cultureLabel: 'Eine echte Sicht auf',
    hearLabel: 'Hören Sie das',
    footnote: 'Die Bilder dienen als visuelle Referenzen realer Orte; besuchen Sie die Bildquellen für einzelne Urheber- und Lizenzangaben.'
  },
  italian: {
    skip: 'Vai alla storia della lingua',
    brand: 'Langua',
    languageMenu: 'Lingue',
    onPage: 'In questa pagina',
    nav: ['Radici', 'Storia', 'Parole', 'Caratteristiche', 'Suono', 'Cultura'],
    country: 'Focus paese',
    code: 'Codice lingua',
    explore: 'Scorri per esplorare',
    begin: 'Inizia',
    sectionPrefix: ['01 / Famiglia linguistica', '02 / Una lingua nel tempo', '03 / Parole piccole, grandi viaggi', '04 / Come funziona la lingua', '05 / Ascolta la sua forma', '06 / Letteratura, memoria, identità'],
    sectionHeadings: ['Da dove viene.', 'La storia lascia una grammatica.', 'Il lessico è una mappa dei contatti.', 'Il suo modo di costruire il significato.', 'Un saluto da vicino.', ''],
    sectionIntro: ['Le lingue non sono oggetti congelati. Questa linea traccia la lingua attraverso i legami familiari e le tappe storiche che spiegano la sua struttura oggi.', 'Guerre, libri, scuole, città e migrazioni cambiano tutto ciò che le persone dicono, scrivono e ascoltano.', 'Una sola parola può conservare una rotta commerciale, un cambiamento di suono, una consuetudine sociale o un incontro avvenuto secoli fa.', 'La grammatica non è una serie di ostacoli. È il modello che i parlanti usano per mostrare enfasi, relazioni, tempo e appartenenza.', 'Ascolta il ritmo e i suoni che la scrittura rappresenta. Ogni lingua crea i propri schemi di enfasi, vocali e consonanti.', ''],
    hear: 'Ascolta la frase',
    back: 'Torna in alto ↑',
    footer: 'Cinque lingue. Cinque storie vive.',
    made: 'Realizzato per Langua.',
    imageAlt: 'Una vera foto da',
    historyLabel: 'Una scena storica reale da',
    cultureLabel: 'Una vista reale di',
    hearLabel: 'Ascolta il',
    footnote: 'Le immagini sono usate come riferimenti visivi di luoghi reali; visitate i siti originali per i dettagli sui creatori e sulle licenze.'
  },
  albanian: {
    skip: 'Shko te historia e gjuhës',
    brand: 'Langua',
    languageMenu: 'Gjuhët',
    onPage: 'Në këtë faqe',
    nav: ['Rrënjët', 'Historia', 'Fjalët', 'Karakteristikat', 'Zëri', 'Kultura'],
    country: 'Fokus vendi',
    code: 'Kodi i gjuhës',
    explore: 'Lëviz poshtë për të eksploruar',
    begin: 'Fillo',
    sectionPrefix: ['01 / Familja gjuhësore', '02 / Një gjuhë në kohë', '03 / Fjalë të vogla, udhëtime të gjata', '04 / Si funksionon gjuha', '05 / Dëgjo formën e saj', '06 / Letërsia, kujtesa, identiteti'],
    sectionHeadings: ['Prej nga vjen.', 'Historia lë një gramatikë.', 'Fjalori është një hartë e kontakteve.', 'Mënyra e saj e ndërtimit të kuptimit.', 'Një përshëndetje nga afër.', ''],
    sectionIntro: ['Gjuhët nuk janë objekte të ngrira. Kjo linjë ndjek gjuhën nëpër marrëdhëniet familjare dhe etapet historike që shpjegojnë strukturën e saj sot.', 'Luftërat, librat, shkollat, qytetet dhe migrimet ndryshojnë gjithçka që njerëzit thonë, shkruajnë dhe dëgjojnë.', 'Vetëm një fjalë mund të ruajë një rrugë tregtie, një ndryshim zëri, një zakon shoqëror ose një takim shekujsh.', 'Gramatika nuk është një koleksion pengesash. Është modeli që përdorin folësit për të treguar theksin, marrëdhëniet, kohën dhe përkatësinë.', 'Dëgjoni ritmin dhe tingujt që e paraqet drejtshkrimi. Çdo gjuhë bën modele të veta të theksit, zanoreve dhe bashkëtingëlloreve.', ''],
    hear: 'Dëgjo frazën',
    back: 'Kthehu lart ↑',
    footer: 'Pesë gjuhë. Pesë histori të gjalla.',
    made: 'Krijuar për Langua.',
    imageAlt: 'Një fotografi reale nga',
    historyLabel: 'Një skenë historike reale nga',
    cultureLabel: 'Një pamje reale e',
    hearLabel: 'Dëgjo',
    footnote: 'Imazhet përdoren si referenca vizuale të vendeve reale; vizitoni hostet e imazheve për informacionin e krijuesit dhe licencës.'
  }
};

const key = document.documentElement.dataset.language;
const data = exhibits[key] || exhibits.english;
const uiKey = ui[key] || ui.english;
document.documentElement.style.setProperty('--accent', data.accent);
document.documentElement.style.setProperty('--accent-deep', data.deep);
document.documentElement.style.setProperty('--wash', data.wash);

const pages = [
  ['english.html', 'English'], ['french.html', 'Français'], ['german.html', 'Deutsch'], ['italian.html', 'Italiano'], ['albanian.html', 'Shqip']
];
const image = (url) => `style="background-image:url('${url}')"`;
const escapes = (text) => text.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

document.body.innerHTML = `
  <a class="skip" href="#main">${uiKey.skip}</a>
  <header class="site-header">
    <a class="brand" href="#top">${uiKey.brand}<span>${data.native}</span></a>
    <nav class="page-nav" aria-label="${uiKey.onPage}">
      <a href="#roots">${uiKey.nav[0]}</a><a href="#history">${uiKey.nav[1]}</a><a href="#words">${uiKey.nav[2]}</a><a href="#traits">${uiKey.nav[3]}</a><a href="#sound">${uiKey.nav[4]}</a><a href="#culture">${uiKey.nav[5]}</a>
    </nav>
    <details class="language-menu"><summary>${data.code} · ${uiKey.languageMenu}</summary><div>${pages.map(([file, label]) => `<a href="${file}" ${file === `${key}.html` ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</div></details>
  </header>
  <main id="main">
    <section class="hero" id="top" aria-label="Introduction to ${data.name}">
      <div class="hero-image" ${image(data.hero)} role="img" aria-label="${uiKey.imageAlt} ${data.country}"></div>
      <div class="hero-copy reveal">
        <p class="eyebrow">${uiKey.brand} / ${data.country}</p>
        <h1>${data.native}<em>.</em></h1>
        <p class="hero-lede">${data.intro}</p>
        <div class="hero-meta"><span>${uiKey.code}: ${data.code}</span><span>${uiKey.country}: ${data.country}</span><span>${uiKey.explore}</span></div>
      </div>
      <a class="scroll-cue" href="#roots">${uiKey.begin}</a>
    </section>
    <section class="roots" id="roots">
      <div class="section-image" ${image(data.rootsImage)} role="img" aria-label="${uiKey.historyLabel} ${data.country}"></div>
      <div class="section-head reveal"><p class="eyebrow">${uiKey.sectionPrefix[0]}</p><h2>${uiKey.sectionHeadings[0]}</h2><p class="section-intro">${uiKey.sectionIntro[0].replace('the language', data.native)}</p></div>
      <div class="lineage reveal">${data.lineage.map(([year, title, copy]) => `<article class="lineage-item"><span class="lineage-year">${year}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div>
    </section>
    <section class="story" id="history">
      <div class="section-image" ${image(data.storyImage)} role="img" aria-label="${uiKey.historyLabel} ${data.country}"></div>
      <div class="section-head reveal"><p class="eyebrow">${uiKey.sectionPrefix[1]}</p><h2>${uiKey.sectionHeadings[1]}</h2><p class="section-intro">${uiKey.sectionIntro[1]}</p></div>
      <div class="timeline">${data.history.map(([year, title, copy]) => `<div class="timeline-year reveal">${year}</div><article class="timeline-copy reveal"><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div>
    </section>
    <section class="words" id="words">
      <div class="section-head reveal"><p class="eyebrow">${uiKey.sectionPrefix[2]}</p><h2>${uiKey.sectionHeadings[2]}</h2><p class="section-intro">${uiKey.sectionIntro[2]}</p></div>
      <div class="word-grid">${data.words.map(([note, word, meaning], i) => `<article class="word-card reveal" ${i === 0 ? image(data.wordsImage) : ''}><p class="word-note">${note}</p><h3 class="word">${word}</h3><p class="word-meaning">${meaning}</p></article>`).join('')}</div>
    </section>
    <section class="traits" id="traits">
      <div class="section-image" ${image(data.wordsImage)} role="img" aria-label="${uiKey.imageAlt} ${data.country}"></div>
      <div class="section-head reveal"><p class="eyebrow">${uiKey.sectionPrefix[3]}</p><h2>${uiKey.sectionHeadings[3]}</h2><p class="section-intro">${uiKey.sectionIntro[3]}</p></div>
      <div class="trait-list">${data.traits.map(([title, copy], i) => `<article class="trait reveal"><span class="trait-number">0${i + 1}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div>
    </section>
    <section class="sound" id="sound">
      <div class="section-image" ${image(data.soundImage)} role="img" aria-label="${uiKey.imageAlt} ${data.country}"></div>
      <div class="section-head reveal"><p class="eyebrow">${uiKey.sectionPrefix[4]}</p><h2>${uiKey.sectionHeadings[4]}</h2><p class="section-intro">${uiKey.sectionIntro[4]}</p></div>
      <article class="phrase-card reveal"><blockquote class="phrase">${data.phrase}</blockquote><p class="phonetic">${data.phonetic}</p><p class="meaning">${data.meaning}</p><button class="listen" type="button" aria-label="${uiKey.hearLabel} ${data.name}">${uiKey.hear}</button></article>
    </section>
    <section class="culture" id="culture">
      <div class="section-image" ${image(data.hero)} role="img" aria-label="${uiKey.cultureLabel} ${data.country}"></div>
      <div class="culture-layout reveal">
        <aside class="culture-panel" aria-label="${data.name} overview">
          <p class="panel-label">${uiKey.country}</p>
          <h3>${data.native}</h3>
          <dl>
            <div><dt>${uiKey.country}</dt><dd>${data.country}</dd></div>
            <div><dt>${uiKey.code}</dt><dd>${data.code}</dd></div>
            <div><dt>Roots</dt><dd>${data.lineage[0][1]}</dd></div>
            <div><dt>Living today</dt><dd>${data.history[data.history.length - 1][1]}</dd></div>
          </dl>
        </aside>
        <article class="culture-copy"><p class="eyebrow">${uiKey.sectionPrefix[5]}</p><h2>${data.culture.title}</h2><p>${data.culture.text[0]}</p><p>${data.culture.text[1]}</p><blockquote>${data.culture.quote}</blockquote></article>
      </div>
    </section>
  </main>
  <footer class="credits"><div class="credits-inner"><div><h2 class="footer-title">${uiKey.footer}</h2><p>${data.sources} ${uiKey.footnote}</p></div><p><a href="#top">${uiKey.back}</a><br>${uiKey.made}</p></div></footer>`;

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('show'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const header = document.querySelector('.site-header');
const applyHeaderState = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 18);
};
applyHeaderState();
window.addEventListener('scroll', applyHeaderState, { passive: true });

document.querySelector('.listen').addEventListener('click', () => {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(data.phrase);
  utterance.lang = document.documentElement.lang;
  utterance.rate = .78;
  window.speechSynthesis.speak(utterance);
});
