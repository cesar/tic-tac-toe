/**
 * TEH GAME IS TIC-TAC-TOE
 */


function initBoard(board) {
    var count = 1;
    for(var i = 0; i < 3; i++) {
        var tmp = [];
        for (var k = 0; k < 3; k++) {
            tmp.push(count++);
        }
        board.push(tmp);
    }
}
/**
 * Given a matrix, draw the game board in the console
 */
function drawBoard(board) {
    console.log(' '+ board[0][0] + ' | '+ board[0][1] +' | '+ board[0][2] +' ');
    console.log('---+---+---');
    console.log(' '+ board[1][0] +' | '+ board[1][1] +' | '+ board[1][2] +' ');
    console.log('---+---+---');
    console.log(' '+ board[2][0] +' | '+ board[2][1] +' | '+ board[2][2] +' ');
}

/**
 * Board is a two dimensional array
 */
function checkStatus(board) {
    var flag = false;   
      if((board[0][0] == board[1][1] && board[0][0] == board[2][2]) || (board[0][2] == board[1][1] && board[0][2] == board[2][0])) {
          flag = true;
      } else {
          for(var i = 0; i < 3; i++) {
              if((board[line][0] == board[line][1] && board[line][0] == board[line][2])|| (board[0][line] == board[1][line] && board[0][line] == board[2][line])) {
                  flag = true;
                  break
              }
          }
      }

      return flag;        
}

function promptUser() {

}

var board = [];

initBoard(board);

drawBoard();
