const cats = ["Milo","Otis","Garfield"];
const catsCopy = [...cats];
function destructivelyAppendCat(name) {
cats.push("Ralph");
}
function  destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
function appendCat(name) {
    const catsCopy = [...cats];
    catsCopy.push("Broom");
    return catsCopy;
}
function prependCat(name) {
    const catsCopy = ["Arnold",...cats];
    return catsCopy;
}
function removeLastCat(name) {
    catsCopy.splice(-1);
    return catsCopy;
}
function removeFirstCat() {
    let catsCopy = cats.slice();
    catsCopy.splice(0,1);
    return catsCopy;
}