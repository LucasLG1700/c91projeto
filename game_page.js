player1Name = localStorage.getItem("chave1");
player2Name = localStorage.getItem("chave2");

player1Score = 0; 
player2Score = 0;

document.getElementById("player1_name").innerHTML = player1Name + ":";
document.getElementById("player2_name").innerHTML = player2Name + ":";

document.getElementById("player1_score").innerHTML = player1Score;
document.getElementById("player2_score").innerHTML = player2Score;

document.getElementById("player_question").innerHTML = "Turno de Pergunta - " + player1Name;
document.getElementById("player_answer").innerHTML = "Turno de Resposta - " + player2Name;

function send() 
{
    number1 = document.getElementById("número1").value;
    number2 = document.getElementById("número2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "x"+ number2 +"</h4>";
    input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("número1").value = "";
    document.getElementById("número2").value = "";
}