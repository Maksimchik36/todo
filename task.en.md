Using React 16, create a "todo-list" component. The component should be the
default export (use export default).

Requirements:

1. Users should be able to add items to the list:

- Use an <input> element to accept user input for the todo list item.
- Use a <button> element to append the text in the <input> element as an item to
  the list and clear the <input> element.
- Use <li> elements for todo list items as children of <ul> element. Todo list
  items should not be empty and there can be multiple items with the same value.

2. Users should be able to mark/unmark items as completed:

- Cross (strikethrough) the <li> element when clicked to indicate that the item
  is completed by adding "is-done" class to the <li> element.
- Undo the cross when the item is clicked again by removing "is-done" class from
  the <li> element.

3. Users should be able to track progress:

- Display a status message with the number of remaining tasks as "X remaining
  out of Y tasks", where X= the number of incomplete tasks, Y= the total number
  of items in list. Add "task-counter" class to the status message ("X remaining
  out of Y tasks") element.
