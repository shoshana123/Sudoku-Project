// Sudoku Checker Project

var puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

var puzzle1 = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,8 ]];

              
var puzzle2 = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,8 ]];
              
// Get Row Function              
let getRow = (puzzle,row) => puzzle[row];

function isSame(puzzle1,puzzle2) {
  var checker = 0;
  for (var i = 0; i < puzzle1.length; i++) {
    for (var j = 0; j < puzzle1.length; j++){
      var elemPuzzle1 = getRow(puzzle1,i)[j];
      var elemPuzzle2 = getRow(puzzle2,i)[j];
      if(elemPuzzle1 === elemPuzzle2) {
        checker++;
      }
    }
  }
  if (checker === 81) {
    return true + ": The two puzzles are the same";
  }
  else if (checker !== 81) {
    return false + ": The two puzzles are not the same";
  }
}

isSame(puzzle1,puzzle2);



function sudokuIsValid (puzzle) {
  for(var i = 0; i < puzzle.length; i++) {
    var rowCheck = includes1to9(getRow(puzzle,i));
    if (rowCheck === false) {
      return false;
    }
    var columnCheck = includes1to9(getColumn(puzzle,i))
    if(columnCheck === false) {
      return false;
    }
  }
  for(var j = 0; j < 3; j++) {
    for(var k = 0; k < 3; k++) {
      var sectionCheck = includes1to9(getSection(puzzle,j,k));
      if (sectionCheck === false) {
      return false;
      }
    }
    
  }
  return true;
}

// sudokuIsValid(puzzle);



// Check if section has 1 to 9
// SH: This looks great! I would add an extra validation to make sure it has a length of 9, but that is just added bonus.
function includes1to9(subsection) {
  var checkerarr = [1,2,3,4,5,6,7,8,9];
  for(var i = 0; i < checkerarr.length; i++) {
    if(subsection.indexOf(checkerarr[i]) === -1) {
      return false;
    } 
  } 
  return true;
}


// Get Column Function  
function getColumn(puzzle,column) {
  var columnCheck = [];
  for (var i = 0; i < 9; i++){
    columnCheck.push(puzzle[i][column]);
  }
  return columnCheck;
}
// Get Section Function
function getSection (puzzle,rowGrid,columnGrid) {
  var getGrid = [];
  rowGrid = rowGrid + (rowGrid*2);
  columnGrid = columnGrid + (columnGrid*2);
  for(var i = rowGrid; i < rowGrid + 3; i++) {
    for(var j = columnGrid; j < columnGrid + 3; j++){
      var row = getRow(puzzle,i);
      getGrid.push(row[j]);
    }
  }
  return  getGrid;
}
 



