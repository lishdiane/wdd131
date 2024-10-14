const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function() {

    if (input.value.trim() !== "") {
        const chapterTitle = input.value;
        input.value = "";

        displayList(chapterTitle);
        chaptersArray.push(chapterTitle);

        setChapterList()
        input.focus();   
    }
});

/*localStorage */

const chaptersArray = localStorage.getItem(getChapterList) || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement("li");
    li.textContent = item;

    const liButton = document.createElement("button");
    liButton.textContent = "❌";
    liButton.classList.add("delete");

    li.appendChild(liButton);
    list.appendChild(li);

    liButton.addEventListener("click", function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus()
    })  
}

function setChapterList() {
    localStorage.setItem("bomList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("bomList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) =>  item !== chapter);
    setChapterList();
} 





