function nextQuiz(){
    if ( object.existing < object.limit - 1 ){
        disPlay( object.existing++ );
    }else {
        document.getElementById("report").innerHTML = "Trò chơi kết thúc"
    }
}
nextQuiz()
