class GameManager {
    constructor( limit ) {
        this.limit = limit;
        this.existing = 0;
        this.quizs = [];

    }

    checkAnswer(ans){
        if ( ans == this.quizs[this.existing].correct){
            return true;
        }else {
            return false;
        }

    }
    //
    nextQuiz(){
        if ( object.existing < object.limit - 1 ){
            this.existing++;
        }else {
            document.getElementById("report").innerHTML = "Trò chơi kết thúc"
            this.existing = 0;
        }
    }
    //
    endGame(){
            alert(" Bạn đã trả lời sai!")
        this.resetGame()
    }
    //
    resetGame(){
        this.existing = 0;

    }
    //
    addQuiz(quiz){
        this.quizs.push(quiz);
    }
    deleteQuiz(index){
        // this.quizs.splice(index, 1)

    }
}


let object = new GameManager(19);
    object.addQuiz(quiz1);
    object.addQuiz(quiz2);
    object.addQuiz(quiz3);
    object.addQuiz(quiz4);
    object.addQuiz(quiz5);
    object.addQuiz(quiz6);
    object.addQuiz(quiz7);
    object.addQuiz(quiz8);
    object.addQuiz(quiz9);
    object.addQuiz(quiz10);
    object.addQuiz(quiz11);
    object.addQuiz(quiz12);
    object.addQuiz(quiz13);
    object.addQuiz(quiz14);
    object.addQuiz(quiz15);
    object.addQuiz(quiz16);
    object.addQuiz(quiz17);
    object.addQuiz(quiz18);
    object.addQuiz(quiz19);
console.log(object)



