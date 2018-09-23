// Fischer-Yates non-mutating
// modified from: https://bost.ocks.org/mike/shuffle/
export default function shuffle(origArray) {
  const array = [...origArray];

  for (let remaining = array.length; remaining > 0; remaining -= 1) {
    // Pick a remaining element…
    const i = Math.floor(Math.random() * remaining);

    // And swap it with the current element.
    const temp = array[remaining - 1];
    array[remaining - 1] = array[i];
    array[i] = temp;
  }

  return array;
}
