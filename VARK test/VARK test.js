// importing the qustions
let qustionHTML = '';
let qustionNumber = 0;
let isAnswered = false;

let Vcount = 0;
let Acount = 0;
let Rcount = 0;
let Kcount = 0;

loadQustions();
function loadQustions(){

    if (qustionNumber>16){
        qustionHTML = `
            <div class="QuestionBlook">
                <p class="QuestionNum">Test Completed</p>
                <p class="Question">Your Learning Style is:</p>
                <div class="answers">
                    <div class="answerBlock TheAnswers" style="text-align: center; font-size: 20px;">
                    نسبة قابلية تعلمك بشكل بصري: ${Math.round(Vcount/17*100)}%
                    </div>
                    <div class="answerBlock TheAnswers" style="text-align: center; font-size: 20px;">
                    نسبة قابلية تعلمك بشكل بصري: ${Math.round(Acount/17*100)}%
                    </div>
                    <div class="answerBlock TheAnswers" style="text-align: center; font-size: 20px;">
                    نسبة قابلية تعلمك بالقراءة/الكتابة: ${Math.round(Rcount/17*100)}%
                    </div>
                    <div class="answerBlock TheAnswers" style="text-align: center; font-size: 20px;">
                    نسبة قابلية تعلمك بشكل حركي: ${Math.round(Kcount/17*100)}%
                    </div>
                </div>
                <div style="display: flex; justify-content: center;"><button class="nextButton" onclick="
                location.reload()
                ">Retake Test</button></div>
            </div>
        `;
        console.log(qustionNumber);
        document.querySelector('main').innerHTML= qustionHTML;

    }
    else {
        qustionHTML = `
            <div class="QuestionBlook">
                <p class="QuestionNum">Question ${qustionNumber + 1 } of 17</p>
                <p class="Question">${VARKQuestions[qustionNumber].qustion}</p>
                <div class="answers">
                    <div class="answerBlock">
                            <span class="yello-circle"></span>
                            <span class="TheAnswers" data-value="V">${VARKQuestions[qustionNumber].answers.answerV}</span>
                    </div>
                    <div class="answerBlock">
                            <span class="yello-circle"></span>
                            <span class="TheAnswers" data-value="A">${VARKQuestions[qustionNumber].answers.answerA}</span>
                    </div>
                    <div class="answerBlock">
                            <span class="yello-circle"></span>
                            <span class="TheAnswers" data-value="R">
                                ${VARKQuestions[qustionNumber].answers.answerR}
                            </span>
                    </div>
                    <div class="answerBlock">
                            <span class="yello-circle"></span>
                            <span class="TheAnswers" data-value="K">
                                ${VARKQuestions[qustionNumber].answers.answerK}
                            </span>
                    </div>
                </div>
                <div style="display: flex; justify-content: center;"><button class="nextButton" onclick="
                if(isAnswered == true){
                loadQustions()
                }
                ">next</button></div>
            </div>
            
        `;
        document.querySelector('main').innerHTML= qustionHTML;
        qustionNumber=qustionNumber+1;
        isAnswered = false;

        document.querySelectorAll('.yello-circle').forEach(yelloCircle => {
        yelloCircle.addEventListener('click', () => {
            if(isAnswered == false){

                yelloCircle.style.backgroundColor = 'rgb(0, 0, 202)';

                const answer = yelloCircle.nextElementSibling.dataset.value;

                isAnswered = true;
                if(answer === 'V'){
                    Vcount++;
                }else if(answer === 'A'){
                    Acount++;
                }else if(answer === 'R'){
                    Rcount++;
                }else if(answer === 'K'){
                    Kcount++;
                }
                console.log(Vcount, Acount, Rcount, Kcount);
                }

            });
        });
    }

};
