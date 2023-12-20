let input = document.getElementById("input1");
let sendButton = document.getElementById("sendButton");
let listInput = document.getElementById("listInput");

sendButton.addEventListener('click', function() {
    
});


sendButton.addEventListener("click" , function() {

  if (input.value !== "") {
   let ToDoItems = document.createElement("div");
   ToDoItems.className = "ToDoItems";
   ToDoItems.innerHTML = input.value;
   listInput.append(ToDoItems);
   
   if (ToDoItems) {
      let MarkButton = document.createElement("button");
   MarkButton.className = "MarkButton";
   checkMarkInput.append(MarkButton);

   if (MarkButton) {
      let checkMark = document.createElement("img");
      checkMark.setAttribute('src' , "../pictures/mark.png");
      checkMark.className = "checkMarkNonDisplay";
      checkMarkInput.append(checkMark);

      MarkButton.addEventListener("click" , function() {
         MarkButton.remove();
         checkMark.className = "checkMark";
         ToDoItems.style.color = "green";
      });
   }
   }
   
  } 

});













