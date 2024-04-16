const containerList=document.getElementById("list");
const form=document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
})
let list=[]

const addItem=()=>{
    if(document.getElementById("text-area").value==''){
        alert("Please enter a value")
    }else{
        list.push(document.getElementById("text-area").value)
        console.log(list)
        renderList()
    }
}

const renderList=()=>{
    containerList.innerHTML=''
    list.map(item=>{
        containerList.innerHTML+=`
        <div class="card">
        <h2>${item}</h2>
        <button onclick="DeleteThis(${list.indexOf(item)})">X</button>
        </div>
`
    })
    document.getElementById("text-area").value=''
}

const DeleteThis=(id)=>{
    list.splice((id),1)
    renderList()
}