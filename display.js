function disPlay( index ){
    console.log(object.quizs[ index ]);
    document.getElementById("question") . innerHTML=object.quizs[index].question;
    document.getElementById( "img" ) . src=object.quizs[index].img;
    // document.getElementById( "explain" ) . innerHTML = "Giải thích câu trước: " + object.quizs[index - 1].explain;
    for ( let i = 1; i <= object.quizs[index].answer.length; i++ ){
        document.getElementById("ans" + i).innerHTML = object.quizs[ index ].answer[ i-1 ];
    }
}
disPlay(0)
