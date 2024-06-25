let button=document.getElementById('add')
let input=document.querySelector('.inputlist')
let icon=document.getElementById('delet')


let key="667ad39960a208ee1fdbff5a"

getall()
async function add()
{
    try{
        let body={
            title:input.value,
            apiKey:key
              }
    let respon= await fetch('https://todos.routemisr.com/api/v1/todos',{
        method:'POST',
        body:JSON.stringify(body),
        headers:{'Content-Type':'application/json'}

    })
    let data= await respon.json()
    getall()
    }
    catch(err)
    {
       console.log(err)
    }
}
 async function getall()
 {
   
    let respon= await fetch('https://todos.routemisr.com/api/v1/todos/667ad39960a208ee1fdbff5a')
    let data=await respon.json();
    display(data.todos)
    

 }

 function display(list)
 {
    let contaner=``;
    for(let i=0; i<list.length;i++)
        {
            contaner+=`<div class="d-flex justify-content-between container mt-4">
        <h5 class="d-inline"> <input type="checkbox" class="me-1">${list[i].title}</h5>
        <i class="fa-solid fa-trash" onclick="delet('${list[i]._id}')"></i>   </div>`
        }
        document.querySelector('.displa').innerHTML=contaner

 }
 async function delet(id){
    var body={
        todoId:id

    }
    var respon = await fetch('https://todos.routemisr.com/api/v1/todos',{
        method:'DELETE',
        body:JSON.stringify(body),
        headers:{'Content-Type':'application/json'}

    })
    let data= await respon.json()
    getall()

 }



button.addEventListener('click',function(){
    add()

})
