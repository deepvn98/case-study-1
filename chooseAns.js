function chooseAns(id ) {
    let ans = document.getElementById(id).innerHTML;
    if (object.checkAnswer(ans)) {
        nextQuiz()
    } else {
        endGame()
        disPlay(object.existing)
    }
}