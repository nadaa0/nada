document.addEventListener('DOMContentLoaded', function () {
    var questions = document.querySelectorAll('.question');
    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            var li = this.parentNode;
            li.classList.toggle('open');
        });
    });
});