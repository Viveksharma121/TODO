window.addEventListener('load',()=>{
    const form=document.querySelector("#form")
    const input=document.getElementById("inputtext")
    const list =document.getElementById("todolist")
    const taskdabba=document.getElementById("tasks")
    
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        if (input.value) {
            const taskdabba1=document.createElement("div")
            taskdabba1.classList.add("task")
            const taskcontentdabba=document.createElement("div")
            taskcontentdabba.classList.add("content")
            const taskinput=document.createElement("input")
            taskinput.classList.add("taskinput")
            taskinput.value=input.value
            taskinput.setAttribute("readonly" , "readonly")
            input.value=""
            // console.log(taskinput.value);
            taskcontentdabba.appendChild(taskinput)
            taskdabba1.appendChild(taskcontentdabba)
            taskdabba.appendChild(taskdabba1)
       
           // edit btn
            const editbtn=document.createElement("button")
            editbtn.classList.add("editbtn")
            editbtn.innerHTML="Edit"
            taskcontentdabba.appendChild(editbtn)
            taskdabba1.appendChild(taskcontentdabba)
            taskdabba.appendChild(taskdabba1)
            //Delete btn
            const Deletebtn=document.createElement("button")
            Deletebtn.classList.add("delbtn")
            Deletebtn.innerHTML="Delete"
            // taskdabba1.appendChild(editbtn)
            taskcontentdabba.appendChild(Deletebtn)
            taskdabba1.appendChild(taskcontentdabba)
            taskdabba.appendChild(taskdabba1)
            editbtn.addEventListener("click", ()=>{
                if (editbtn.innerHTML=="Edit") {
                    taskinput.removeAttribute("readonly")
                    taskinput.focus()
                    editbtn.innerHTML="save"
                } 
                else{
                    editbtn.innerHTML="Edit"
                    taskinput.setAttribute("readonly" , "readonly")
                
                }
            })
            Deletebtn.addEventListener('click',()=>{
                taskdabba.removeChild(taskdabba1)
            })
        }
        else{
            alert("Please enter some value")
        }
       
    })
    

})