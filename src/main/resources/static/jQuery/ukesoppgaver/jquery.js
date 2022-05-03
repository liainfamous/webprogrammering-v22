$(function () {
    const navn = $("#navn").val();
    const alder = $("#alder").val();
    const output = $("#output");
    
    if (!(alder > 0)) {
        alert("Du må skrive inn en alder større enn 0!");
    } else {
        output.html("Hei, " + navn + ". Du er " + alder + " år gammel.")
    }
});

// Oppgave 2
$("#fahrenheit").change(function () {
    const c = (5 / 9) * (Number($("#fahrenheit").val()) - 32);
    const el = $("#celsius");
    el.val(c);
});

$("#celsius").change(function () {
    const f = (9 / 5) * Number($("#celsius").val()) + 32;
    const el = $("#fahrenheit");
    el.val(f);
})

// Oppgave 3
$("#pluss").click(function () {
    const in_1 = Number($("#in_1").val());
    const in_2 = Number($("#in_2").val());
    const output = $("#kalk-output");
    if (isNaN(in_1) || isNaN(in_2)) {
        alert("Feil tallformat, prøv igjen.");
    } else {
        output.html(in_1 + in_2);
    }
});

$("#minus").click(function () {
    const in_1 = Number($("#in_1").val());
    const in_2 = Number($("#in_2").val());
    const output = $("#kalk-output");
    if (isNaN(in_1) || isNaN(in_2)) {
        alert("Feil tallformat, prøv igjen.");
    } else {
        output.html(in_1 - in_2);
    }
});

$("#gange").click(function () {
    const in_1 = Number($("#in_1").val());
    const in_2 = Number($("#in_2").val());
    const output = $("#kalk-output");
    if (isNaN(in_1) || isNaN(in_2)) {
        alert("Feil tallformat, prøv igjen.");
    } else {
        output.html(in_1 * in_2);
    }
});

$("#dele").click(function () {
    const in_1 = Number($("#in_1").val());
    const in_2 = Number($("#in_2").val());
    const output = $("#kalk-output");
    if (isNaN(in_1) || isNaN(in_2)) {
        alert("Feil tallformat, prøv igjen.");
    } else {
        output.html(in_1 / in_2);
    }
});
