let todo = [];

let req = prompt("Please enter your request");

while (true) {
  if (req == "quit") {
    alert("Exit from the app");
    break;
  }
  if (req == "list") {
    console.log("--------------------------------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("--------------------------------------");
  } else if (req == "add") {
    let task = prompt("Please enter the task you want to add");
    todo.push(task);
    alert("Your task is added successfully...");
  } else if (req == "delete") {
    let idx = prompt("Please Enter the task index");
    todo.splice(idx, 1);
    alert("Your task is deleted successfully...");
  } else {
    alert("You enter the invalid request!!!! Please enter the valid request");
  }
  req = prompt("Please enter your next request");
}
