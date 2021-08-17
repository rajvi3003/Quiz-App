fetch('assets/quiz.json').then(response => {
    return response.json();
}).then((data) => {

    appendData(data);
}).catch(err => {
    console.log(err, 'undefined');
});
// fetch('assets/quiz.json').then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
//     appendData(data);
// }).catch(function(error) {
//     console.log('Fetch Error:', error);
// });
var currQuestion = {};

function appendData(data) {
    var count = 0;

    function BringQuesOnScreen() {
        var mainContainer = document.getElementById("statement");
        const icondisplay = document.getElementById('q');
        currQuestion = data.Questions[count];
        mainContainer.innerHTML = currQuestion.Question;
        icondisplay.innerHTML = currQuestion.icon;
        for (var j = 1; j < 5; j++) {
            var option = document.getElementById(j);
            option.innerHTML = currQuestion.option[j - 1];
        }
    }
    BringQuesOnScreen();
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    nextButton.onclick = function() {



        count++;
        if (count === data.Questions.length) {
            // count = 1;
            // nextButton.disabled = true;
            count--;
        }
        BringQuesOnScreen();

    }
    var prev = data.length - 1;
    prevButton.onclick = function() {

        count--;
        if (count < 0) {
            count = 0;
        }
        BringQuesOnScreen();
    }
    currkey = data.Questions[0]



    for (var i = 0; i < data.Questions.length; i++) {
        var board = document.createElement('div');
        board.className = "question-no";
        board.id = i;
        board.innerHTML = "Q" + (i + 1);
        board.onclick = function() {
            count = this.id;
            BringQuesOnScreen();
        }
        document.getElementById("sideNavBottom").appendChild(board);


    }
    // currQuestion = data.Questions[];
    for (var j = 0; j < data.Questions.length; j++) {

        for (var i = 0; i < 4; i++) {
            document.getElementById("i").checked = true;
        }
    }






}
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');
// nextButton.addEventListener('click', function(e) {
//     console.log('Click happened for: ' + med);
// });

// window.onload = function() {
//     document.getElementById("next").onclick = function() {
//         alert("Hello WOrld");
//     }
// }