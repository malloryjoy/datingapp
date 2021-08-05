(function(){
    // Functions
    function buildQuiz(){
      //confirms that the next question button is disabled by default
      document.getElementById("next").disabled = true;
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer, add a radio button that enables the next button when selected (using the onClick function)
          for(letter in currentQuestion.answers){
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}" onClick="document.getElementById('next').disabled = false;"> 
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  {
      // Combine output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
}
    //Display results, including possible matches and friends 
  function showResults() {
  var returnType = '';
  var returnSoulmates = '';
  var returnBFF = '';
  const answerContainers = 
                  quizContainer.querySelectorAll('.answers');
                    
  //keep track of user answers
  let personalityType = [];
  //for each question...
  myQuestions.forEach(
   (currentQuestion, questionNumber) =>
  {
   //find selected answer 
  const answerContainer = answerContainers[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    console.log('userAnswer: ' + userAnswer);
  
  
  
  
  
  //assign each answer a number, and save number to "add" later 
                if(userAnswer === currentQuestion.leslieAnswer){
                        personalityType.push(1);
                        } else if (userAnswer ===currentQuestion.ronAnswer){
                              personalityType.push(2);
                          } else if (userAnswer === currentQuestion.aprilAnswer){
                              personalityType.push(3);   
                          } else if (userAnswer === currentQuestion.andyAnswer) {
                              personalityType.push(4);
                          } else if (userAnswer === currentQuestion.benAnswer) {
                              personalityType.push(5);
                          } else if (userAnswer === currentQuestion.donnaAnswer) {
                              personalityType.push(6);
                          } else {
                              personalityType.push(7);
                          } 
                      }
                  )
                //using a MODE equation, calculate the frequency of each number/corresponding letter
                console.log(personalityType);
                  var modeFunc = function mode(personalityType) {
                    var numMapping = {};
                    var greatestFreq = 0;
                    var mode;
                    personalityType.forEach(function findMode(number) {
                        numMapping[number] = (numMapping[number] || 0) + 1;
                
                        if (greatestFreq < numMapping[number]) {
                            greatestFreq = numMapping[number];
                            mode = number;
                        }
                    });
                    return parseInt(mode);
                }  
                  var modeOpp = modeFunc(personalityType);
                  console.log(modeOpp);

      //Returns/displays quiz results 
      if (modeOpp === 1){
          returnType= 'You are an excellent leader! Your friends would call you ambitious and optimistic. Your soulmate will love your energy and confidence. They know you will go far, and they will always be there to cheer you along the way! Your perfect person will help you keep your eye on the prize without letting you fly too close to the sun.';
          returnSoulmates='Michael Hitchcock from "Brooklyn Nine Nine"<br /> Norm Scully from “Brooklyn Nine Nine” <br />Abed Nadir from “Community” <br />Jeff Winger from “Community” <br />Tracey from “How I Met Your Mother” <br />Chidi Anagonye from “The Good Place” <br />Janet from “The Good Place” <br />Winston Bishop from “New Girl” <br />Jim Halpert from “The Office” <br />Ben Wyatt from “Parks and Recreation”';
          returnBFF='Amy Santiago from “Brooklyn Nine Nine”<br />Charles Boyle from “Brooklyn Nine Nine” <br />Annie Edison from “Community” <br />Craig Pelton from “Community” <br />Michael from “The Good Place”<br />Ernie, AKA Coach, from “New Girl” <br />Leslie Knope from “Parks and Recreation”';
      } else if (modeOpp === 2) {
        returnType= 'If you were stranded in the woods, you would either find civilization within three days, or build yourself a comfortable shelter and never return. You are quick to trust your gut, and find your instincts are the best compass you have. You can be a bit stubborn, but you are strong enough to admit when you need help… on the rare occasions that it happens! Your soulmate will be grateful for your independence, but will also be happy to encourage you to be a bit more flexible. You have a lot to learn from each other!';
        returnSoulmates='Amy Santiago from “Brooklyn Nine Nine”<br />Charles Boyle from “Brooklyn Nine Nine”<br />Annie Edison from “Community” <br />Craig Pelton from “Community”<br />Michael from “The Good Place” <br />Ernie AKA Coach, from “New Girl” <br />Leslie Knope from “Parks and Recreation”';
        returnBFF='Rosa Diaz from “Brooklyn Nine Nine” <br />Britta Perry from “Community” <br />Nick Miller from “New Girl”<br />Angela Martin from “The Office”<br />Stanley Hudson from “The Office” <br />Ron Swanson from “Parks and Recreation”';
      } else if (modeOpp === 3) {
        returnType= 'Let me guess: you’re the friend who would literally drive the getaway car. In fact, you’re the friend who SUGGESTED the B and E in the first place! Some might say you’re intense, but really, you’re just all-in when you know what you want. Your soulmate won’t be intimidated by your independence, and will bring some light to your dark side!';
        returnSoulmates='Jake Peralta from “Brooklyn Nine Nine”<br />Terry Jeffords from “Brooklyn Nine Nine”<br />Shirley Bennett from “Community”<br />Troy Barnes from “Community”<br />Eleanor Shellstrop from “The Good Place”<br />Jason Mendoza from “The Good Place”<br />Lily Aldrin from “How I Met Your Mother”<br />Marshall Ericksen from “How I Met Your Mother”<br />Ted Moseby from “How I Met Your Mother”<br />Jessica Day from “New Girl”<br /> Erin Hannon from “The Office”<br />Kevin Malone from "The Office"<br />Michael Scott from “The Office”<br />Pam Beesly from “The Office”<br />Andy Dwyer from "Parks and Recreation"';
        returnBFF='Raymond Holt from “Brooklyn Nine Nine”<br />Robin Scherbatsky from “How I Met Your Mother”<br />Darryl Philbin from “The Office”<br /> Dwight Schrute from “The Office”<br />April Ludgate from "Parks and Recreation"';
      } else if (modeOpp === 4) {
        returnType= 'Thank you for being a friend! The ones closest to you think you’re the most loving person they know. You can be goofy at times, and you’re often the most fun person in the room. More than that, you’re open-hearted. Your soulmate will match your wild side, but will reel you in if you get too crazy. ';
        returnSoulmates='Raymond Holt from “Brooklyn Nine Nine”<br />Robin Scherbatsky from “How I Met Your Mother”<br />Darryl Philbin from “The Office”<br /> Dwight Schrute from “The Office”<br />April Ludgate from "Parks and Recreation"';
        returnBFF='Jake Peralta from “Brooklyn Nine Nine”<br />Terry Jeffords from “Brooklyn Nine Nine”<br />Shirley Bennett from “Community”<br />Troy Barnes from “Community” <br />Eleanor Shellstrop from "The Good Place"<br />Jason Mendoza from "The Good Place"<br />Lily Aldrin from “How I Met Your Mother”<br />Marshall Ericksen from “How I Met Your Mother”<br />Ted Moseby from “How I Met Your Mother”<br />Jessica Day from “New Girl”<br />Erin Hannon from "The Office"<br />Kevin Malone from "The Office"<br />Michael Scott from "The Office"<br />Pam Beesly from "The Office"<br />Andy Dwyer from "Parks and Recreation"';
      } else if (modeOpp === 5) {
          returnType= 'You are level-headed, tactical, and cool under pressure. More often than not, you are the rock in the relationship! You are consistent and loyal, and your partner’s best friend. You might be the smarter person of the two of you, but your partner is not too far behind. Your soulmate will respect and appreciate your sensibility, but also encourage you to dream big!';
          returnSoulmates='Amy Santiago from “Brooklyn Nine Nine”<br /> Charles Boyle from “Brooklyn Nine Nine”<br /> Annie Edison from “Community”<br /> Craig Pelton from “Community”<br /> Michael from “The Good Place”<br /> Ernie, AKA Coach, from “New Girl”<br /> Leslie Knope from “Parks and Recreation”';
          returnBFF='Michael Hitchcock from "Brooklyn Nine Nine"<br /> Norm Scully from “Brooklyn Nine Nine” <br />Abed Nadir from “Community” <br />Jeff Winger from “Community” <br />Tracey from “How I Met Your Mother” <br />Chidi Anagonye from “The Good Place” <br />Janet from “The Good Place” <br />Winston Bishop from “New Girl” <br />Jim Halpert from “The Office” <br />Ben Wyatt from “Parks and Recreation”';
      } else if (modeOpp === 6) {
        returnType= 'Chiropractors love you. Wanna know why? Because when you walk into a room, everyone immediately turns to see you. You ignite a room with your confidence. You can break hearts with a single look. You are the DEFINITION of a catch. For that reason, you have high standards! Your partner will be just as cool, without taking away your spotlight. Your soulmate won’t be intimidated by the fact that you are so alluring, and will find the perfect balance of worshipping you without putting you on a pedestal. You are their better half, and they know it.';
        returnSoulmates='Gina Linetti from “Brooklyn Nine Nine”<br />Tahani Al Jamil from "The Good Place"<br />Schmidt from “New Girl”<br />Andy Bernard from "The Office"<br />Kelly Kapoor from "The Office"<br />Oscar Martinez from "The Office"<br />Ryan Howard from "The Office"<br />Tom Haverford from "Parks and Recreation"';
        returnBFF='Rosa Diaz from “Brooklyn Nine Nine”<br />Ben Chang from "Community" <br />Pierce Hawthorne from "Community" <br />Barney Stinson from “How I Met Your Mother”<br />Cece Parikh from “New Girl”<br />Creed Bratton from "The Office"<br />Meredith Palmer from "The Office"<br />Phyllis Lapin-Vance from "The Office"<br />Donna Meagle from "Parks and Recreation"';
      } else if(modeOpp === 7) {
        returnType= 'How does it feel to be the main character? The party don’t start ‘till you walk in! You march to the beat of your own drum, and without a doubt, that beat is a BANGER. You are creative, ambitious, and fun. Your soulmate should match your taste for the fun and the fabulous, but also appreciate just spending time alone with you. They will be your equal, and together, the world isn’t even READY for what you’ve got in store! ';
        returnSoulmates='Rosa Diaz from “Brooklyn Nine Nine”<br />Ben Chang from "Community" <br />Pierce Hawthorne from "Community" <br />Barney Stinson from “How I Met Your Mother”<br />Cece Parikh from “New Girl”<br />Creed Bratton from "The Office"<br />Meredith Palmer from "The Office"<br />Phyllis Lapin-Vance from "The Office"<br />Donna Meagle from "Parks and Recreation"';
        returnBFF='Gina Linetti from “Brooklyn Nine Nine”<br />Tahani Al Jamil from "The Good Place"<br />Schmidt from “New Girl”<br />Andy Bernard from "The Office"<br />Kelly Kapoor from "The Office"<br />Oscar Martinez from "The Office"<br />Ryan Howard from "The Office"<br />Tom Haverford from "Parks and Recreation"';
      }else {
        returnType='You did not answer all of the questions, so we do not know.';
        returnSoulmates='You did not answer all of the questions, so we do not know.';
        returnBFF='You did not answer all of the questions, so we do not know.'
      }
    console.log('About You:<br />${returnType}<br /><br />Your Matches:<br />${returnSoulmates}<br /><br />Looking for a new best friend? These characters have similar traits to yours! <br />${returnBFF}');
    //return returnResult;
    quizContainer.style.display ='none'; //hides quiz on results page
    previousButton.style.display='none'; //hides nav button on results page
    submitButton.style.display='none'; //hides submit button on results page
    resultsContainer.innerHTML = `<strong>About You:</strong><br />${returnType}<br /><br /><strong>Your Matches:</strong><br />${returnSoulmates}<br /><br /><strong>Looking for a new best friend? These characters have similar traits to yours! </strong><br />${returnBFF}`; //framework for results display
    redoButton.style.display = 'inline-block'; //layout for retake quiz option display
  }

  //displays each question in a slideshow format
  function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
        redoButton.style.display = 'none';
      } //lines 150-152 declare that slide one, with the first question, does not offer a chance for the user to go back to a nonexistent previous question or retake a quiz they haven't started 
      else{
        previousButton.style.display = 'inline-block';
        redoButton.style.display = 'none'; 
      } //lines 154 - 156 declare that the "retake" option remains invisible, and that each slide with a question following question 1 offers the user a chance to go back to the previous question and change their answer
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        redoButton.style.display = 'none';
        submitButton.style.display = 'inline-block'; 
      } //lines 158-161 declare that when the user is on the last question, the "next" button and "redo" button are not available. The user must press submit to see their results! 
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      } //lines 163 - 165 declare that when the quiz is in process, the next button is availible throughout, but the submit button is not
  }
  
   function showNextSlide() {
      showSlide(currentSlide + 1);
      //on the next slide, the "next" button gets disabled 
      document.getElementById("next").disabled = true;
      
    }
 
   function showPreviousSlide() {
      showSlide(currentSlide - 1);
      //on the previous slide, the disable feature gets turned off 
      document.getElementById("next").disabled = false;
    }

    //if the user wants to take the quiz again, this reloads the quiz from the beginning 
    function reloadQuiz() {
        window.location.reload();
    }
  
  
  const quizContainer = document.getElementById('quiz'); //implements the quiz to begin in the HTML document with the id of quiz
  const resultsContainer = document.getElementById('results'); //displays the results when the quiz is complete
  const submitButton = document.getElementById('submit'); //submits the quiz when the quiz is complete/user presses submit 
  const redoButton = document.getElementById('reload'); //reloads the quiz when the user hits the take quiz again button 
  
  //quiz questions, declaring which answer is associated with the character answer, to be used when calculating the character result
  const myQuestions = [
      {
          question: "What should your partner wear on a first date?",
          answers: {
              a:"Think casual, but like… two steps above that. Be yourself, but slightly better.",
              b:"A tee shirt and jeans.",
              c:"I genuinely don’t care, just show up with a good attitude.",  
              d:"Something that highlights their best features. It IS possible to highlight shoulders, I\’ve seen it done, I swear!",
              e:"Whatever makes them feel confident.",
              f:"You should be dressed to the utmost on our first date. I\’m a busy person, so impress me!",
              g:"Something trendy. I like knowing that when we go out, we\’ll always be the best dressed couple there.",
          },
      leslieAnswer: "a",
      ronAnswer: "b",
      aprilAnswer: "c",
      andyAnswer: "d",
      benAnswer: "e",
      donnaAnswer:"f",
      tomAnswer:"g"
      
      },
      {
          question: "What is your ideal first date?",
          answers: {
              a: "The Museum of Natural History",
              b: "A hike. Picnic at the top preferred!",
              c:"Concert for either my favorite or their favorite artist.",  
              d: "Amusement park",
              e: "Coffee shop",
              f: "Something expensive and romantic!",
              g: "The new molecular gastronomy restaurant",
          },
          leslieAnswer: "a",
      ronAnswer: "b",
      aprilAnswer: "c",
      andyAnswer: "d",
      benAnswer: "e",
      donnaAnswer:"f",
      tomAnswer:"g"
      
      },
      {
          question: "Good news! You’re going on vacation… in the continental US. Where do you wanna go?",
          answers: {
              a: "Washington, DC",
              b: "Grand Canyon",
              c: "Lake Tahoe",  
              d: "Las Vegas",
              e: "Vermont seems nice!",
              f: "Miami",
              g: "NYC",
          },
          leslieAnswer: "a",
      ronAnswer: "b",
      aprilAnswer: "c",
      andyAnswer: "d",
      benAnswer: "e",
      donnaAnswer:"f",
      tomAnswer:"g"
      
      },
      {
          question: "How would you best describe yourself?",
          answers: {
              a: "Optimistic",
              b: "Independent",
              c: "Loyal",  
              d: "Loving",
              e: "Intellectual",
              f: "Mysterious",
              g: "Iconic",
          },
          leslieAnswer: "a",
      ronAnswer: "b",
      aprilAnswer: "c",
      andyAnswer: "d",
      benAnswer: "e",
      donnaAnswer:"f",
      tomAnswer:"g"
      
      },
      {
          question: "Which of those words should best describe your partner?",
          answers: {
              a: "Optimistic",
              b: "Independent",
              c: "Loyal",  
              d: "Loving",
              e: "Intellectual",
              f: "Mysterious",
              g: "Iconic",
          },
          leslieAnswer: "a",
      ronAnswer: "b",
      aprilAnswer: "c",
      andyAnswer: "d",
      benAnswer: "e",
      donnaAnswer:"f",
      tomAnswer:"g"
      
      },
      {
          question: "Thoughts on kids?",
          answers: {
              a: "They\'re great! I would like to have some.",
              b: "I am mostly indifferent. I would not mind having a few, but it\'s not something I would consider a deal-breaker if the other person doesn\'t want them.",
              c: "I\'d rather have five dogs than five kids.",  
              d: "Heck yeah! At least three. ",
              e: "It\'s in my five year plan, but it\'s like... year five. And I\'m on year one right now.",
              f: "I\'m more of the fun aunt/uncle that brings back souvenirs and lets you have a sip of beer on your sixteenth birthday.",
              g: "Maybe someday!",
          },
          leslieAnswer: "a",
      ronAnswer: "b",
      aprilAnswer: "c",
      andyAnswer: "d",
      benAnswer: "e",
      donnaAnswer:"f",
      tomAnswer:"g"
      
      },
      {
          question: "Snow has blocked all the roads! What are you and your soulmate doing on a free winter day?",
          answers: {
              a: "Ice skating with hot cocoa afterwards.",
              b: "Keeping warm. \'Nuff said.",
              c: "Snuggling with a blanket and a scary movie.",  
              d: "Snowball fight!",
              e: "We have three 1000+ jigsaw puzzles. Also, I\'m really good at 'Risk'.",
              f: "Skiing, then a soak in my hot tub. Chili break optional but encouraged.",
              g: "Romantic winter photoshoot. It never snows and I need evidence of how great my winter jacket looks on me.",
          },
          leslieAnswer: "a",
      ronAnswer: "b",
      aprilAnswer: "c",
      andyAnswer: "d",
      benAnswer: "e",
      donnaAnswer:"f",
      tomAnswer:"g"
      
      },
      {
          question: "You\'ve been dating for two years, and it\'s New Years Eve. What are your plans?",
          answers: {
              a: "Casual get together with friends. Snacks, craft project for NYE resolutions, and plenty of champagne!",
              b: "Going to bed at a reasonable hour.",
              c: "If my partner wants to do something fun we can, but ideally we\'re home by 11:30 so we can countdown just us.",  
              d: "I\'m going out of this year the same way I came into it: blackout drunk.",
              e: "I have a ring in my back pocket, so my plan is... hoping they say yes!",
              f: "We have invitations to the hottest NYE party in town.",
              g: "We\'re HOSTING the hottest NYE party in town!",
          },
          leslieAnswer: "a",
      ronAnswer: "b",
      aprilAnswer: "c",
      andyAnswer: "d",
      benAnswer: "e",
      donnaAnswer:"f",
      tomAnswer:"g"
      
      },
      
      
      ];
  
  // Kick things off
    buildQuiz();
  
    function toggleNextButton(){
      document.getElementById("next").disabled = false;
    }

    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    const choices = document.querySelectorAll("input[type=radio]");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    redoButton.addEventListener("click", reloadQuiz);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    

  })();

