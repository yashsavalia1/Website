function darkmode() {
    if (document.cookie == "darkmode") {
        document.getElementById("body").style.backgroundImage = "linear-gradient(#363636, rgb(27, 27, 27))"
    } else {
        document.getElementById("body").style.backgroundImage = "url(https://i.stack.imgur.com/spmUM.gif)"

    }
}

function toggleDarkMode() {
    if (document.cookie == "darkmode") {
        document.cookie = "lightmode";
        darkmode();
    } else {
        document.cookie = "darkmode";
        darkmode();
    }

}