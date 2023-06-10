function changeLang(current)
{
    var select = document.querySelector("select[name=langs]");
    if(select.value != "pl" && select.value != "en") window.location.pathname = "/Endangered-Languages-Dictionary/lack-of-translation." + current + ".html";
    var URL = window.location.pathname;
    if(window.location.href == "https://ankiedos.github.io/Endangered-Languages-Dictionary/") window.location.href = "https://ankiedos.github.io/Endangered-Languages-Dictionary/index." + select.value + ".html";
    else {
        var start = URL.lastIndexOf(current);
        var first = URL.substring(0, start);
        var middle = select.value;
        var last = URL.substring(start+current.length);
        window.location.pathname = first + middle + last;
    }
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