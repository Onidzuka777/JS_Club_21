
document.addEventListener("DOMContentLoaded", function() {
    
    const addButton = document.getElementById("addButton");
    const input = document.getElementById("input");
    const taskList = document.getElementById("element");

    
    function createDeleteButton(listItem) {
        const deleteButton = document.createElement("button");
        deleteButton.className = "item__delete-button";
        deleteButton.innerHTML = '<img src="delete.svg" alt="Удалить задачу">';
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });
        return deleteButton;
    }

    
    addButton.addEventListener("click", function() {
        
        const taskText = input.value.trim();

        
        if (taskText !== "") {
            
            const listItem = document.createElement("li");
            listItem.className = "item";

            const label = document.createElement("label");
            label.className = "item__label";

            
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "item__checkbox";

            
            const taskParagraph = document.createElement("p");
            taskParagraph.className = "item__text";
            taskParagraph.textContent = taskText;

            
            const deleteButton = createDeleteButton(listItem);

            
            label.appendChild(checkbox);
            label.appendChild(taskParagraph);
            listItem.appendChild(label);
            listItem.appendChild(deleteButton);

            
            checkbox.addEventListener("change", function() {
                if (checkbox.checked) {
                    taskParagraph.style.textDecoration = "line-through";
                    listItem.style.backgroundColor = "#FFEBEB";
                } else {
                    taskParagraph.style.textDecoration = "none";
                    listItem.style.backgroundColor = "";
                }
            });

            
            taskList.appendChild(listItem);

            
            input.value = "";
        }
    });
});
