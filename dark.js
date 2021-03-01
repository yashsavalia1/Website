function darkmode() {
    if (document.cookie == "darkmode") {
        document.getElementById("body").style.backgroundImage = "linear-gradient(#363636, rgb(27, 27, 27))"
    } else {
        document.getElementById("body").style.backgroundImage = "url(https://i.stack.imgur.com/spmUM.gif)"

    }
}