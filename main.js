
// document.getElementById('btn').addEventListener('click', function () {
//     document.getElementById('text').innerText = "welcome";
//     document.getElementById('text').style.backgroundColor = "red";
// });

// Swal.fire('Hello World!');



let score = 0;  // عدد الدرجات
let timer;      // مؤقت لكل سؤال

// دالة تشغيل اللعبة
function startGame() {
    score = 0; // نعيد الدرجات للصفر عند بداية اللعبة
    document.getElementById('score').innerText = `Score: ${score}`; // عرض الدرجات في الصفحة
    Swal.fire({
        title: 'ازيك!',
        text: 'عاوز تلعب?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'نعم!',
        cancelButtonText: 'لا بعدين'
    }).then((result) => {
        if (result.isConfirmed) {
            askQuestion1();
        } else {
            Swal.fire('طب يلا في داهيه انت ابن عر* اصلا! 👋');
        }
    });
}

// دالة لبدء السؤال الأول
function askQuestion1() {
    startTimer();
    Swal.fire({
        title: 'اول سؤال',
        text: 'ا حمد حماده كريزما ?',
        input: 'radio',
        inputOptions: {
            'yes': 'نعم',
            'no': 'لا',
        },
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        stopTimer();
        if (result.value === 'yes') {
            score++;
            updateScore();
            Swal.fire('جدع!', ' برافو عليك', 'success').then(() => {
                askQuestion2();
            });
        } else {
            Swal.fire('غلط!', 'خخخخ طب يلا يا ك*** من هنا.', 'error');
        }
    });
}

// دالة لبدء السؤال الثاني
function askQuestion2() {
    startTimer();
    Swal.fire({
        title: 'السؤال الثاني',
        text: 'احمد حماده حلو ?',
        input: 'radio',
        inputOptions: {
            'yes': 'نعم',
            'no': 'لا',
        },
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        stopTimer();
        if (result.value === 'yes') {
            score++;
            updateScore();
            Swal.fire('جدع !', 'بدات احبك', 'success').then(() => {
                endGame();
            });
        } else {
            Swal.fire('غلط!', 'متجيش هنا تاني يابن المت*** يلا.', 'error');
        }
    });
}

// دالة لبدء المؤقت
function startTimer() {
    let timeLeft = 10; // 10 ثواني لكل سؤال
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            Swal.fire('Time is up!', 'You ran out of time!', 'error').then(() => {
                nextQuestion();
            });
        } else {
            document.getElementById('score').innerText = `Score: ${score} | Time left: ${timeLeft}s`;
            timeLeft--;
        }
    }, 1000);
}

// دالة لإيقاف المؤقت
function stopTimer() {
    clearInterval(timer);
    document.getElementById('score').innerText = `Score: ${score}`;
}

// دالة لعرض الدرجات بعد كل سؤال
function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
}

// دالة نهاية اللعبة
function endGame() {
    Swal.fire({
        title: 'Quiz Completed!',
        text: `Your final score is: ${score}`,
        icon: 'success'
    });
}





