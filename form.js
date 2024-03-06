document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault();

    var correctAnswers = {
        'group1q1': 'true',
        'group2q1': 'option1',
        'group3q1': ['option1', 'option2'],
        'group4q1': 'Đáp án tự luận'
    };

    var allCorrect = true;
    for (var question in correctAnswers) {
        var userAnswer = document.getElementById(question).value;
        if (Array.isArray(correctAnswers[question])) {
            for (var i = 0; i < correctAnswers[question].length; i++) {
                if (!userAnswer.includes(correctAnswers[question][i])) {
                    allCorrect = false;
                    break;
                }
            }
        } else if (userAnswer !== correctAnswers[question]) {
            allCorrect = false;
        }

        if (!allCorrect) {
            break;
        }
    }

    if (allCorrect) {
        window.location.href = 'success.html';
    } else {
        alert('Vui lòng kiểm tra lại câu trả lời.');
    }
});