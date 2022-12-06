var cells = document.getElementsByClassName("cell");
var score_x = document.getElementById("score-x");
var score_x_counter = 0;
var buttons = [
    [cells[0],cells[1],cells[2]],
    [cells[3],cells[4],cells[5]],
    [cells[6],cells[7],cells[8]]];
//back
var flags =[
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

var ply ="X";

function show_index(x,y){
    if (flags[x][y] == null){
        if(ply == "X"){
            flags[x][y] = "X";
            buttons[x][y].innerHTML="X";
            buttons[x][y].classList.add("X");
            ply = "O";
        }
        else if(ply == "O"){
            flags[x][y] = "X";
            buttons[x][y].innerHTML="O";
            buttons[x][y].classList.add("O");
            ply ="X";
        }
    }
    else{
        alert("wrong");
    }
    check_game();
    
}
function check_game(){
    var row1 = cells[0][0]+ cells[0][1]+ cells[0][2];
    var row2 = cells[1][0]+ cells[1][1]+ cells[1][2];
    var row3 = cells[2][0]+ cells[2][1]+ cells[2][2];
    var col1 = cells[0][0]+ cells[1][0]+ cells[2][0];
    var col2 = cells[0][1]+ cells[1][1]+ cells[2][1];
    var col3 = cells[0][2]+ cells[1][2]+ cells[2][2];
    var ghotr1= cells[0][0]+cells[1][1]+ cells[2][2];
    var ghotr2= cells[0][2]+cells[1][1]+ cells[2][0];
    
    if (row1 == "XXX" ||row2 == "XXX" ||row3 == "XXX"||col1 == "XXX"||col2 == "XXX"||col3 == "XXX" ||ghotr1 == "XXX"||ghotr2 == "XXX") {
        alert("x  won");
        
    }
}