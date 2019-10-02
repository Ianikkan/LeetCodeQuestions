var findPath = map => {
  let height = map.length
  let width = map[0].length
 let  q = []
  let dr = [0, 1, 0, -1]
  let dc = [1, 0, -1, 0]
  q.push({steps: 0, row: 0, col: 0})
  map[0][0] = 'D'
  while(q.length > 0){
    cur = q.shift()
    for (let i = 0; i  < 4; i++){
      rt = cur.row + dr[i]
      ct = cur.col + dc[i]
      if(rt < height && rt >= 0 && ct < width && ct >= 0 && map[rt][ct] != 'D'){
        if (map[rt][ct] == 'X'){
          return cur.steps+1
        }
        q.push({steps: cur.steps+1, row: rt, col: ct})
        map[rt][ct] = 'D'
      }
    }

  }


}

let input = 
[['O', 'O', 'O', 'O'],
 ['D', 'O', 'D', 'O'],
 ['O', 'O', 'O', 'O'],
 ['X', 'D', 'D', 'O']]

 findPath(input)