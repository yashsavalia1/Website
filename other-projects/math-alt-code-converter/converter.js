const expressionForm = document.getElementById("expression-form");
const submitButton = document.getElementById("submit");


submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const expressionString = expressionForm.expression.value;
    console.log("Expression Entered");
    expression(expressionString);
})

function expression(value) {
    value = value.trim()
    if (value.charAt(0) == "\"" && value.charAt() == "\"") {
        value = value.substring(1, value.length - 1)

    } else {
        value = value.replaceAll("pi", "π");
        value = value.replaceAll("int", "&int;")
        value = value.replaceAll("sqrt", "&Sqrt;")
        value = value.replaceAll("cbrt", "∛")
        value = value.replaceAll("frthrt", "∜")
        value = value.replaceAll(">=", "≥")
        value = value.replaceAll("<=", "≤")
        value = value.replaceAll("(+-)", "±")
        value = value.replaceAll("^2", "²")
        value = value.replaceAll("^3", "³")
        value = value.replaceAll("^4", "⁴")
        value = value.replaceAll("^5", "⁵")
        value = value.replaceAll("^-1", "⁻¹")
        value = value.replaceAll("^-2", "⁻²")
        value = value.replaceAll("^-3", "⁻³")
        value = value.replaceAll("^-4", "⁻⁴")
        value = value.replaceAll("^-5", "⁻⁵")
        value = value.replaceAll("inf", "∞")
        value = value.replaceAll("->", "→")
        value = value.replaceAll("sum", "Σ")
        value = value.replaceAll("delta", "Δ")
        value = value.replaceAll("partd", "∂")
        value = value.replaceAll("1/2", "&frac12;")
        value = value.replaceAll("1/3", "&frac13;")
        value = value.replaceAll("2/3", "&frac23;")
        value = value.replaceAll("1/4", "&frac14;")
        value = value.replaceAll("3/4", "&frac34;")
        value = value.replaceAll("1/5", "&frac15;")
        value = value.replaceAll("2/5", "&frac25;")
        value = value.replaceAll("3/5", "&frac35;")
        value = value.replaceAll("4/5", "&frac45;")
        value = value.replaceAll("1/6", "&frac16;")
        value = value.replaceAll("5/6", "&frac56;")
        value = value.replaceAll("1/7", "&frac17;")
        value = value.replaceAll("1/8", "&frac18;")
        value = value.replaceAll("7/8", "&frac78;")
        value = value.replaceAll("1/9", "&#8529;")
        value = value.replaceAll("1/10", "&#8530;")


    }


    document.getElementById("answer").innerHTML = value;
}