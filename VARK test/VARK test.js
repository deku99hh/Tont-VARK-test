// importing the qustions
let qustionHTML = '';
let qustionNumber = 0;
let isAnswered = false;

let Vcount = 0;
let Acount = 0;
let Rcount = 0;
let Kcount = 0;
let YourStyle;

let selected = null;



function loadQustions(){

    if (qustionNumber>10){
        qustionHTML = `
            <div class="QuestionBlook">
                <p class="cetered-gray-text">Test Completed</p>
                <p class="centered-H1">الاسلوب الامثل لك هو :${YourStyle}</p>

                
        <button class="chimestry-dropdown">الكيمياء</button>
        <div class="chimestry-dropdown-block">

            <button class="chimestry-dropdown2">
            العناصر الانتقالية<img src="icons/lock-locked-icon.png" alt="cuming soon" class="cuming-soon"> <span class="cuming-soon-text">coming soon</span>
            </button>
            <button class="chimestry-dropdown2">
            الكيمياء التحليلية<img src="icons/lock-locked-icon.png" alt="cuming soon" class="cuming-soon"> <span class="cuming-soon-text">coming soon</span>
            </button>
            <button class="chimestry-dropdown2">
            الاتزان الكيميائي<img src="icons/lock-locked-icon.png" alt="cuming soon" class="cuming-soon"> <span class="cuming-soon-text">coming soon</span>
            </button>
            <button class="chimestry-dropdown2">
            الكيمياء الكهربية</button>
            <div class="chimestry-dropdown-text">
            هخبلتاخبكلتاش نتايسبىت بنعالاليمن خهعلغشيقاتن

            </div>
            <button class="chimestry-dropdown2">
            الكيمياء العضوية<img src="icons/lock-locked-icon.png" alt="cuming soon" class="cuming-soon"> <span class="cuming-soon-text">coming soon</span>
            </button>


        </div>

        <button class="chimestry-dropdown">
            الفيزياء <img src="icons/lock-locked-icon.png" alt="cuming soon" class="cuming-soon"> <span class="cuming-soon-text">coming soon</span>
        </button>
        
        <button class="chimestry-dropdown">
            الاحياء <img src="icons/lock-locked-icon.png" alt="cuming soon" class="cuming-soon"> <span class="cuming-soon-text">coming soon</span>
        </button>
        <button class="chimestry-dropdown">
            الرياضيات<img src="icons/lock-locked-icon.png" alt="cuming soon" class="cuming-soon"> <span class="cuming-soon-text">coming soon</span>
        </button>
        <button class="chimestry-dropdown">
            اللغة العربية<img src="icons/lock-locked-icon.png" alt="cuming soon" class="cuming-soon"> <span class="cuming-soon-text">coming soon</span>
        </button>
        <button class="chimestry-dropdown">
            اللغة الانجليزية<img src="icons/lock-locked-icon.png" alt="cuming soon" class="cuming-soon"> <span class="cuming-soon-text">coming soon</span>
        </button>
        <button class="chimestry-dropdown">
            الجيولوجيا<img src="icons/lock-locked-icon.png" alt="cuming soon" class="cuming-soon"> <span class="cuming-soon-text">coming soon</span>
        </button>
        



            </div>
        `;

        document.querySelector('main').innerHTML= qustionHTML;



        const chimestryDropdownText = document.querySelector('.chimestry-dropdown-block');

        document.querySelector('.chimestry-dropdown').addEventListener('click', () => {
                if (chimestryDropdownText.style.display === 'none') {
                    chimestryDropdownText.style.display = 'block';
                } else {
                    chimestryDropdownText.style.display = 'none';
                }
            }
        );




        

    }
    else {
        qustionHTML = `        
        <div class="QuestionBlook">
                <p class="cetered-gray-text">Question ${qustionNumber + 1 } of 11</p>
                <p class="centered-H1">${VARKQuestions[qustionNumber].qustion}</p>
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
     
                qustionNumber=qustionNumber+1;
                isAnswered = false;
                loadQustions();
                selected = null;
            } else {
                alert("Please select an answer before proceeding.");
            }

            if(Vcount >= Acount){
                if(Vcount >= Rcount){
                    if(Vcount >= Kcount){
                        YourStyle = 'الاسلوب البصري';
                    }
                }
            }
            if(Acount >= Vcount){
                if(Acount >= Rcount){
                    if(Acount >= Kcount){
                        YourStyle = 'الاسلوب السمعي';
                    }
                }
            }
            if(Rcount >= Vcount){
                if(Rcount >= Acount){
                    if(Rcount >= Kcount){
                        YourStyle = 'الاسلوب القرائي/الكتابي';
                    }
                }
            }
            if(Kcount >= Vcount){
                if(Kcount >= Acount){
                    if(Kcount >= Rcount){
                        YourStyle = 'الاسلوب الحركي ';
                    }
                }
            }

                });


                
            });



                
            };

        };


        document.querySelector('body').addEventListener('click', () => {
            console.log(qustionNumber);
        });