function addItem() {
    let inputtext=document.getElementById("newItemText").value;
    let inputvalue=document.getElementById("newItemValue").value;
    let text=inputtext;
    inputtext="";
    let value=inputvalue;
    inputvalue="";
    let child=document.createElement("option");
    child.value=value;
    child.textContent=text;
    document.getElementById("menu").appendChild(child);
    document.getElementById("newItemText").value="";
    document.getElementById("newItemValue").value="";
}