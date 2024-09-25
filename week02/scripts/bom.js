const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function() {

    if (input.value.trim() !== "") {
        const chapterTitle = input.value;
        input.value = "";

        const li = document.createElement("li");
        li.textContent = chapterTitle;
        const liButton = document.createElement("button");
        liButton.textContent = "❌";

        li.appendChild(liButton);
        list.appendChild(li);

        liButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus()
        })
    }else{
        input.focus();
    }

    
});

