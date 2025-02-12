const actionBtn = document.getElementById("actionBtn");
const editDel = document.getElementById("edit-del");


document.addEventListener("click", (e) => {
    if(e.target === actionBtn) {
        editDel.classList.add("active")
    }
    else{
        editDel.classList.remove("active")
    }
})