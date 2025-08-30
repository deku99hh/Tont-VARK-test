// importing the qustions
let qustionHTML = '';

VARKQuestions.forEach((qustion, index) => {
    qustionHTML +=`
        <div class="QuestionBlook">
            <p class="QuestionNum">Question ${index + 1 } of 20</p>
            <p class="Question">${qustion.qustion}</p>
            <div class="answers">
                <div class="answerBlock">
                        <span class="yello-circle"></span>
                        <span class="TheAnswers" data-value="V">${qustion.answers.answerV}</span>
                </div>
                <div class="answerBlock">
                        <span class="yello-circle"></span>
                        <span class="TheAnswers" data-value="A">${qustion.answers.answerA}</span>
                </div>
                <div class="answerBlock">
                        <span class="yello-circle"></span>
                        <span class="TheAnswers" data-value="R">
                            ${qustion.answers.answerR}
                        </span>
                </div>
                <div class="answerBlock">
                        <span class="yello-circle"></span>
                        <span class="TheAnswers" data-value="K">
                            ${qustion.answers.answerK}
                        </span>
                </div>
            </div>
        </div>

    
    `;
});

document.querySelector('main').innerHTML= qustionHTML;
// end of importing the qustions

// counting your VARK
let Vcount = 0;
let Acount = 0;
let Rcount = 0;
let Kcount = 0;

document.querySelectorAll('.yello-circle').forEach(yelloCircle => {
    yelloCircle.addEventListener('click', () => {
        const answer = yelloCircle.nextElementSibling.dataset.value;

        // if(document.querySelectorAll('.yello-circle').innerHTML === ''){console.log('fuck, man')}


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
        
    });
});


// document.querySelectorAll('.yello-circle').forEach(yelloCircle => {
//     yelloCircle.addEventListener('click', () => {
        
//     });
// });