class GameManager {
    constructor( limit ) {
        this.limit = limit;
        this.quizs = [];

    }

    checkAnswer(){

    }
    chooseAnswer(){

    }
    nextQuiz(){

    }
    resetGame(){

    }
    addQuiz(quiz){
        this.quizs.push(quiz);
    }
    deleteQuiz(index){
        this.quizs.splice(index, 1)

    }
}
let limit = new GameManager(3);
    limit.addQuiz(quiz1);
    limit.addQuiz(quiz2);
    limit.addQuiz(quiz3);
    console.log(limit)


