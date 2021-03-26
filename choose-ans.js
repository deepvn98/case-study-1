function chooseAns( id ){
    let ans = document.getElementById(id).innerHTML;
    object.chooseAnswer(ans)
    if (object.checkAnswer(ans)){
        nextQuiz()
    }
}
