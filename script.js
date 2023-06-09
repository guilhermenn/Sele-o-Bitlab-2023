function verificar() {
    // Recebe o texto do usuário
    var texto = document.getElementById("texto").value;

    // Conversor de caracteres especiais para minúsculo
    texto = texto.replace(/[^\w\s]/gi, '').toLowerCase();

    // Lista de principais conteudos improprios 
    var ConteudoImproprio = [
        "Aabafa-a-palhinha",
        "abécula",
        "abelhudo",
        "abichanado",
        "abutre",
        "agarrado",
        "agiota",
        "agressivo",
        "alarve",
        "alcouceira",
        "alcoviteira",
        "aldrabão",
        "aleivoso",
        "amalucado",
        "amarelo",
        "amaneirado",
        "amaricado",
        "amigo-da-onça",
        "analfabeto",
        "analfabruto",
        "animal",
        "anjinho",
        "anormal",
        "apanhado do clima",
        "aparvalhada",
        "apóstata",
        "arrelampado",
        "arrogante",
        "artolas",
        "arruaceiro",
        "aselha",
        "asno",
        "asqueroso",
        "atarantada",
        "atrasado mental",
        "atraso de vida",
        "avarento",
        "avaro",
        "ave rara",
        "aventesma",
        "azeiteiro",
        "bacoco",
        "bácoro",
        "badalhoca",
        "badameco",
        "baixote",
        "bajulador",
        "baldas",
        "baleia",
        "balhelhas",
        "banana",
        "bandalho",
        "bandido",
        "barata tonta",
        "bárbaro",
        "bardajona",
        "bardamerdas",
        "bargante",
        "basbaque",
        "basculho",
        "básico",
        "bastardo",
        "batoque",
        "batoteiro",
        "beata",
        "bebedanas",
        "bêbedo",
        "bebedolas",
        "beberrão",
        "besta",
        "besta quadrada",
        "betinho",
        "bexigoso",
        "bicho do mato",
        "biltre",
        "bimbo",
        "bisbilhoteira",
        "boateiro",
        "bobo",
        "boca de xarroco",
        "boçal",
        "bode",
        "bófia",
        "boi",
        "boneca de trapos",
        "borracho",
        "borra-botas",
        "bota de elástico",
        "brochista",
        "bronco",
        "brutamontes",
        "bruto",
        "bruxa",
        "bufo",
        "burgesso",
        "burlão",
        "cabeça de abóbora",
        "cabeça-de-alho-chôcho",
        "cabeça-de-vento",
        "cabeça no ar",
        "cabeça oca",
        "cabeçudo",
        "cabotino",
        "cabra",
        "cabrão",
        "cábula",
        "caceteiro",
        "cachorro",
        "cacique",
        "caco",
        "cadela",
        "caga-leite",
        "caga-tacos",
        "cagão",
        "caguinchas",
        "caixa de óculos",
        "calaceiro",
        "calão",
        "calhandreira",
        "calhordas",
        "calinas",
        "caloteiro",
        "camafeu",
        "camelo",
        "campónio",
        "canalha",
        "canastrão",
        "candongueiro",
        "cão",
        "caquética",
        "cara-de-cu-à-paisana",
        "caramelo",
        "carapau de corrida",
        "careca",
        "careta",
        "carniceiro",
        "carraça",
        "carrancudo",
        "carroceiro",
        "casca grossa",
        "casmurro",
        "cavalgadura",
        "cavalona",
        "cegueta",
        "celerado",
        "cepo",
        "chalado",
        "chanfrado",
        "charlatão",
        "chatarrão",
        "chato",
        "chauvinista",
        "chibo",
        "chico-esperto",
        "chifrudo",
        "choné",
        "choninhas",
        "choramingas",
        "chulo",
        "chunga",
        "chupado das carochas",
        "chupista",
        "cigano",
        "cínico",
        "cobarde",
        "cobardolas",
        "coirão",
        "comuna",
        "cona-de-sabão",
        "convencido",
        "copinho de leite",
        "corcunda",
        "corno",
        "cornudo",
        "corrupto",
        "coscuvilheira",
        "coxo",
        "crápula",
        "cretino",
        "cromo",
        "cromaço",
        "criminoso",
        "cunanas",
        "cusca",
        "debochado",
        "delambida",
        "delinquente",
        "demente",
        "demónio",
        "depravado",
        "desajeitado",
        "desastrada",
        "desaustinado",
        "desavergonhada",
        "desbocado",
        "desbragado",
        "descabelada",
        "desdentado",
        "desengonçado",
        "desgraçado",
        "desumano",
        "deslavado",
        "desleal",
        "desmancha prazeres",
        "desmazelada",
        "desmiolado",
        "desenxabida",
        "desonesto",
        "despistado",
        "déspota",
        "destrambelhado",
        "destravada",
        "destroço",
        "desvairado",
        "devasso",
        "diabo",
        "ditador",
        "doidivanas",
        "doido varrido",
        "dondoca",
        "doutor da mula russa",
        "Faccioso",
        "Egoista",
        "embirrento",
        "embusteiro",
        "empata-foda",
        "empata-fodas",
        "empecilho",
        "emplastro",
        "enconado",
        "energúmeno",
        "enfadonho",
        "enfezado",
        "engraxador",
        "enjoado",
        "enrabador",
        "escanifobética",
        "escanzelada",
        "escarumba",
        "escrofuloso",
        "escroque",
        "escumalha",
        "esgalgado",
        "esganiçada",
        "esgroviada",
        "esguedelhado",
        "espalhafatoso",
        "esquerdista",
        "estafermo",
        "estapafurdio",
        "estroício",
        "estúpido",
        "facínora",
        "fala-barato",
        "falhado",
        "falsário",
        "falso",
        "fanático",
        "fanchono",
        "fanfarrão",
        "fantoche",
        "fariseu",
        "farrapo",
        "farropilha",
        "farsante",
        "farsolas",
        "fatela",
        "fedelho",
        "feia-comó-demo",
        "fersureira",
        "figurão",
        "filho da mãe",
        "filho da puta",
        "fingido",
        "fiteiro",
        "flausina",
        "foção",
        "fodido",
        "fodilhona",
        "foleiro",
        "forreta",
        "fraco-de-espírito",
        "fraca figura",
        "franganote",
        "frangueiro",
        "frasco",
        "frígida",
        "frícolo",
        "frouxo",
        "fufa",
        "fuinha",
        "fura-greves",
        "fútil",
        "gabarola",
        "gabiru",
        "galdéria",
        "galinha choca",
        "ganancioso",
        "gandim",
        "gandulo",
        "garganeira",
        "gato pingado",
        "gatuno",
        "gazeteiro",
        "glutão",
        "gosma",
        "gralha",
        "grosseiro",
        "grotesco",
        "grunho",
        "guedelhudo",
        "herege",
        "hipócrita",
        "histérica",
        "idiota",
        "ignorante",
        "imaturo",
        "imbecil",
        "impertinente",
        "impostor",
        "incapaz",
        "incompetente",
        "inconveniente",
        "indecente",
        "indigente",
        "indolente",
        "inepto",
        "infame",
        "infeliz",
        "infiel",
        "imprudente",
        "intriguista",
        "intrujona",
        "invejoso",
        "insensivel",
        "insignificante",
        "insípido",
        "insolente",
        "intolerante",
        "intriguista",
        "inútil",
        "irritante",
        "javardo",
        "judeu",
        "Llabrego",
        "labroste",
        "lacaio",
        "ladrão",
        "lambão",
        "lambareiro",
        "lambe-botas",
        "lambéconas",
        "lambisgóia",
        "lamechas",
        "lapa",
        "larápio",
        "larilas",
        "lavajão",
        "lerdo",
        "lesma",
        "leva-e-traz",
        "libertino",
        "limitado",
        "língua-de-trapos",
        "língua viperina",
        "linguareira",
        "lingrinhas",
        "lontra",
        "lorpa",
        "louco",
        "lunático",
        "Mmá rês",
        "madraço",
        "mafioso",
        "maganão",
        "magricela",
        "malcriado",
        "mal enjorcado",
        "mal fodida",
        "malacueco",
        "malandreco",
        "malandrim",
        "malandro",
        "malfeitor",
        "maltrapilho",
        "maluco",
        "malvado",
        "mamalhuda",
        "mandrião",
        "maneta",
        "mangas-de-alpaca",
        "manhoso",
        "maníaco",
        "manipulador",
        "maniqueista",
        "manteigueiro",
        "maquiavélico",
        "marado-dos-cornos",
        "marafado",
        "marafona",
        "marginal",
        "maria-vai-com-as-outras",
        "maricas",
        "mariconço",
        "mariola",
        "mariquinhas-pé-de-salsa",
        "marmanjo",
        "marrão",
        "marreco",
        "masoquista",
        "mastronço",
        "matarroano",
        "matrafona",
        "matrona",
        "mau",
        "medíocre",
        "medricas",
        "medroso",
        "megera",
        "meia-leca",
        "meia-tijela",
        "melga",
        "meliante",
        "menino da mamã",
        "mentecapto",
        "mentiroso",
        "merdas",
        "merdoso",
        "mesquinho",
        "metediço",
        "mijão",
        "mimado",
        "mineteiro",
        "miserável",
        "mixordeiro",
        "moina",
        "molengão",
        "mongas",
        "monhé",
        "mono",
        "monstro",
        "monte-de-merda",
        "mórbido",
        "morcão",
        "mosca morta",
        "mostrengo",
        "mouco",
        "mula",
        "múmia",
        "Nnababo",
        "nabo",
        "não-fode-nem-sai-de-cima",
        "não-tens-onde-cair-morto",
        "narcisista",
        "narigudo",
        "nariz-arrebitado",
        "nazi",
        "necrófilo",
        "néscio",
        "nhonhinhas",
        "nhurro",
        "ninfomaníaca",
        "nódoa",
        "nojento",
        "nulidade",
        "Oobcecado",
        "obnóxio",
        "obstinado",
        "obtuso",
        "olhos-de-carneiro-mal-morto",
        "onanista",
        "oportunista",
        "ordinário",
        "orelhas-de-abano",
        "otário",
        "Ppacóvio",
        "padreca",
        "palerma",
        "palhaço",
        "palhaçote",
        "palonça",
        "panasca",
        "paneleiro",
        "panhonhas",
        "panilas",
        "pantomineiro",
        "papa-açorda",
        "papagaio",
        "papalvo",
        "paranóico",
        "parasita",
        "pária",
        "parolo",
        "parvalhão",
        "parvo",
        "paspalhão",
        "paspalho",
        "passado",
        "passarão",
        "pata-choca",
        "patarata",
        "patego",
        "pateta",
        "patife",
        "patinho feio",
        "pato",
        "pató",
        "pau-de-virar-tripas",
        "pedante",
        "pederasta",
        "pedinchas",
        "pega-de-empurrão",
        "peida-gadoxa",
        "pelintra",
        "pendura",
        "peneirenta",
        "pequeno burguês",
        "pérfido",
        "perliquiteques",
        "pernas-de-alicate",
        "pés de chumbo",
        "peso morto",
        "pesporrente",
        "petulante",
        "picuinhas",
        "piegas",
        "pilha-galinhas",
        "pílulas",
        "pindérica",
        "pinga-amor",
        "pintas",
        "pinto calçudo",
        "pintor",
        "piolho",
        "piolhoso",
        "pirata",
        "piroso",
        "pitosga",
        "pobre de espírito",
        "pobretanas",
        "poltrão",
        "popularucho",
        "porcalhão",
        "porco",
        "pote de banhas",
        "preguiçoso",
        "presunçoso",
        "preto",
        "provocador",
        "proxeneta",
        "pulha",
        "punheteiro",
        "puta",
        "putéfia",
        "Qquadrilheira",
        "quatro-olhos",
        "quebra-bilhas",
        "queixinhas",
        "quezilento",
        "Rrabeta",
        "rabugento",
        "radical",
        "rafeiro",
        "ralé",
        "rameira",
        "rameloso",
        "rancoroso",
        "ranhoso",
        "raquítico",
        "rasca",
        "rascoeira",
        "rasteiro",
        "rata de sacristia",
        "reaccionário",
        "reaças",
        "reles",
        "repelente",
        "ressabiado",
        "retardado",
        "retorcido",
        "ridículo",
        "roto",
        "rufia",
        "rústico",
        "Ssabujo",
        "sacana",
        "sacripanta",
        "sacrista",
        "sádico",
        "safado",
        "safardana",
        "salafrário",
        "saloio",
        "salta-pocinhas",
        "sandeu",
        "sapatona",
        "sarnento",
        "sarrafeiro",
        "sebento",
        "seboso",
        "sem classe",
        "sem vergonha",
        "serigaita",
        "sevandija",
        "sicofanta",
        "simplório",
        "snob",
        "soba",
        "sodomita",
        "soez",
        "somítico",
        "sonsa",
        "sórdido",
        "sorna",
        "sovina",
        "suíno",
        "sujo",
        "Ttacanho",
        "tagarela",
        "tanso",
        "tarado",
        "taralhouca",
        "tavolageiro",
        "teimoso",
        "tinhoso",
        "tísico",
        "títere",
        "toleirão",
        "tolo",
        "tonto",
        "torpe",
        "tosco",
        "totó",
        "trabeculoso",
        "trafulha",
        "traíçoeiro",
        "traidor",
        "trambolho",
        "trapaceiro",
        "trapalhão",
        "traste",
        "tratante",
        "trauliteiro",
        "tresloucado",
        "trinca-espinhas",
        "trique-lariques",
        "triste",
        "troca-tintas",
        "troglodita",
        "trombalazanas",
        "trombeiro",
        "trombudo",
        "trouxa",
        "Uunhas de fome",
        "untuoso",
        "urso",
        "Vvaca gorda",
        "vadio",
        "vagabundo",
        "vaidoso",
        "valdevinos",
        "vândalo",
        "velhaco",
        "velhadas",
        "vendido",
        "verme",
        "vesgo",
        "víbora",
        "viciado",
        "vigarista",
        "vígáro",
        "vil",
        "vilão",
        "vingativo",
        "vira-casacas",
        "Xenófobo",
        "Xé-xé",
        "xico esperto",
        "Zarolho",
        "zé-ninguém",
        "zelota",
        "zero à esquerda",
        "antipático",
        "comunista",
        "debochado",
        "depressivo",
        "desbocado",
        "fingido",
        "galado",
        "desequilibrado",
        "desvairado",
        "enlouquecido",
        "idiota",
        "insano",
        "lunático",
        "parvo",
        "assassino",
        "balofo",
        "barrigudo",
        "bichona",
        "burro",
        "drogado",
        "gordalhufo",
        "gordo",
        "racista",
        "nazista",
        "assediador",
        "matador",
        "pedófilo",
        "psicopata",
        "massacre",
        "sociopata",
        "aniquilar",
        "esquartejar",
        "amaldiçoar",
        "lacerar",
        "esfolhar",
        "retalhar",
        "hitlerismo",
        "hitler",
        "carnificina",
        "chacina",
        "fuzilamento",
        "hecatombe",
        "matança",
        "mortandade",
        "morticínio",
        "abater",
        "chacinar",
        "dizimar",
        "eliminar",
        "exterminar",
        "exterminio",
        "jugular",
        "liquidar",
        "suicidar-se",
        "mata",
        "massacrar",
        "trucidar",
        "vitimar",
        "obito",
        "assolar",
        "destroçar",
        "devastar",
        "eliminar",
        "extinguir",
        "aflingir",
        "pederasta",
        "demente",
        "louco",
        "adoidado",
        "alienado",
        "alucinado",
        "amalucado",
        "anormal",
        "apalermado",
        "abestalhado",
        "gordice",
        "gorda",
        "cheinha",
        "raça ariana",
        "gay",
        "viadinho",
        "bicha",
        "vira homem",
        "afeminado",
        "sapatão",
        "traveco",
        "guei",
        "boiola",
        "invertido",
        "baitola",
        "sodomita",
        "marica",
        "fresco",
        "sapatona",
        "safista",
        "obeso",
        "gorducho",
        "balofo",
        "anafado",
        "roliço",
        "barrigudo",
        "banhudo",
        "gordalhão",
        "gordalhaço",
        "gordalhufo",
        "misoginia",
        "misogino",
        "antifeminismo",
        "racista",
        "crioulo",
        "tição",
        "preto",
        "nego",
        "negro",
        "mulato",
        "amulatado",
        "cafuzo",
        "satanás",
        "capeta",
        "endemoniado",
        "macumba",
        "macumbeiro",
        "drogado",
        "noiado",
        "cracudo",
        "maconheiro",
        "aidetico",
        "viado",
        "sexo",
        "genitália",
        "coito",
        "cópula",
        "transa",
        "erotismo",
        "lascíva",
        "porno",
        "boquete",
        "caralho",
        "foda",
        "foder",
        "fode",
        "pau",
        "pica",
        "porra",
        "cu",
        "xoxota",
        "xavasca",
        "cacete",
        "siririca"



    ];

    // Verifica se o texto contém conteudo impróprio
    var ConteudoImproprioEncontrado = [];
    for (var i = 0; i < ConteudoImproprio.length; i++) {
        if (texto.includes(ConteudoImproprio[i])) {
            ConteudoImproprioEncontrado.push(ConteudoImproprio[i]);
        }
    }

    // Verifica se o texto contém palavras com tópicos sensíveis, como:
    // Termos gordofóbicos, nazistas, homofóbicos, transfóbicos, misóginas,
    // racistas, intolerancia religiosa, preconceituosos com usuários de drogas,
    //atentados e massacres.
   var TopicoSensivel = [
        "assassino",
        "balofo",
        "barrigudo",
        "bichona",
        "burro",
        "drogado",
        "gordalhufo",
        "gordo",
        "racista",
        "nazista",
        "assediador",
        "matador",
        "pedófilo",
        "psicopata",
        "massacre",
        "sociopata",
        "aniquilar",
        "esquartejar",
        "amaldiçoar",
        "lacerar",
        "esfolhar",
        "retalhar",
        "hitlerismo",
        "hitler",
        "carnificina",
        "chacina",
        "fuzilamento",
        "hecatombe",
        "matança",
        "mortandade",
        "morticínio",
        "abater",
        "chacinar",
        "dizimar",
        "eliminar",
        "exterminar",
        "exterminio",
        "jugular",
        "liquidar",
        "suicidar-se",
        "mata",
        "massacrar",
        "trucidar",
        "vitimar",
        "obito",
        "assolar",
        "destroçar",
        "devastar",
        "eliminar",
        "extinguir",
        "aflingir",
        "pederasta",
        "demente",
        "louco",
        "adoidado",
        "alienado",
        "alucinado",
        "amalucado",
        "anormal",
        "apalermado",
        "abestalhado",
        "gordice",
        "gorda",
        "cheinha",
        "raça ariana",
        "gay",
        "viadinho",
        "bicha",
        "vira homem",
        "afeminado",
        "sapatão",
        "traveco",
        "guei",
        "boiola",
        "invertido",
        "baitola",
        "sodomita",
        "marica",
        "fresco",
        "sapatona",
        "safista",
        "obeso",
        "gorducho",
        "balofo",
        "anafado",
        "roliço",
        "barrigudo",
        "banhudo",
        "gordalhão",
        "gordalhaço",
        "gordalhufo",
        "misoginia",
        "misogino",
        "antifeminismo",
        "racista",
        "crioulo",
        "tição",
        "preto",
        "nego",
        "negro",
        "mulato",
        "amulatado",
        "cafuzo",
        "satanás",
        "capeta",
        "endemoniado",
        "macumba",
        "macumbeiro",
        "drogado",
        "noiado",
        "cracudo",
        "maconheiro",
        "aidetico",
        "viado"

    ];

    var contemTopicoSensivel = false;
    for (var i = 0; i < TopicoSensivel.length; i++) {
        if (texto.includes(TopicoSensivel[i])) {
            contemTopicoSensivel = true;
            break;
        }
    }

    // Mostra na interface o resultado
    var resultado = document.getElementById("resultado");
    if (ConteudoImproprioEncontrado.length > 0 || contemTopicoSensivel) {
        resultado.innerHTML = "Conteúdo impróprio detectado:<br>" + ConteudoImproprioEncontrado.join(", ") + (contemTopicoSensivel ? " é um Tópico Sensível" : "");
        resultado.style.color = "red";
    } else {
        resultado.innerHTML = "Conteúdo aprovado!";
        resultado.style.color = "green";
    }
}
