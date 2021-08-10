let add_btn=document.getElementById("save");
let add_text=document.getElementById("text");
let noteBox=document.getElementById("notes");
let search=document.getElementById("search");
showNote();
add_btn.addEventListener("click",e=>{
let notes=localStorage.getItem("notes");
if (notes==null || notes=="") {
noteObj=[]
}
else {
noteObj=JSON.parse(notes);
}
if((add_text.value).trim()!=""){
noteObj.push(add_text.value);
localStorage.setItem("notes",JSON.stringify(noteObj));
showNote();
}
})
function showNote(){
let notes=localStorage.getItem("notes");
if (notes==null || notes=="") {
noteObj=[]
}
else {
noteObj=JSON.parse(notes);
}
let code="";
noteObj.forEach((element,index)=>{
code+=`
<div class="card">
<h3>Note ${index+1}</h3>
<p class="text">${element}</p>
<button id=${index} class="btns" onclick="deleteNote(this.id)">Delete</button>
</div>`;
});
if(noteObj.length!=0){
noteBox.innerHTML=code;
}else{
noteBox.innerHTML="Nothing in notes ,add notes using add notes section";
}
add_text.value="";
}
function deleteNote(id){
let notes=localStorage.getItem("notes");
if (notes==null || notes=="") {
noteObj=[]
}
else {
noteObj=JSON.parse(notes);
}
noteObj.splice(id,1);
localStorage.setItem("notes",JSON.stringify(noteObj));
showNote();
}
search.addEventListener("input",e=>{
let input=((search.value).trim()).toLowerCase();
let notes=document.getElementsByClassName("card");
Array.from(notes).forEach((element)=>{
let noteTxt=(element.getElementsByTagName("p")[0].innerText).toLowerCase();
if(noteTxt.includes(input)){
element.style.display="block";
}
else{
element.style.display="none";
}
});
})