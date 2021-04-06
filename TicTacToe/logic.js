/*
Note that the tic tac toe board is beeing represented by
a 9 character string which maps to the original 3x3 matrix
with the first of the values is the full division of the char index
by 3 and the second is the rest of the division in other words:
x = indes/3 and y= index%3, take 8 as an example
8/3 = 2 and 8%3 = 2 or 5, 5/3 = 1 and 5%3 = 2
[0,1,2,3,4,5,6,7,8]
[
    0,0; 0,1; 0,2
    1,0; 1,1; 1,2
    2,0; 2,1; 2,2
]
*/ 



//Helper fucntion to replace a char in the given index with the given replacement
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

//Validate whether Board string is valid
function isBoardValid(ticTacToeBoard){

    let board = ticTacToeBoard;

    if(board.length != 9 || (board[0] != "." && board[0] != "x" && board[0] != "o") || (board[1] != "." && board[1] != "x" && board[1] != "o") || (board[2] != "." && board[2] != "x" && board[2] != "o") || (board[3] != "." && board[3] != "x" && board[3] != "o") || (board[4] != "." && board[4] != "x" && board[4] != "o") || (board[5] != "." && board[5] != "x" && board[5] != "o") || (board[6] != "." && board[6] != "x" && board[6] != "o") || (board[7] != "." && board[7] != "x" && board[7] != "o") || (board[8] != "." && board[8] != "x" && board[8] != "o"))
        return true;
    else 
        return false;
        
}

//validate wheter someone has won
function hasWon(ticTacToeBoard){

    let board = ticTacToeBoard;

    if(!isBoardValid(board))
        throw "Invalid Input";
    else{

        if((board[0] == board[1] && board[0] == board[2] && board[0] != "." ) || (board[3] == board[4] && board[3] == board[5] && board[3] != ".") || (board[6] == board[7] && board[6] == board[8] && board[6] != ".") || (board[0] == board[3] && board[0] == board[6] && board[0] != ".") || (board[1] == board[4] && board[1] == board[7] && board[1] != ".") || (board[2] == board[5] && board[2] == board[8] && board[2] != ".") || (board[0] == board[4] && board[0] == board[8] && board[0] != ".") || (board[2] == board[4] && board[2] == board[6] && board[2] != "."))
            return true;
        else
            return false;

    }

}

//First AI move (Always the second move overall)
function firstMove(ticTacToeBoard){

    let board = ticTacToeBoard;

    if(isBoardValid(board))
        throw "Illegal Argument";

    if(board === "....x....")
        return "o...x....";
    else
        return board.replaceAt(4,"o");

}

//Second AI move (Always the fourth move overall)
function secondMove(ticTacToeBoard){

    let board = ticTacToeBoard;

    if(isBoardValid(board))
        throw "Illegal Argument";
    
    if(board === "ox..x...."){
        return "ox..x..o.";
    }else if(board === "o.x.x...."){
        return "o.x.x.o..";
    }else if(board === "o..xx...."){
        return "o..xxo...";
    }else if(board === "o...xx..."){
        return "o..oxx..."; 
    }else if(board === "o...x.x.."){
        return "o.o.x.x.."; 
    }else if(board === "o...x..x."){
        return "oo..x..x.";
    }else if(board === "o...x...x"){
        return "o...x.o.x";
    }else if(board === "xx..o...."){
        return "xxo.o....";
    }else if(board === "x.x.o...."){
        return "xox.o....";
    }else if(board === "x..xo...."){
        return "x..xo.o..";
    }else if(board === "x...ox..."){
        return "x.o.ox...";
    }else if(board === "x...o.x.."){
        return "x..oo.x..";
    }else if(board === "x...o..x."){
        return "x...o.ox.";
    }else if(board === "x...o...x"){
        return "x..oo...x";
    }else if(board === ".xx.o...."){
        return "oxx.o....";
    }else if(board === ".x.xo...."){
        return "ox.xo....";
    }else if(board === ".x..ox..."){
        return ".xo.ox..."
    }else if(board === ".x..o.x.."){
        return "ox..o.x..";
    }else if(board === ".x..o..x."){
        return "ox..o..x.";
    }else if(board === ".x..o...x"){
        return ".xo.o...x";
    }else if(board === "..xxo...."){
        return "o.xxo....";
    }else if(board === "..x.ox..."){
        return "..x.ox..o";
    }else if(board === "..x.o.x.."){
        return ".ox.o.x..";
    }else if(board === "..x.o..x."){
        return "..x.o..xo";
    }else if(board === "..x.o...x"){
        return "..x.oo..x";
    }else if(board === "...xox..."){
        return "...xoxo..";
    }else if(board === "...xo.x.."){
        return "o..xo.x..";
    }else if(board === "...xo..x."){
        return "...xo.ox.";
    }else if(board === "...xo...x"){
        return "...xo.o.x";
    }else if(board === "....oxx.."){
        return "....oxx.o";
    }else if(board === "....ox.x."){
        return "....ox.xo";
    }else if(board === "....ox..x"){
        return "..o.ox..x";
    }else if(board == "....o.xx."){
        return "....o.xxo";
    }else if(board === "....o.x.x"){
        return "....o.xox";
    }else if(board === "....o..xx"){
        return "....o.oxx";    
    }

}

//Ai Third Move (Allways the sixth move overall)
function thirdMove(ticTacToeBoard){

    let board = ticTacToeBoard;

    if(isBoardValid(board))
        throw "Illegal Argument";

    if(board === "oxx.x..o."){
        return "oxx.x.oo.";
    }else if(board === "ox.xx..o."){
        return "ox.xxo.o.";
    }else if(board === "ox..xx.o."){
        return "ox.oxx.o.";
    }else if(board === "ox..x.xo."){
        return "oxo.x.xo.";
    }else if(board === "ox..x..ox"){
        return "ox..xo.ox";
    }else if(board === "oxx.x.o.." || board === "o.x.xxo.." || board === "o.x.x.ox." || board === "o.x.x.o.x"){
        return board.replaceAt(3, "o");
    }else if(board === "o.xxx.o.."){
        return "o.xxxoo..";
    }else if(board === "ox.xxo..."){
        return "ox.xxo.o.";
    }else if(board === "o.xxxo..."){
        return "o.xxxoo..";
    }else if(board === "o..xxox.."){
        return "o.oxxox..";
    }else if(board === "o..xxo.x."){
        return "oo.xxo.x.";
    }else if(board === "o..xxo..x"){
        return "o..xxoo.x";
    }else if(board === "oxo.x.x.."){
        return "oxo.x.xo.";
    }else if(board === "o.oxx.x.." || board === "o.o.xxx.." || board === "o.o.x.xx." || board === "o.o.x.x.x"){
        return  board.replaceAt(1, "o");
    }else if(board === "oox.x..x."){
        return "oox.x.ox.";
    }else if(board === "oo.xx..x." || board === "oo..xx.x." || board === "oo..x.xx." || board === "oo..x..xx"){
        return  board.replaceAt(2, "o");
    }else if(board === "o..xx.o.x"){
        return "o..xxoo.x";
    }else if(board === "ox..x.o.x" || board === "o.x.x.o.x" || board === "o...xxo.x" || board === "o...x.oxx"){
        return  board.replaceAt(4, "o");
    }else if(board === "xxo.o.x.."){
        return "xxooo.x..";
    }else if(board === "xxoxo...." || board === "xxo.ox..." || board === "xxo.o..x." || board === "xxo.o...x"){
        return  board.replaceAt(6, "o");
    }else if(board === "xox.o..x."){
        return "xoxoo..x.";
    }else if(board === "xoxxo...." || board === "xox.ox..." || board === "xox.o.x.." || board === "xox.o...x"){
        return  board.replaceAt(7, "o");
    }else if(board === "x.xxo.o.."){
        return "xoxxo.o..";
    }else if(board === "xx.xo.o.." || board === "x..xoxo.." || board === "x..xo.ox." || board === "x..xo.o.x"){
        return  board.replaceAt(2, "o");
    }else if(board === "x.o.oxx.."){
        return "x.oooxx..";
    }else if(board === "xxo.ox..." || board === "x.oxox..." || board === "x.o.ox.x." || board === "x.o.ox..x"){
        return  board.replaceAt(6, "o");
    }else if(board === "x..ooxx.."){
        return "xo.ooxx..";
    }else if(board === "xx.oo.x.." || board === "x.xoo.x.." || board === "x..oo.xx." || board === "x..oo.x.x"){
        return  board.replaceAt(5, "o");
    }else if(board === "x.x.o.ox."){
        return "xox.o.ox.";
    }else if(board === "xx..o.ox." || board === "x..xo.ox." || board === "x...oxox." || board === "x...o.oxx"){
        return  board.replaceAt(2, "o");
    }else if(board === "x..oox..x"){
        return "x.ooox..x";
    }else if(board === "xx.oo...x" || board === "x.xoo...x" || board === "x..oo.x.x" || board === "x..oo..xx"){
        return  board.replaceAt(5, "o");
    }else if(board === "oxx.o...x"){
        return "oxx.oo..x";
    }else if(board === "oxxxo...." || board === "oxx.ox..." || board === "oxx.o.x.." || board === "oxx.o..x."){
        return  board.replaceAt(8, "o");
    }else if(board === "ox.xo...x"){
        return "oxoxo...x";
    }else if(board === "oxxxo...." || board === "ox.xox..." || board === "ox.xo.x.." || board === "ox.xo..x."){
        return  board.replaceAt(8, "o");
    }else if(board === ".xo.oxx.."){
        return ".xo.oxx.o";
    }else if(board === "xxo.ox..." || board === ".xoxox..." || board === ".xo.ox.x." || board === ".xo.ox..x"){
        return  board.replaceAt(6, "o");
    }else if(board === "ox..o.x.x"){
        return "ox..o.xox";
    }else if(board === "oxx.o.x.." || board === "ox.xo.x.." || board === "ox..oxx.." || board === "ox..o.xx."){
        return  board.replaceAt(8, "o");
    }else if(board === "ox..o..xx"){
        return "ox..o.oxx";
    }else if(board === "oxx.o..x." || board === "ox.xo..x." || board === "ox..ox.x." || board === "ox..o.xx."){
        return  board.replaceAt(8, "o");
    }else if(board === ".xo.o.x.x"){
        return ".xo.o.xox";
    }else if(board === "xxo.o...x" || board === ".xoxo...x" || board === ".xo.ox..x" || board === ".xo.o..xx"){
        return  board.replaceAt(6, "o");
    }else if(board === "o.xxo...x"){
        return "o.xxoo..x";
    }else if(board === "oxxxo...." || board === "o.xxox..." || board === "o.xxo.x.." || board === "o.xxo..x."){
        return  board.replaceAt(8, "o");
    }else if(board === "x.x.ox..o"){
        return "xox.ox..o";
    }else if(board === ".xx.ox..o" || board === "..xxox..o" || board === "..x.oxx.o" || board === "..x.ox.xo"){
        return  board.replaceAt(0, "o");
    }else if(board === ".ox.o.xx."){
        return ".ox.o.xxo";
    }else if(board === "xox.o.x.." || board === ".oxxo.x.." || board === ".ox.oxx.." || board === ".ox.o.x.x"){
        return  board.replaceAt(7, "o");
    }else if(board === "x.x.o..xo"){
        return "xox.o..xo";
    }else if(board === ".xx.o..xo" || board === "..xxo..xo" || board === "..x.ox.xo" || board === "..x.o.xxo"){
        return  board.replaceAt(0, "o");
    }else if(board === "..xxoo..x"){
        return ".oxxoo..x";
    }else if(board === "x.x.oo..x" || board === ".xx.oo..x" || board === "..x.oox.x" || board === "..x.oo.xx"){
        return  board.replaceAt(3, "o");
    }else if(board === "..xxoxo.."){
        return "..xxoxo.o";
    }else if(board === "x..xoxo.." || board === ".x.xoxo.." || board === "...xoxox." || board === "...xoxo.x"){
        return  board.replaceAt(2, "o");
    }else if(board === "o..xo.x.x"){
        return "o..xo.xox";
    }else if(board === "ox.xo.x.." || board === "o.xxo.x.." || board === "o..xoxx.." || board === "o..xo.xx."){
        return  board.replaceAt(8, "o");
    }else if(board === "..xxo.ox."){
        return "..xxo.oxo";
    }else if(board === "x..xo.ox." || board === ".x.xo.ox." || board === "...xoxox." || board === "...xo.oxx"){
        return  board.replaceAt(2, "o");
    }else if(board === "..xxo.o.x"){
        return "..xxooo.x";
    }else if(board === "x..xo.o.x" || board === ".x.xo.o.x" || board === "...xoxo.x" || board === "...xo.oxx"){
        return  board.replaceAt(2, "o");
    }else if(board === "x...oxx.o"){
        return "x..ooxx.o";
    }else if(board === ".x..oxx.o" || board === "..x.oxx.o" || board === "...xoxx.o" || board === "....oxxxo"){
        return  board.replaceAt(0, "o");
    }else if(board === "x...oxx.o"){
        return "x.o.ox.xo";
    }else if(board === ".x..ox.xo" || board === "..x.ox.xo" || board === "...xox.xo" || board === "....oxxxo"){
        return  board.replaceAt(0, "o");
    }else if(board === "..o.oxx.x"){
        return "..o.oxxox";
    }else if(board === "x.o.ox..x" || board === ".xo.ox..x" || board === "..oxox..x" || board === "..o.ox.xx"){
        return  board.replaceAt(6, "o");
    }else if(board === "x...o.xxo"){
        return "x..oo.xxo";
    }else if(board === ".x..o.xxo" || board === "..x.o.xxo" || board === "...xo.xxo" || board === "....oxxxo"){
        return  board.replaceAt(0, "o");
    }else if(board === ".x..o.xox"){
        return ".x.oo.xox";
    }else if(board === "x...o.xox" || board === "..x.o.xox" || board === "...xo.xox" || board === "....oxxox"){
        return  board.replaceAt(1, "o");
    }else if(board === "..x.o.oxx"){
        return "..x.oooxx";
    }else if(board === "x...o.oxx" || board === ".x..o.oxx" || board === "...xo.oxx" || board === "....oxoxx"){
        return  board.replaceAt(2, "o");
    }

}

//AI last move (eighth move overall)
function lastMove(ticTacToeBoard){

    let board = ticTacToeBoard;

    if(isBoardValid(board))
        throw "Illegal Argument";

}