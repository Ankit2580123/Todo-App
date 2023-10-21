const inputBox=document.getElementById("inputbox");
const AddTaskButton=document.getElementById("AddTaskBtn");
const listItems=document.getElementById("list-container");



AddTaskButton.addEventListener('click', ()=>{
                    if(inputBox.value===""){
                                        alert("Please Enter Your Task!")
                    }
                    else{
                                        let list=document.createElement("li");
                                        list.innerText=inputBox.value;
                                        listItems.appendChild(list);

                                        //appending cross inside the list.
                                        let span=document.createElement("span");
                                        span.innerText='\u00d7';
                                        list.appendChild(span);
                    }
                    //clear the text after adding.
                    inputBox.value="";
                    saveData()
});

listItems.addEventListener('click',function(e){
                    if(e.target.tagName==="LI"){
                                        e.target.classList.toggle("checked");
                                        saveData()
                    }
                    else if(e.target.tagName==='SPAN'){
                                        e.target.parentElement.remove();
                                        saveData()
                    }
});

//save the data on local storage after refreshing the page..
function saveData(){
                    localStorage.setItem('Data',listItems.innerHTML);
}
function showTask(){
                    listItems.innerHTML=localStorage.getItem('Data');
}
showTask();