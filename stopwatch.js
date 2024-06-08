class Timer{

    constructor(){ 
      this.#displayLabelAndButton();
      this.#getInputedTime();
    }

    #displayLabelAndButton(){ 
         document.querySelector(".timer-button")
         .classList.add("timer-button-active")

         document.querySelector(".control-timer-container")
          .innerHTML = `<button class="timermode-start-button">START</button>`

    }
    
    #getInputedTime(){
      const timeInputedElem = document.querySelector(".stopwatch-container");
      timeInputedElem.addEventListener("click",()=>{
          document.addEventListener("keydown",(event)=>{
             this.#displayInputedTime(event.key);
          })
      })
    }

    #displayInputedTime(eventKey){
       let hoursElem = document.querySelector(".timer-hours");
       let minutesElem = document.querySelector(".timer-minutes");
       let secondsElem = document.querySelector(".timer-second");
    }

}

let times = new Timer();


