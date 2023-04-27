var list=document.getElementById('list');
let amount=document.getElementById('expense');
let description=document.getElementById('description');
let category=document.getElementById('category');
let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    let expense=document.createElement('li')
    expense.appendChild(document.createTextNode(amount.value+' Rs - '+description.value+' - '+category.value+'  '))
    // expense.setAttribute('id', amount.value)
    list.appendChild(expense)
    axios
    .post(`https://crudcrud.com/api/7e9a1fe6c9a249eabbf926af2b0b4153/expense/`,{
        "amount": amount.value,
        "description": description.value,
        "category": category.value
    })
    .then((res)=>{
        expense.setAttribute('id',res.data._id)
    })
    .catch(err => console.error(err));

    let ebutton=document.createElement('button')
    ebutton.className='btn btn-primary btn-sm'
    ebutton.appendChild(document.createTextNode('Edit Expense'))
    // <button type="button" class="btn btn-primary btn-sm">Small button</button>
    let dbutton=document.createElement('button')
    dbutton.className='btn btn-secondary btn-sm'
    dbutton.appendChild(document.createTextNode('Delete Expense'))
    
    expense.appendChild(dbutton)
    expense.appendChild(ebutton)
    list.append(document.createTextNode(' '))
    // let OBJ=JSON.stringify({'amount': amount.value,'description':description.value,'category':category.value})
    // localStorage.setItem(count,OBJ) 
    // console.log(expense);   
})

list.addEventListener('click', (e)=>{
    e.preventDefault()
    if(e.target.classList.contains('btn-secondary')){
        let parent=e.target.parentElement
        list.removeChild(parent)
        axios
        .delete(`https://crudcrud.com/api/7d0255157e2f476b9b58f1b425f7a29a/expense/${parent.id}`)
        .catch(err => console.error(err));
        // console.log(parent);
    }
    
})
list.addEventListener('click', (e)=>{
    e.preventDefault()
    if(e.target.classList.contains('btn-primary')){
        // console.log(e.target.parentElement);
        let parent=e.target.parentElement
        list.removeChild(parent)
        // axios
        // .delete(`https://crudcrud.com/api/7d0255157e2f476b9b58f1b425f7a29a/expense/`)
        // .catch(err => console.error(err));
    }
})
window.addEventListener('DOMContentLoaded',()=>{
    axios(`https://crudcrud.com/api/7e9a1fe6c9a249eabbf926af2b0b4153/expense/`)
    .then((val)=>{
        userID=val.data
        // console.log(val.data);
        for(i=0;i<val.data.length;i++){
            let expense=document.createElement('li')
            expense.appendChild(document.createTextNode(val.data[i].amount+' Rs - '+val.data[i].description+' - '+val.data[i].category+'  '))
            list.appendChild(expense)
            
            let ebutton=document.createElement('button')
            ebutton.className='btn btn-primary btn-sm'
            ebutton.appendChild(document.createTextNode('Edit Expense'))
            // <button type="button" class="btn btn-primary btn-sm">Small button</button>
            let dbutton=document.createElement('button')
            dbutton.className='btn btn-secondary btn-sm'
            dbutton.appendChild(document.createTextNode('Delete Expense'))
            
            expense.appendChild(dbutton)
            expense.appendChild(ebutton)
            list.append(document.createTextNode(' '))
        }
    })  
})
function userInfo(user){
    pass
}