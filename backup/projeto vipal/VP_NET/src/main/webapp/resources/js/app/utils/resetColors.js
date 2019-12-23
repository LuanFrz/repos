function resetColors() {
    document.getElementsByClassName('radioRed')[0].innerHTML = `<img class="alignIconCheck" src="" alt=""> <input type="radio" ng-model="vmcalendar.calendarCrud.color" value="red" name="color" id="redRadio">`;
  
    document.getElementsByClassName('radioBlue')[0].innerHTML = `<img class="alignIconCheck" src="" alt=""> <input type="radio" ng-model="vmcalendar.calendarCrud.color" value="blue" name="color" id="blueRadio">`;
  
    document.getElementsByClassName('radioGreen')[0].innerHTML = `<img class="alignIconCheck" src="" alt=""> <input type="radio" ng-model="vmcalendar.calendarCrud.color" value="green" name="color" id="greenRadio">`;
  
    document.getElementsByClassName('radioPurple')[0].innerHTML = `<img class="alignIconCheck" src="" alt=""> <input type="radio" ng-model="vmcalendar.calendarCrud.color" value="purple" name="color" id="purpleRadio">`;
  
    document.getElementsByClassName('radioYellow')[0].innerHTML = `<img class="alignIconCheck" src="" alt=""> <input type="radio" ng-model="vmcalendar.calendarCrud.color" value="yellow" name="color" id="yellowRadio">`;
  
  };
  