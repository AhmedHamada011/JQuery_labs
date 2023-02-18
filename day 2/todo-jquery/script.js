var mainDiv = $("#main");
var task = $("#task-input");
var addTask = $("#add-task");

addTask.on("click", function () {
  if (task !== "") {
    let elemBody = `<div class="task-container ps-3 pt-3 row border-bottom border-1 gx-0">
  <p class="task col-9">${task.val()}</p>
  <div class="buttons col-3 d-flex justify-content-center align-items-baseline">
    <button type="button" class="btn btn-success lh-1 me-1" onclick="complete(this)"><i class="bi bi-check"></i>
    </button>
    <button type="button" class="btn btn-danger lh-1" onclick="remove(this)"><i class="bi bi-trash"></i></button>
  </div>
  </div>
  `;

    mainDiv.append(elemBody);
  }

  task.value = "";
});

function complete(elem) {
  $(elem).parent().parent().addClass("complete");
}

function remove(elem) {
  $(elem).parent().parent().remove();
}
