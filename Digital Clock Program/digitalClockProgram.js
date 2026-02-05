
// let showColon = true;

function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);

    // //      COLON BLINKING
    // const colon = showColon ? ":" : " ";
    // showColon = !showColon;
  
    //       OR  WITH COLON BLINKING
    const colon = now.getSeconds() % 2 === 0 ? ":" : " ";

      // const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    const timeString = `${hours}${colon}${minutes}${colon}${seconds} ${meridiem}`;
    
    // document.getElementById(`clock`).textContent = timeString;
    clock.textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);