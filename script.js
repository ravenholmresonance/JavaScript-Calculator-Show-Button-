let deposit=document.getElementById("deposit")
deposit.oninput=calculateDeposit;

let time=document.getElementById("time")
time.innerHtml="<option>1</option>"
time.onchange=calculateDeposit;

let rate=document.getElementById("rate")
rate.oninput=calculateDeposit;

function calculateDeposit(){
    
    // console.log(deposit.value)
    let sum1=deposit.value;
    let was=document.getElementById("sum1")
    was.innerHTML=sum1
    let will=document.getElementById("sum2")
    let sum2=Math.round(sum1*(1+rate.value*0.01)**(time.value/12))
    will.innerHTML=sum2
    document.getElementById("before_height").style.height=(sum2/sum1)*120+"px";
}
calculateDeposit();

const posts=document.querySelector(".post-container");
const btn=document.querySelector("button");

//  const title=document.querySelector(".post-container h3");
//  const body =document.querySelector(".post-container span");

btn.onclick=showPosts;

function showPosts(){
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response)
        return response.json()})
      .then(data => {
        for (d of data)
        addPost(d.title,d.body)}) 
}
     
function addPost(t,b){
  const title=document.createElement('h3')
  const body = document.createElement('span')
  const postItem=document.createElement('p')
  title.innerHTML=t
  body.innerHTML=b
  postItem.append(title,body)
  posts.append(postItem)
}      