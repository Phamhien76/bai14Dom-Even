

function add(){
    let iteminput=document.getElementById("item");
    let itemValue=iteminput.value;
    let DanhSachUl=document.getElementById("danhSach");
if(itemValue===""){
    iteminput.classList.add("yellow-background");
}else{
    iteminput.classList.remove("yellow-background");

    let newItem=document.createElement("li");
    newItem.textContent=itemValue;
    DanhSachUl.appendChild(newItem);
    iteminput.value="";

}
}