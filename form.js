document.addEventListener("DOMContentLoaded", function() {
    const a=document.getElementById("form");
    a.addEventListener("submit", function(event) {
        event.preventDefault();
    
        var correctAnswers = {
            'group1q1': 'true',
            'group1q2': 'true',
            'group1q3': 'false',
            'group1q4': 'false',
            'group1q5': 'false',
            'group1q6': 'false',
            'group1q7': 'true',
            'group1q8': 'false',
            'group1q9': 'true',
            'group1q10': 'true',
            'group2q1': 'option2',
            'group2q2': 'option4',
            'group2q3': 'option3',
            'group2q4': 'option1',
            'group2q5': 'option3',
            'group2q6': 'option1',
            'group2q7': 'option1',
            'group2q8': 'option3',
            'group2q9': 'option4',
            'group2q10': 'option4',
            'group3q1': ['option1', 'option2'],
            'group3q2': ['option1', 'option2'],
            'group3q3': ['option1', 'option2'],
            'group3q4': ['option1', 'option2'],
            'group3q5': ['option1', 'option2'],
            'group3q6': ['option1', 'option2'],
            'group3q7': ['option1', 'option2'],
            'group3q8': ['option1', 'option2'],
            'group3q9': ['option1', 'option2'],
            'group3q10': ['option1', 'option2'],    
            'group4q1': '0.875',
            'group4q2': '0.3',
            'group4q3': '1',
            'group4q4': '2',
            'group4q5': '0.2',
            'group4q6': '0.35',
            'group4q7': '4.999',
            'group4q8': '0.222',
            'group4q9': '4',
            'group4q10': '99'
        };
    
        var correctCount = 0;
    
        for (var question in correctAnswers) {
            var userAnswer = document.getElementById(question).value;
            if (Array.isArray(correctAnswers[question])) {
                var allCorrectInThisQuestion = true;
                for (var i = 0; i < correctAnswers[question].length; i++) {
                    if (!userAnswer.includes(correctAnswers[question][i])) {
                        allCorrectInThisQuestion = false;
                        break;
                    }
                }
                if (allCorrectInThisQuestion) {
                    correctCount++;
                }
            } else if (userAnswer === correctAnswers[question]) {
                correctCount++;
            }
        }
        
        localStorage.setItem('correctCount', correctCount);
        window.location.href = "result.html";
    });
});
