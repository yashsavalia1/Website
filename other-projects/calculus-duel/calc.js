function darkmode() {
    if (document.cookie == "darkmode") {
        document.getElementsByTagName("BODY")[0].style.backgroundImage = "linear-gradient(#363636, rgb(27, 27, 27))"
    } else {
        document.getElementsByTagName("BODY")[0].style.background = "url(background.png)"
        document.getElementsByTagName("BODY")[0].style.backgroundSize = "cover"

    }
}

function hover() {
    document.getElementsByTagName("a")[0].style = "-webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 1); -moz-box-shadow: 5px 5px 15px rgba(0, 0, 0, 1);"
}

function exit() {
    document.getElementsByTagName("a")[0].style = "";
}