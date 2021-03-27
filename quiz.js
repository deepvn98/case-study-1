class Quiz{
    constructor(question,img,answer,correct,explain){
        this.question = question;
        this.img = img;
        this.answer = answer;
        this.correct = correct;
        this.explain = explain;

    }
}
let quiz1 = new Quiz("Câu1: Trò gì 5<2 , 2<0 , 0<5 ?" ,"img/1.jpg", [" Trò kéo búa bao "," Trò ô ăn quan "," Trò mèo "," Trò Sungoku "] ," Trò ô ăn quan " , '2 là cái kéo đó, 5 là vái bao, 0 là cái búa, hiểu hơm hiểu hơm!!' );
let quiz2 = new Quiz("Câu2: Một con ốc sên leo lên một cái cây cao 13m,ban ngày leo được 3m,ban đêm bị tụt xuống 1m,vậy mất bao ngày nó mới leo đc hết cây?" ,"img/2.jpg" ,[" 4 "," 6 "," 7 "," 9 "] ," 7 " , "đơn giản mà nhỉ, vậy mà vẫn có người trả lời sai" );
let quiz3 = new Quiz("Câu3: Một bà già đi tắm sông, có thằng kia lấy trộm quần của bà già. bà la lên (Thằng nào lấy trộm quần của taoooooooo?). Hỏi chữa nào được kéo dài nhiều nhất?" ,"img/3.jpg", [" Thằng bé "," Bà Già "," Tao "," kéo "] ," Tao " , " Mấy bạn nghĩ chữ kéo được kéo dài nhưng game bảo chữa tao nhá" );
let quiz4 = new Quiz("Câu4: Cho keo 502 vào chảo chống dính, hỏi có dính hay không dính?" ,"img/4.jpg", [" Dính "," không Dính "," 50/50 "," Không Biết "] ," Không Biết " ,"Thử đi rồi biết" );
let quiz5 = new Quiz("Câu5: Tại sao Diệu dùng bút lông đên mà viết ra chữ đỏ?" ,"img/1.jpg", [" Vì Diệu dùng mực đổi mầu "," Vì giấy đểu "," Vì Diệu đang viết chữ đỏ "," Không thể nào "] ," Vì Diệu đang viết chữ đỏ ", " Mực đen viết được cả chữ Tiền đó ạ :v" );
let quiz6 = new Quiz("Câu6: Con gì càng to càng nhỏ ?" ,"img/4.jpg", [" Con kiến càng "," Con Cua "," Con mèo "," Con voi "] ," Con Cua ", " Con cua có một cái càng to một cái càng nhỏ nha, tóm lại là con cua đó" );
let quiz7 = new Quiz("Câu7 :Điền vào chỗ trống: Bụng làm ... chịu! ?" ,"img/1.jpg", [" Người "," Mồm "," Dạ "," Bạn "] ," Dạ ","lại một câu thành ngữ đây mà" );
let quiz8 = new Quiz("Câu8: Bạn làm việc gì đầu tiên mỗi buổi sáng ?" ,"img/8.jpg", [" Đánh răng "," Mở mắt "," tập thể dục "," lướt facebook "] ," Mở mắt " , "Cứ phải mở mắt cái đã rồi làm gì thì làm" );
let quiz9 = new Quiz("Câu9: Con nào bị mù màu ?" ,"img/3.jpg", [" Con chó "," Con cú mèo "," Con mèo "," Con nhện "] ," Con chó ","Một số loài động vật không có khả năng phân biệt mầu sắc, chó là một số trong đó, chính vì vậy người ta mới nói chó có khả năng nhìn thấy ma" );
let quiz10 = new Quiz("Câu10: Diệu có 10kg Sắt và 10kg Bông, Hỏi cái nào nặng hơn ?" ,"img/6.jpg", [" Tất nhiên là sắt rồi "," Sao lại so sánh bông với sắt "," Đố trò mèo "," Bằng nhau "] ," Bằng nhau " );
let quiz11= new Quiz("Câu11: Điền vào chỗ trống: Một con ngựa đau cả tầu ...! " ,"img/8.jpg", [" Được ăn thêm "," An Ủi "," Bỏ cỏ "," Đau theo "] ," Bỏ cỏ ", "Câu thành ngữ nổi tiếng đây mà!" );
let quiz12= new Quiz("Câu12: Con gì hôm nay mưa mai ướt ?" ,"img/5.jpg", [" Tương lai "," Con đường "," Con kênh xanh xanh "," con rùa "] ," con rùa ","Khi mưa con rùa bị ướt, vậy tất nhiên mai rùa cũng bị ướt rồi :))" );
let quiz13= new Quiz("Câu13: Làm thế nào để khiến một người không thể mở mắt trong một thời gian dài ?" ,"img/6.jpg", [" Đơn giản là anh ta ngủ một giấc ngủ dài "," Nhắm mắt hay không liên quan gì đến tao "," Đánh cho bất tỉnh "," Tiêm cho liều thuốc "] ," Đơn giản là anh ta ngủ một giấc ngủ dài ","ngoài chết ra người ta chỉ nhắm mắt khi ngủ thôi mà" );
let quiz14= new Quiz("Câu14: Một rổ trúng đựng 100 quả trứng, bạn có thể lấy ra 2 quả rứng từ 100 quả trứng bao nhiêu lần ?" ,"img/3.jpg", [" 100 lần "," 0 lần "," 1 lần "," 2 lần "] , "1 lần","Lấy 2 quả rồi thì lần sau làm gì còn đủ 100 quả trứng nữa" );
let quiz15= new Quiz("Câu15: Miếng nào là miếng ngon nhất ?" ,"img/1.jpg", [" Miếng đi xin "," Miếng ăn vụng "," Miếng đầu tiên "," Miếng cuối cùng "] ," Miếng ăn vụng ", ":)) Ai hay ăn vựng thì biết nha");
let quiz16= new Quiz(" Câu16: Khi gặp gái xinh, các bạn nhìn gì đầu tiên ?" ,"img/6.jpg", [" Tóc "," Mặt "," Dáng "," Chân "] ," Mặt " , "Nhìn mặt mới biết xinh không chứ mấy bố :))" );
let quiz17= new Quiz(" Câu17: khi một con chó dơi xuống nước, việc gì sẽ xảy ra ?" ,"img/3.jpg", [" Con chó bơi "," Con chó bắt cá "," Con chó bị ướt "," Con chó bị lạnh "] ," Con chó bị ướt " , "Rơi xuống nước thì tất nhiên bị ướt rồi :v" );
let quiz18= new Quiz("Câu18: Trên cây có 1 con chim, sau đó có ba con chim bay tới, sau đó nữa có tỷ tỷ con chim bay tới hỏi trên cây có mấy con chim ?" ,"img/1.jpg", [" 3 con "," Nhiều quá không đếm nổi "," 1 con "," 4 con "] ," 3 con " , "1 con chim + Bố của con chim + chị của con chim = 3 con chim :) " );
let quiz19= new Quiz("Câu19: Nhìn vào gương bạn thấy gì?" ,"img/7.jpg", [" Gương "," Em hàng xóm "," Bạn "," Người yêu cũ "] ," Gương " , " không biết nhìn thấy gì nhưng cứ phải thấy cái gương trước đã :v " );

