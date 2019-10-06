function ticTacToe() {    
    let papan = [
                  ['*','*','*'],
                  ['*','*','*'],
                  ['*','*','*'], 
                    ]
    let countX = 1
    let countY = 1
    let giliranX = true;
    while (papan.join('').indexOf('*') != -1) {
        let i = Math.floor(Math.random()*3)
        let j = Math.floor(Math.random()*3)
        if (papan[i][j] === '*') {
            if (giliranX) {
                papan[i][j] = 'X'
                countX ++
                giliranX = false
            } else {
                papan[i][j] = 'O'
                countY++
                giliranX = true
            }
        }
        if (countX > 3 || countY > 3) {
            let kanan = ''
            let kiri = ''
            for (let i=0; i<papan.length; i++) {
                kanan += papan[i][i];
                kiri += papan[i][papan.length-i-1]
                let temp = papan[i].slice(0)                
                if (temp.join('')==='XXX' || temp.join('') ==='OOO' ) {
                    console.log (`pemenang dengan garis horizontal adalah ${temp[0]}`)
                    return papan
                } else {                    
                    temp = ''
                    for (let j=0; j<papan[i].length; j++) {
                        temp += papan[j][i]                    
                    }
                    if (temp ==='XXX' || temp ==='OOO' ) {
                        console.log (`pemenang dengan garis vertikal adalah ${temp[0]}`)
                        return papan
                    } 
                }                
            }
            if (kanan ==='XXX' || kanan ==='OOO' ) {
                console.log (`pemenang dengan garis miring kanan adalah ${kanan[0]}`)
                return papan
            }
            if (kiri ==='XXX' || kiri ==='OOO' ) {
                console.log (`pemenang dengan garis miring kiri adalah ${kiri[0]}`)
                return papan
            }             
        }        
    }
    console.log('tidak ada yang menang')
    return papan
}
console.table(ticTacToe())
//console.table(ticTacToe())