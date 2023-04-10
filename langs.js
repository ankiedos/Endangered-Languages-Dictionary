function change_lang()
{
    var select = document.querySelector("select[name=langs]");
    var URL = window.location.href;
    if(URL == "https://ankiedos.github.io/Endangered-Languages-Dictionary/") window.location.href = "https://ankiedos.github.io/Endangered-Languages-Dictionary/index." + select.value + ".html";
    else window.location.href = URL.substring(0, URL.lastIndexOf('.', URL.length - 6)) + "." + select.value + ".html";
}