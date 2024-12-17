
function Add()
{
     var text = document.getElementById("input-data").value;
     if(text==="")
     {
        alert("Please enter the to-dolist item");
     }
     else
     {


    let newList=document.createElement('li');
    let List=document.getElementById("list");
    List.appendChild(newList);
     newList.textContent=`${text}`;
     remove(newList)
     }
     function remove(newList)
     {
        const btn=document.createElement('button');
        // btn.textContent='Remove';
        btn.classList.add('delete');
     

        btn.textContent="Delete";
        newList.appendChild(btn);
      
        btn.onclick=function()
        {
            newList.remove()
            }
        
     }

    



}
