function change_lang()
{
    var select = document.querySelector("select[name=langs]");
    var URL = window.location.href;
    window.location.href = URL.substring(0, URL.lastIndexOf('.', URL.length - 6)) + "." + select.value + ".html";
}