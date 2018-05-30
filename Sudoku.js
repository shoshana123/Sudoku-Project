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

let getRows = puzzle;
 
let getColumn = (puzzle,column) => puzzle.map(elem=>elem[column]);
let getColumns = (puzzle)=> puzzle.map((e,index)=>(getColumn(puzzle,index)));

let getSection = (puzzle,rowGrid,columnGrid) => {
  let getGrid = [];
  rowGrid = rowGrid + (rowGrid*2);
  columnGrid = columnGrid + (columnGrid*2);
  for(let i = rowGrid; i < rowGrid + 3; i++) {
    for(let j = columnGrid; j < columnGrid + 3; j++){
      let row = puzzle[i];
      getGrid.push(row[j]);
    }
  }
  return  getGrid;
}

let getSections = (puzzle) => {
  let finalArr = [];
  for(let j = 0; j < 3; j++) {
    for(let k = 0; k < 3; k++) {
      finalArr.push(getSection(puzzle,j,k));
    }
  }
  return finalArr;
}

// Checks if each section has 1 to 9 only characters, a length of 9, and no duplicate characters
function includes1to9(subsection) {
  let checkerarr = [1,2,3,4,5,6,7,8,9];
  for(let i = 0; i < checkerarr.length; i++) {
    if (subsection.indexOf(checkerarr[i]) === -1 ||subsection.length !== 9){
      return false;
    }
  }
  if(subsection.filter((elem,index)=> subsection.indexOf(elem) !== index).length > 0){
    return false;
  } 
  return true;
}

let checksGroupsof9 = (rowsOrColumnsOrSections) => rowsOrColumnsOrSections.every(e=>includes1to9(e));

let isSame = (puzzle1,puzzle2) => {
  let checker = 0;
  for (let i = 0; i < puzzle1.length; i++) {
    for (let j = 0; j < puzzle1.length; j++){
      let elemPuzzle1 = puzzle1[i][j];
      let elemPuzzle2 = puzzle2[i][j];
      if(elemPuzzle1 !== elemPuzzle2) {
        return `False: The two puzzles are not the same.`;
      }
    }
  }
  return `True: The two puzzles are the same!`;
}

// isSame(puzzle1,puzzle2);

let sudokuIsValid = (puzzle) => checksGroupsof9(getRows) && checksGroupsof9(getColumns(puzzle)) && checksGroupsof9(getSections(puzzle));

// sudokuIsValid(puzzle);