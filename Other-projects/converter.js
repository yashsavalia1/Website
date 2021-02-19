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
        value = value.substring(1,value.length - 1)

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


    }


    document.getElementById("answer").innerHTML = value;
}