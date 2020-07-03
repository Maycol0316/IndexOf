var one = "es una prueba1";
var two = "es otra prueba2";
var three = "prueba";

if (one.indexOf("es una prueba2") > 0) {
    console.log("two esta en one")
}
else if (one.indexOf("prueba") > 0) {
    console.log("three esta en one")
};

if (two.indexOf("es una prueba1") > 0) {
    console.log("one esta en two")
}
else if (two.indexOf("prueba") > 0) {
    console.log("three esta en two")
};