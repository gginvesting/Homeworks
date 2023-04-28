function makeOutWord(word, tag) {
    let mitadTag = Math.floor(word.length / 2);
    let mitadUno = word.slice(0, mitadTag);
    let mitadDos = word.slice(mitadTag);
    return mitadUno + tag + mitadDos;
}