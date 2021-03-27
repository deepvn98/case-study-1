function disPlay( index ){
    console.log(object.quizs[ index ]);
    document.getElementById("question") . innerHTML=object.quizs[index].question;
    document.getElementById( "img" ) . src = object.quizs[index].img;
    for ( let i = 1; i <= object.quizs[ index ].answer.length; i++ ){
        document.getElementById("ans" + i).innerHTML = object.quizs[ index ].answer[ i - 1 ];
    }
    document.getElementById( "explain" ) . innerHTML = "Nói gì đó về câu trước: " + object.quizs[index - 1].explain;

}
disPlay(0)
