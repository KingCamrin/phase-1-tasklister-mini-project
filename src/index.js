document.addEventListener("DOMContentLoaded", () => {
  // your code here
 /* - As a user, I should be able to type a task into the input field.
- As a user, I should be able to click some form of a submit button.
- As a user, I expect to see the task string that I provided appear in the DOM
  after the submit button has been activated.

**Note:** [While the example][example] shows one possible working implementation
of the TaskLister app, yours can (and is encouraged to!) look however you like!*/
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  if (form && input && taskList) {
    form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    const taskText = input.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      taskList.appendChild(listItem);
      input.value = ""; // Clear the input field
    }
    });
  }
});
