function darkmode() {
    if (document.cookie == "darkmode") {
        document.getElementsByTagName("BODY")[0].style.backgroundImage = "linear-gradient(#363636, rgb(27, 27, 27))"
    } else {
        document.getElementsByTagName("BODY")[0].style.backgroundImage = "linear-gradient(45deg, rgb(153, 208, 245), rgb(244, 123, 255))"

    }
}

function hover(str) {
    document.getElementById(str).style = "-webkit-box-shadow: 5px 5px 15px rgba(0, 0, 0, 1); -moz-box-shadow: 5px 5px 15px rgba(0, 0, 0, 1);"

}

function exit(str) {
    document.getElementById(str).style = "";
}