 function checkSpeed(speed) {
     let message = 'Ok';
     let point = 0;
     let startSpeed = 70;
     let i = 5;
     if (speed < startSpeed + i) {
         return message;
     } else {
         point += Math.floor((speed - startSpeed) / 5);
         speed += i;
         if (point < 12) {
             message = 'Point: ' + point;
             return message;
         } else {
             message = 'License suspended';
             return message;
         }
     }
 }
 var check = checkSpeed(75);
 console.log(check);