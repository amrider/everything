function setup() {
  let regularArr = ['ABC', 'def', createVector(), TAU, Math.E];
  print(regularArr);
  shuffle(regularArr, true); // force modifications to passed array
  print(regularArr);

  // By default shuffle() returns a shuffled cloned array:
  let newArr = shuffle(regularArr);
  print(regularArr);
  print(newArr);
}
