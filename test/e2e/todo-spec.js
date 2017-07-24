import TodoPage from './page-objects/TodoPage';

describe('angular js homepage to do list', function() {
    var todoPage = new TodoPage();

    browser.get("https://angularjs.org");

    it('should add a todo', function() {
        todoPage.addTodoItem('write first protractor-example test');

        expect(todoPage.todoList.count()).toEqual(3);
        expect(todoPage.getTextFromTodoListByIndex(2)).toEqual('write first protractor-example test');

        // You wrote your first test, cross it off the list
        todoPage.markTodoListItemAsDoneByIndex(2);
        expect(todoPage.completedAmount.count()).toEqual(2);
    });
});