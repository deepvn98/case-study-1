function disPlay(index){
        document.getElementById("question").innerHTML=object.quizs[index].question;
    for ( let i= 1; i<= object.quizs[index].answer.length; i++ ){
        document.getElementById("ans"+i).innerHTML = object.quizs[index].answer[i-1];
    }
}
disPlay(0)