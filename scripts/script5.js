$(function (){
    // кнопка 1
    let d = $('#d');
    $('#sidebar1').click(
        function (){d.html("<p>Тема:ВИКОРИСТАННЯ В СЦЕНАРІЯХ JAVASCRIPT БІБЛІОТЕК КРОС-БРАУЗЕРНИХ ІНТЕРФЕЙСІВ МЕТОДІВ DOM.  БІБЛІОТЕКА JQUERY UI." +
            "ЗАСОБИ НАЛАГОДЖЕННЯ І ТЕСТУВАННЯ СЦЕНАРІЇВ JAVASCRIPT.\n</p><br><p>Мета: придбати практичні навички роботи jQuery UI, вміти додавати до сайту  динамічні елементи цієї бібліотеки, плагін галереї UniteGallery, кнопки соціальних мереж, інформери та інше.\n</p>")}
    );
    // кнопка 2
    $('#sidebar2').click(
        function (){
            d.html("<img src='images/reportimages/5-2.png'>");
        }
    );
    // кнопка 3
    $('#sidebar3').click(
        function () {
            d.html("<img src='images/reportimages/' >")
        }
    );
    // кнопка 4
    $('#sidebar4').click(
        function () {
            d.html('<img src="images/reportimages/5-4.png"/>')
        }
    );
    // кнопка 5
    $('#sidebar5').click(
        function () {
            d.html('<img src="images/reportimages/"/>')
        }
    );
    // кнопка 6
    $('#sidebar6').click(
        function () {
            d.html('<p>На даній лабораторній роботі ми навчилися працювати з дуже потужною <s>міністром</s> бібліотекою JS - Jquery. <br>' +
                'Було реалізовано datepicker та slider для вибору числа. Також реалізовано галерею та інформери.</p>')
        }
    );
})