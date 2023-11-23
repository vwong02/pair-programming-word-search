const wordSearch = (letters, word) => {

  // Mapping though the letters of the arrays horizontally and join each letter in the arry together without a space (as one word)
  const horizontalJoin = letters.map(ls => ls.join(''));

  // If the word is included in the word search horizontally, return true
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // Create an empty array to transpose the horizontal array to vertical array
  let verticalJoin = [];

  // Iterate through each column and row
  for (let i = 0; i < horizontalJoin.length; i++) { //Iterates through the ows of the original grid
    for (let j = 0; j < horizontalJoin[i].length; j++) { //Iterates through the columns of the current rows

      //Check if there is already a sub-array at the current column index, if not, push into the new array
      if (!verticalJoin[j]) {
        verticalJoin.push([]);
      }
      // Transpose the horizontalJoin into the verticalJoin
      verticalJoin[j][i] = horizontalJoin[i][j];
    }
  }

  //  Map though the letters of the verticalJoin arrays horizontally and join each letter in the arry together without a space (as one word)
  verticalJoin = verticalJoin.map((v) => {
    return v.join('');
  });

  // Checking if the word is included in the word search in the verticalJoin arrays
  for (v of verticalJoin) {
    if (v.includes(word)) {
      return true;
    }
  }
  // If no matches are found, return false
  return false;
};

module.exports = wordSearch;