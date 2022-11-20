let currentHour = parseInt(dayjs().format("k"));

//loops through the timeblocks and adds color based on time
console.log(`current hour is: ${currentHour}`);

for (var i = 0; i < $(".time-block").length; i++) {
  let currentTimeBlock = $(".time-block")[i];

  if (parseInt($(currentTimeBlock).attr("id").slice(5)) < currentHour) {
    $(currentTimeBlock).children(".description").addClass("past");
    //console.log("past");
  }
  else if (parseInt($(currentTimeBlock).attr("id").slice(5)) > currentHour) 
  {
    $(currentTimeBlock).children(".description").addClass("future");
  } 
  else 
  {
    $(currentTimeBlock).children(".description").addClass("present");
  }
}

let headerTimeDisplay = $("#currentDay").html(dayjs().format("dddd, MMMM M"));

//after html function
$(function () {
  // TODO: Add a listener for click events on the save button.

  // Event listener for every save button
  $(".saveBtn").on("click", function() {
    let element = $(this);
//looks for storage item and makes it if it is not there
    let userInput = JSON.parse(localStorage.getItem("userInput")||"{}");

    userInput[element.parent().attr("id")] = $(element.siblings(".description")).val();
//puts input into localStorage
    localStorage.setItem("userInput", JSON.stringify(userInput));
  });
 

  for (const [key, value] of Object.entries(JSON.parse(localStorage.getItem("userInput")))) {

    $(`#${key}`).children(".description").text(value);

 
  }
});