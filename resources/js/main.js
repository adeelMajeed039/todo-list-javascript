//SVG icon Code 
var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';
document.getElementById("check").onclick = check;
document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value;
  if(value){
    addTodo(value);
  }
})

//add list on pressing enter on keypad
document.getElementById('item').addEventListener('keydown', function (e) {
  var value = this.value;
  if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
    addTodo(value);
  }
});
function addTodo(value){
  //call function to add list items and make text field empty
  addItemToList(value);
  document.getElementById('item').value = '';
}

function removeItem() {
  //parent node of item click is div and paren of div is li.
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  // var id = parent.id;      fazzol ma daala
  // var value = item.innerText;
  parent.removeChild(item);
}
function checkboxToShowHideTask(){
   var checked = document.getElementById('checkbox').value;
   console.log(checked);
  //  addItemTocompletedIncompleted();
 }

function addItemTocompletedIncompleted() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
  // var value = item.innerText;
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
  target.insertBefore(item, target.childNodes[0]);
  document.getElementById("completed").style.display = "none";

}
 
function check(){
  var value = document.getElementById("check").checked;
  if (value) {
    document.getElementById("completed").style.display = "block";
  } else {
    document.getElementById("completed").style.display = "none";
  }
}

function addItemToList(value, completed){
  var list = (completed)?document.getElementById('completed'):document.getElementById('todo');

  //on click create li and div with two buttons having classes add remove and comleted in it.
  var item = document.createElement('li');
  item.innerText = value;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var removelist = document.createElement('button');
  removelist.classList.add('remove');
  removelist.innerHTML = removeSVG;
  removelist.addEventListener('click',removeItem);


  var completedList = document.createElement('button');
  completedList.classList.add('complete');
  completedList.innerHTML = completeSVG;
  completedList.addEventListener('click',addItemTocompletedIncompleted);

  buttons.appendChild(removelist);
  buttons.appendChild(completedList);
  item.appendChild(buttons);
  list.insertBefore(item, list.childNodes[0]);
}
const searchBar = document.getElementById('search');
searchBar.addEventListener('keyup',function(e){
  // const value = e.target.value.toLowerCase();
  // // console.log(value);
  // const list = document.getElementById('todo');
  // console.log(list);
  // const listValue = list.innerText.toLocaleLowerCase();
  // console.log(listValue);
  // var listArray = Array.from(list);
  // console.log(listArray);
  var input = searchBar;
  var filter = input.value.toLowerCase();
  // console.log(filter);
  var ul = document.getElementById('todo');
  var li = ul.getElementsByTagName('li');
  // console.log(li[1].textContent.toLowerCase());
  for (i = 0; i < li.length; i++) {
    var a = li[i].textContent.toLowerCase();
    if (a.indexOf(filter)>-1){
      // console.log(a);
      li[i].style.display = '';
    }
    else {
      //         li[i].style.display = "none";
      //     }
  //     a = li[i].getElementsByTagName("a")[0];
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //         li[i].style.display = "";
  //     } else {
      li[i].style.display = "none";
  //     }
  }
}
})
  // forEach(function(lis){
  //   const listTitle = lis.firstElementChild;
  //   // console.log(listTitle);
  //   if (listTitle.listValue.indexOf(value)= -1){
  //     list.style.display = 'block';
  //   }
  //   else {
  //     list.style.display = 'none';
  //   }
  // })
  // if ()
  // for (var i = 0; i < list.length; i++){
  //   console.log(list[i]);
  // }
  // console.log(list.split()[0]);
  // Array.from(list).forEach(function(e){
    // const title = e.firstElementChild.textContent
  // })
  // if(value===list)







//Click on + icon/button
// document.getElementById('add').addEventListener('click', function() {
//   var value = document.getElementById('item').value;
//   if (value) {
//     addItem(value);
//   }
// });

// document.getElementById('item').addEventListener('keydown', function (e) {
//   var value = this.value;
//   if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
//     addItem(value);
//   }
// });

// function addItem (value) {
//   addItemToDOM(value);
//   document.getElementById('item').value = '';
// }


// function removeItem() {
//   var item = this.parentNode.parentNode;
//   var parent = item.parentNode;
//   var id = parent.id;
//   var value = item.innerText;
//   parent.removeChild(item);
// }

// function completeItem() {
//   var item = this.parentNode.parentNode;
//   var parent = item.parentNode;
//   var id = parent.id;
//   var value = item.innerText;
//   var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
//   parent.removeChild(item);
//   target.insertBefore(item, target.childNodes[0]);
// }

// // Adds a new item to the todo list
// function addItemToDOM(text, completed) {
//   var list = (completed) ? document.getElementById('completed'):document.getElementById('todo');

//   var item = document.createElement('li');
//   item.innerText = text;

//   var buttons = document.createElement('div');
//   buttons.classList.add('buttons');

//   var remove = document.createElement('button');
//   remove.classList.add('remove');
//   remove.innerHTML = removeSVG;

//   // Add click event for removing the item
//   remove.addEventListener('click', removeItem);

//   var complete = document.createElement('button');
//   complete.classList.add('complete');
//   complete.innerHTML = completeSVG;

//   // Add click event for completing the item
//   complete.addEventListener('click', completeItem);

//   buttons.appendChild(remove);
//   buttons.appendChild(complete);
//   item.appendChild(buttons);

//   list.insertBefore(item, list.childNodes[0]);
// }
