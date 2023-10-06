function addUser(){
    player1_name =document.getElementById("player-1_name").value;
    player2_name =document.getElementById("player-2_name").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location.replace("game_page.html");
}