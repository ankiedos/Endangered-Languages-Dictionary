function changeLang()
{
    var select = document.querySelector("select[name=langs]");
    var URL = window.location.href;
    if(URL == "https://ankiedos.github.io/Endangered-Languages-Dictionary/") window.location.href = "https://ankiedos.github.io/Endangered-Languages-Dictionary/index." + select.value + ".html";
    else window.location.href = URL.substring(0, URL.lastIndexOf('.', URL.length - 6)) + "." + select.value + ".html";
}
function translatePOS(pos, lang) {
    switch(lang) {
        case "pl":
            switch(pos) {
                case "n": return "rzeczownik";
                case "adj": return "przymiotnik";
                case "adv": return "przysłówek";
                case "perpron": return "zaimek osobowy";
                case "posspron": return "zaimek dzierżawczy";
                case "part": return "partykuła";
                case "prep": return "przyimek";
                case "conj": return "spójnik";
                case "onomatopoeia": return "onomatopeja";
                case "vt": return "czasownik przechodni";
                case "vint": return "czasownik nieprzechodni";
                case "participium": return "imiesłów";
            }
        case "en":
            switch(pos) {
                case "n": return "noun";
                case "adj": return "adjective";
                case "adv": return "adverb";
                case "perpron": return "personal pronoun";
                case "posspron": return "possesive pronoun";
                case "part": return "particle";
                case "prep": return "preposition";
                case "conj": return "conjunction";
                case "onomatopoeia": return "onomatopoeia";
                case "vt": return "transitive verb";
                case "vint": return "intransitive verb";
                case "participium": return "participle";
            }
        default: return "";
    }
}