const word = "Anuina";

function findFirstRep(str) {
  const tabel = {};
  for (const char of str) {
    if (tabel[char]) {
      return char;
    }
    tabel[char] = 1;
  }
}

console.log(findFirstRep(word));
