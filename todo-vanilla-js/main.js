const in_task = document.querySelector("#in_task");
const btn_save = document.querySelector("#btn_save");
const todo_list = document.querySelector("#list");
const completed_list = document.querySelector("#completed");
let list_counter = 0;

btn_save.addEventListener("click", on_save);

function on_save(evt){
    const list_elem = make_list_element(in_task.value);
    todo_list.appendChild(list_elem.markup);
    connect_list_element(list_elem);
    list_counter++;
    in_task.value = '';
    in_task.focus();
}

function on_delete(target){
    if(confirm("Desea eliminar esta tarea?")){
        document.querySelector(`#${target.item_id}`).remove();
    }
}

function on_checked(target){
    const list_item = document.querySelector(`#${target.item_id}`);
    if(document.querySelector(`#${target.chk_complete}`).checked){
        completed_list.appendChild(list_item);
        document.querySelector(`#${target.item_id} #task`).setAttribute("disabled", "disabled");
    }
    else{
        todo_list.appendChild(list_item);
        document.querySelector(`#${target.item_id} #task`).removeAttribute("disabled");
    }
}

function make_list_element(text){
    const current_index = list_counter + 1;
    const chk_complete = `chk_complete_${current_index}`;
    const btn_delete = `btn_delete_${current_index}`;
    const item_id = `list_item_${current_index}`;
    const container = document.createElement("div");
    container.id = item_id;
    container.classList = "list-item";
    container.innerHTML = `
    <div>
        <input type="checkbox" id="${chk_complete}"/> Completado
    </div>
    <div>
        <textarea id="task" cols="30" rows="10">${text}</textarea>
    </div>
    <div>
        <button id="${btn_delete}">Eliminar</button>
    </div>`;

    return {
        markup: container,
        chk_complete,
        btn_delete,
        item_id
    };
}

function connect_list_element(element){
    console.log(`Wiring ${element.item_id}`)
    document.querySelector(`#${element.btn_delete}`).addEventListener("click", () => on_delete(element));
    document.querySelector(`#${element.chk_complete}`).addEventListener("change", () => on_checked(element));
}