function toggleDarkMode() {
    var cookie = document.cookie;
    if (cookie == "darkmode") {
        document.cookie = "lightmode; path=/";
        darkmode();
    } else {
        document.cookie = "darkmode; path=/";
        darkmode();
    }

}

function darkmode() {
    if (document.cookie == "darkmode") {
        document.getElementsByTagName("BODY")[0].style.backgroundImage = "linear-gradient(#363636, rgb(27, 27, 27))"
        document.getElementsByTagName("BODY")[0].style.backgroundSize = "cover"

    } else {
        document.getElementsByTagName("BODY")[0].style.backgroundImage = "url(https://i.stack.imgur.com/spmUM.gif)"

    }
}