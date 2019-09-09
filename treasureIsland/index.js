var findPath = map => {
  let q = []
  q.push({row: 0, col: 0, steps: 0})
  while(q.length > 0){
    let curr = q.shift()
    let {row, col, steps} = curr
    if(map[row][col] === 'X'){
      return steps
    }
    map[row][col] = 'V'
    if(isSafe(map, row +1, col)){
      q.push({row: row+1, col: col, steps: steps + 1 })
    }
    if(isSafe(map, row -1 , col)){
      q.push({row: row - 1, col: col, steps: steps + 1 })
    }
    if(isSafe(map, row , col + 1)){
      q.push({row: row, col: col + 1, steps: steps + 1 })
    }
    if(isSafe(map, row , col -1)){
      q.push({row: row, col: col - 1, steps: steps + 1 })
    }
  }
  
}

var isSafe = (map, row, col) => {
  return (
    row < map.length &&
    row >= 0 &&
    col < map[row].length &&
    col >= 0 &&
    (map[row][col] == "O" || map[row][col] == "X")
  );
};


let input = 
[['O', 'O', 'O', 'O'],
 ['D', 'O', 'D', 'O'],
 ['O', 'O', 'O', 'O'],
 ['X', 'D', 'D', 'O']]

 findPath(input)