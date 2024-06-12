class Timer {
  time = "";
  clickedTimes = 0;
  timeNumber=  0;

  constructor() {
    this.#displayLabelAndButton();
    this.#getInputedTime();
  }

  #displayLabelAndButton() {
    document
      .querySelector(".timer-button")
      .classList.add("timer-button-active");

    document.querySelector(
      ".control-timer-container"
    ).innerHTML = `<button class="timermode-start-button">START</button>`;

    document.querySelector(".timermode-start-button").
    addEventListener("click",()=>{
       this.#startTimer();
    });

  }

  #getInputedTime() {
    let clicked = false;

    const timeInputedElem = document.querySelector(".stopwatch-container");
    timeInputedElem.addEventListener("click", () => {
      if (this.clickedTimes == 0) {
        document.addEventListener("keydown", (event) => {
          this.#displayInputedTime(event.key);
        });
        this.clickedTimes += 1;
      }
    });
  }

  #displayInputedTime(eventKey) {
    let hoursElem = document.querySelector(".timer-hours");
    let minutesElem = document.querySelector(".timer-minutes");
    let secondsElem = document.querySelector(".timer-seconds");

    this.time += eventKey;

    if (this.time.length == 1) {
      secondsElem.innerHTML = this.time + "s";
    }
    if (this.time.length == 2) {
      secondsElem.innerHTML = this.time.substring(0, 1) + this.time.substring(1, 2)+ "s";
    }
    if (this.time.length == 3) {
      minutesElem.innerHTML = this.time.substring(0, 1) +"m";
      secondsElem.innerHTML = this.time.substring(1, 2) + this.time.substring(2,3) + "s";
    }
    if (this.time.length == 4) {
      minutesElem.innerHTML = this.time.substring(0, 1) + this.time.substring(1, 2) + "m";
      secondsElem.innerHTML = this.time.substring(2, 3) + this.time.substring(3, 4) + "s"
    }
     if (this.time.length == 5) {
      hoursElem.innerHTML = this.time.substring(0 , 1) + "h";
      minutesElem.innerHTML = this.time.substring(1, 2) + this.time.substring(2, 3) + "m";
      secondsElem.innerHTML = this.time.substring(3, 4) + this.time.substring(4, 5) +"s";
    }
    if (this.time.length == 6) {
      hoursElem.innerHTML = this.time.substring(0 , 1) + this.time.substring(1 , 2) + "h";
      minutesElem.innerHTML = this.time.substring(2, 3) + this.time.substring(3, 4) + "m";
      secondsElem.innerHTML = this.time.substring(4, 5) + this.time.substring(5,6) + "s";
    }
    
    //add 0 if its only 1 digit
    this.#addZerotoDigit(secondsElem,minutesElem,hoursElem)

    //exract the number of the stopwatch
    this.timeNumber = hoursElem.innerHTML + minutesElem.innerHTML + secondsElem.innerHTML;
    this.timeNumber = this.timeNumber.replace(/\D/g, "");
    this.timeNumber = (Number(this.timeNumber.substring(0,2))*60*60) + (Number(this.timeNumber.substring(2,4)) *60) + (Number(this.timeNumber.substring(4)));
    console.log(this.timeNumber)
  
  }


  #addZerotoDigit(secondsElem,minutesElem,hoursElem){
    if(secondsElem.innerHTML.length === 2 && isNaN(secondsElem.innerHTML)){
      secondsElem.innerHTML = '0' + secondsElem.innerHTML;
    } 
    else if(minutesElem.innerHTML.length === 2 && isNaN(minutesElem.innerHTML)){
      minutesElem.innerHTML = '0' + minutesElem.innerHTML;
    }
    else if(hoursElem.innerHTML.length === 2 && isNaN(hoursElem.innerHTML)){
      hoursElem.innerHTML = '0' + hoursElem.innerHTML;
    }
  }

   #startTimer(){
    let temp = 0;
    let hoursElem = document.querySelector(".timer-hours");
    let minutesElem = document.querySelector(".timer-minutes");
    let secondsElem = document.querySelector(".timer-seconds");
    setInterval(()=>{

      this.timeNumber = this.timeNumber - 1;
      hoursElem.innerHTML = Math.floor(this.timeNumber / 3600) + "h";
      temp = this.timeNumber % 3600;
      minutesElem.innerHTML = Math.floor(temp / 60) + "m";
      temp = temp % 60;
      secondsElem.innerHTML = temp + "s";
  
      
    },1000)
  }
}

let times = new Timer();
