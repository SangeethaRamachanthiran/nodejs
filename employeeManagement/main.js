let prompt = require("prompt-sync")();
let timeEntries = require("./timeEntries");
timeSheetManagement();
function timeSheetManagement(){
      let userNeed = prompt("To add time entry, type 'ADD' or To list the time entries, type 'SHOW' or To delete your time entry, type 'DELETE' or To update your task name, type 'UPDATE'");
      switch(userNeed){
        case 'ADD':
            timeEntries.add();
            break;
        case 'SHOW':
            timeEntries.list();
            break;
        case 'DELETE':
            timeEntries.delete();
            break;
        case 'UPDATE':
            timeEntries.update();
            break;
        default:
          console.log("No method like this");
          timeSheetManagement();
      }
    }