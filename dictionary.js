var dictionaries = {
    pl_csb: [
        {phrase: "język", translations: ["jãzëk", "mòwa"],
        antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "Sn",
        pronounciation: {IPA: "[jãz̪ək]", SPA: "[jązъk]", UPA: "", Kirschenbaum: "[ja~z[@k]"},
        sentences: [""]},
        {phrase: "mowa", translations: ["mòwa", "jãzëk"],
        antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "Sn",
        pronounciation: {IPA: "[mwɛva]", SPA: "[mu̯eva]", UPA: "", Kirschenbaum: "[mwEva]"},
        sentences: [""]},
        {phrase: "ja", translations: ["jô"],
        antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[jɞ]", SPA: "", UPA: "", Kirschenbaum: "[jO\"]"},
        sentences: ["Jô "]},
        {phrase: "ty", translations: ["të"],
        antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[t̪ə]", SPA: "[tъ]", UPA: "", Kirschenbaum: "[t[@]"},
        sentences: ["Të "]},
        {phrase: "on", translations: ["òn"],
        antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[wɛn̪]", SPA: "[u̯en]", UPA: "", Kirschenbaum: "[wEn[]"},
        sentences: ["Òn "]},
        {phrase: "ona", translations: ["òna"],
        antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[wɛn̪ä]", SPA: "[u̯enä]", UPA: "", Kirschenbaum: "[wEn[a\"]"},
        sentences: ["Òna "]},
        {phrase: "ono", translations: ["òno"],
        antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[wɛn̪ɔ]", SPA: "[u̯eno]", UPA: "", Kirschenbaum: "[wEn[O]"},
        sentences: ["Òno "]},
        {phrase: "my", translations: ["më"],
        antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[mə]", SPA: "[mъ]", UPA: "", Kirschenbaum: "[m@]"},
        sentences: ["Më "]},
        {phrase: "wy", translations: ["wa"],
        antonyms: [], hyponyms: [], hyperonyms: [],
        related: ["Wy"], pos: "perpron",
        pronounciation: {IPA: "[vä]", SPA: "[vä]", UPA: "", Kirschenbaum: "[va\"]"},
        sentences: ["Wa "]},
        {phrase: "oni", translations: ["òni"],
        antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[wɛɲi]", SPA: "[u̯eńi]", UPA: "", Kirschenbaum: "[wEn^i]"},
        sentences: ["Òni "]},
        {phrase: "one", translations: ["òne"],
        antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[wɛn̪ɛ]", SPA: "[u̯ene]", UPA: "", Kirschenbaum: "[wEn[E]"},
        sentences: ["Òne "]},
        {phrase: "Wy", translations: ["Wë"],
        antonyms: [], hyponyms: [], hyperonyms: [],
        related: ["Pan", "Pani", "Państwo"], pos: "perpron",
        pronounciation: {IPA: "[wə]", SPA: "[vъ]", UPA: "", Kirschenbaum: "[v@]"},
        sentences: ["Wë jesce pò prôwdze... przekãsnô. (Jan Rompski, Pòrénk)"]}
    ],
    csb_pl: [
        {phrase: "jãzëk", translations: ["język"],
        synonyms: ["mowa"], antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "Sn",
        pronounciation: {IPA: "[jãz̪ək]", SPA: "[jązъk]", UPA: "", Kirschenbaum: "[ja~z[@k]"},
        sentences: [""]},
        {phrase: "mòwa", translations: ["mowa"],
        synonyms: ["język"], antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "Sn",
        pronounciation: {IPA: "[mwɛva", SPA: "['mu̯eva]", UPA: "", Kirschenbaum: "[mwEva]"},
        sentences: [""]},
        {phrase: "jô", translations: ["ja"],
        synonyms: [], antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[jɞ]", SPA: "", UPA: "", Kirschenbaum: "[jO\"]"},
        sentences: ["Jô "]},
        {phrase: "të", translations: ["ty"],
        synonyms: [], antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[t̪ə]", SPA: "[tъ]", UPA: "", Kirschenbaum: "[t[@]"},
        sentences: ["Të "]},
        {phrase: "òn", translations: ["on"],
        synonyms: [], antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[wɛn̪]", SPA: "[u̯en]", UPA: "", Kirschenbaum: "[wEn[]"},
        sentences: ["Òn "]},
        {phrase: "òna", translations: ["ona"],
        synonyms: [], antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[wɛn̪ä]", SPA: "[u̯enä]", UPA: "", Kirschenbaum: "[wEn[a\"]"},
        sentences: ["Òna "]},
        {phrase: "òno", translations: ["ono"],
        synonyms: [], antonyms: [], hyponyms: [], hyperonyms: [],
        related: [], pos: "perpron",
        pronounciation: {IPA: "[wɛn̪ɔ]", SPA: "[u̯eno]", UPA: "", Kirschenbaum: "[wEn[O"},
        sentences: ["Òno "]}
    ]
};
function reverseDict(dict) {
    switch(dict) {
        case "pl_csb": return "csb_pl";
        case "pl_dsb": return "dsb_pl";
        case "pl_hsb": return "hsb_pl";
        case "pl_wym": return "wym_pl";
        case "pl_rue": return "rue_pl";
        case "csb_pl": return "pl_csb";
        case "dsb_pl": return "pl_dsb";
        case "hsb_pl": return "pl_hsb";
        case "wym_pl": return "pl_wym";
        case "rue_pl": return "pl_rue";

        case "en_csb": return "csb_en";
        case "en_dsb": return "dsb_en";
        case "en_hsb": return "hsb_en";
        case "en_wym": return "wym_en";
        case "en_rue": return "rue_en";
        case "csb_en": return "en_csb";
        case "dsb_en": return "en_dsb";
        case "hsb_en": return "en_hsb";
        case "wym_en": return "en_wym";
        case "rue_en": return "en_rue";
        default: return "";
    }
}
function dictionaryExists(dict) {
    switch(dict) {
        case "pl_csb": return true;
        case "csb_pl": return true;
        default: return false;
    }
}