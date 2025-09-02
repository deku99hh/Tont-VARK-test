// importing the qustions
let qustionHTML = '';
let qustionNumber = 0;
let isAnswered = false;

let Vcount = 0;
let Acount = 0;
let Rcount = 0;
let Kcount = 0;

let selected = null;

loadQustions();
function loadQustions(){

    if (qustionNumber>10){
        qustionHTML = `
            <div class="QuestionBlook">
                <p class="QuestionNum">Test Completed</p>
                <p class="Question">Your Learning Style is:</p>
                <div class="answers">
                    <div class="answerBlock TheAnswers" style="text-align: center; font-size: 20px;">
                    نسبة قابلية تعلمك بشكل بصري: ${Math.round(Vcount/11*100)}%
                    </div>
                    <div class="answerBlock TheAnswers" style="text-align: center; font-size: 20px;">
                    نسبة قابلية تعلمك بشكل بصري: ${Math.round(Acount/11*100)}%
                    </div>
                    <div class="answerBlock TheAnswers" style="text-align: center; font-size: 20px;">
                    نسبة قابلية تعلمك بالقراءة/الكتابة: ${Math.round(Rcount/11*100)}%
                    </div>
                    <div class="answerBlock TheAnswers" style="text-align: center; font-size: 20px;">
                    نسبة قابلية تعلمك بشكل حركي: ${Math.round(Kcount/11*100)}%
                    </div>
                </div>
                <div style="display: flex; justify-content: center;"><button class="nextButton" onclick="
                location.reload()
                ">Retake Test</button></div>
            </div>
        `;
        document.querySelector('main').innerHTML= qustionHTML;

    }
    else {
        qustionHTML = `        
        <div class="QuestionBlook">
                <p class="QuestionNum">Question ${qustionNumber + 1 } of 11</p>
                <p class="Question">${VARKQuestions[qustionNumber].qustion}</p>
                <div class="answers">
                    <div class="answerBlock">
                        <label class="answer-label">
                            <input type="radio" class="yello-circle yello-input" id="V" name="qustionInput" value="V">
                            <span class="custom-radio yello-circle"> </span> <span class="TheAnswers" data-value="V">${VARKQuestions[qustionNumber].answers.answerV}</span>
                        </label>
                    </div>
                    <div class="answerBlock">
                        <label class="answer-label">
                            <input type="radio" class="yello-circle yello-input" id="A" name="qustionInput" value="A">
                            <span class="custom-radio yello-circle"> </span> <span class="TheAnswers" data-value="A">${VARKQuestions[qustionNumber].answers.answerA}</span>
                        </label>
                    </div>
                    <div class="answerBlock">
                        <label class="answer-label">
                            <input type="radio" class="yello-circle yello-input" id="R" name="qustionInput" value="R">
                            <span class="custom-radio yello-circle"> </span> <span class="TheAnswers" data-value="R">
                                ${VARKQuestions[qustionNumber].answers.answerR}
                            </span>
                        </label>
                    </div>
                    <div class="answerBlock">
                        <label class="answer-label">
                            <input type="radio" class="yello-circle yello-input" id="K" name="qustionInput" value="K">
                            <span class="custom-radio yello-circle"> </span><span class="TheAnswers" data-value="K">
                                ${VARKQuestions[qustionNumber].answers.answerK}
                            </span>
                        </label>
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

        // qustionNumber=qustionNumber+1;
        
        isAnswered = false;

        document.querySelectorAll('.yello-circle').forEach(yelloCircle => {
        yelloCircle.addEventListener('click', () => {
            if(isAnswered == false){

                // const answer = yelloCircle.value;

                isAnswered = true;
                // if(answer === 'V'){
                //     Vcount++;
                // }else if(answer === 'A'){
                //     Acount++;
                // }else if(answer === 'R'){
                //     Rcount++;
                // }else if(answer === 'K'){
                //     Kcount++;
                // }
                // console.log(Vcount, Acount, Rcount, Kcount);
                }

            }
        );
        });

        document.querySelectorAll('.yello-circle').forEach(yelloCircle => {
        yelloCircle.addEventListener('click', () => {
                selected = document.querySelector('.yello-input:checked');
                console.log(selected);
                const answer = selected.value;
        })});






        document.querySelectorAll('.nextButton').forEach(nextBtn => {
            nextBtn.addEventListener('click', () => {

                console.log(selected)
                console.log(Vcount, Acount, Rcount, Kcount);

            if (selected) {
                const answer = selected.value;
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
     
                qustionNumber=qustionNumber+1;           isAnswered = false;
                loadQustions();
                selected = null;
            } else {
                alert("Please select an answer before proceeding.");
            }
                });


                
            });



                
            };

        };


        document.querySelector('body').addEventListener('click', () => {
            console.log(qustionNumber);
        });