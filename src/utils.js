const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function compareArrNum(arrTo) {
  const sortedArrTo = [...arrTo].sort((a, b) => a - b);

  const isEqual = winningConditions.some((item) =>
    item.every((num, i) => num === sortedArrTo[i]),
  );
  console.log(isEqual);
  return isEqual;
}

export { winningConditions, compareArrNum };
