class GameManager {
    constructor( limit ) {
        this.limit = limit;
        this.existing = 0;
        this.quizs = [];

    }

    checkAnswer(ans){
        if ( ans === this.quizs[this.existing] . correct){
            return true;
        }else {
            return false;
        }

    }
    nextQuiz(){
        if ( object.existing < object.limit - 1 ){
            this.existing++;
        }else {
            document.getElementById("report").innerHTML = "Trò chơi kết thúc"
            this.existing = 0;
        }
    }
    chooseAnswer(ans){
         if (this.checkAnswer(ans)){
             alert("đúng")
             // document.getElementById("result").innerHTML = "Câu trả lời của bạ là đúng!"
         }else {
             alert("sai")
             // document.getElementById("result").innerHTML = "Câu trả lời của bạ là sai!"

         }
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


let object = new GameManager(4);
    object.addQuiz(quiz1);
    object.addQuiz(quiz2);
    object.addQuiz(quiz3);
    object.addQuiz(quiz4);
    console.log(object)



