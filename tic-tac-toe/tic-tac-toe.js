/**
 * TEH GAME IS TIC-TAC-TOE
 */

var ask = require('readline-sync');
var process = require('process');
var chalk = require('chalk');

function initBoard() {
    var count = 1;
    var board = [];
    for(var i = 0; i < 3; i++) {
        var tmp = [];
        for (var k = 0; k < 3; k++) {
            tmp.push(count++);
        }
        board.push(tmp);
    }
    return board;
}
/**
 * Given a matrix, draw the game board in the console
 */
function drawBoard(board) {
    console.log('\n '+ board[0][0] + ' | '+ board[0][1] +' | '+ board[0][2] +' ');
    console.log('---+---+---');
    console.log(' '+ board[1][0] +' | '+ board[1][1] +' | '+ board[1][2] +' ');
    console.log('---+---+---');
    console.log(' '+ board[2][0] +' | '+ board[2][1] +' | '+ board[2][2] +' \n');
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
              if((board[i][0] == board[i][1] && board[i][0] == board[i][2])|| (board[0][i] == board[1][i] && board[0][i] == board[2][i])) {
                  flag = true;
                  break
              }
          }
      }
      return flag;        
}

function promptUser(player) {

    var play = ask.question('Make a move player ' + player + '-> ');

    if (play === 'quit') {
        console.log(chalk.red('\nPlayer ' + player + ' has quit.\n'));
        process.exit(0);
    } else {
        var playNum = parseInt(play);
        if (playNum < 1 || playNum > 9) {
            return -1;
        }
        return playNum;
    }
}

function makeMove(board, player, row, column) {
    if (board[row][column] === 'X' || board[row][column] === 'O') {
        return false;
    } else if (player === 1) {
        board[row][column] = 'X';
        return true;
    } else if (player === 2){
        board[row][column] = 'O';
        return true;
    }
}

function getRow(num) {
    return Math.floor((num - 1) / 3);
}

function getColumn(num) {
    return Math.floor(((num - 1) % 3));
}

function play() {

    var board = initBoard(board);

    console.log(chalk.green('\nWelcome to TIC-TAC-TOE'));

    var currentPlayer = 1;

    var moves = 0;

    for(;;) {

        drawBoard(board);

        var playNum = promptUser(currentPlayer);

        if (playNum === -1) {
            console.log('Invalid move, try again.');
            continue;
        }

        var row = getRow(playNum);

        var column = getColumn(playNum);

        var valid = makeMove(board, currentPlayer, row, column);

        if (!valid) {
            console.log(chalk.red('\nInvalid move, try again.\n'));
            continue;
        }

        var won = checkStatus(board);

        if (won) {
            console.log(chalk.green('\n----------------------- Player ' + currentPlayer + ' has won! -----------------------\n'));
            drawBoard(board);
            break;
        } else if (moves === 9) {
            console.log(chalk.gren('----------------------- THE GAME IS A DRAW! -----------------------'));
            drawBoard(board);
            break;
        }

        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }

    return;
}

play();