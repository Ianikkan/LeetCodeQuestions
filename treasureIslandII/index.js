var findTreasure = map => {
    let height = map.length, width = map[0].length;
    let q = []
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            if (map[i][j] == 'S'){
                q.push({steps: 0, row: i, col: j})
                map[i][j] = 'D'
            }
        }
    }
    let dr = [0,1,0,-1]
    let dc = [1,0,-1,0]
    while(q.length > 0){
        cur = q.shift();
        for(let i = 0; i < 4; i++){
            let tr = cur.row + dr[i]
            let tc = cur.col + dc[i]
            if(tr < height && tr >= 0 && tc < width && tc >=0 && map[tr][tc]!= 'D'){
                if (map[tr][tc] == 'X'){
                    return cur.steps + 1
                }
                q.push({steps: cur.steps + 1, row: tr, col: tc})
                map[tr][tc] = 'D'
            }
        }
    }
}
let input = [['S', 'O', 'O', 'S', 'S'],
 ['D', 'O', 'D', 'O', 'D'],
 ['O', 'O', 'O', 'O', 'X'],
 ['X', 'D', 'D', 'O', 'O'],
 ['X', 'D', 'D', 'D', 'O']]
 findTreasure(input)