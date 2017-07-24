class TodoPage {
    constructor() {
        this.todoListText = element(by.model('todoList.todoText'));
        this.addButton = element(by.css('[value="add"]'));
        this.todoList = element.all(by.repeater('todo in todoList.todos'));
        this.completedAmount = element.all(by.css('.done-true'));
    }

    addTodoItem(text) {
        this.todoListText.sendKeys(text);
        this.addButton.click();
    }

    getTextFromTodoListByIndex(index) {
        let text =this.todoList.get(index).then(function(el) {
            return el.getText();
        });
        return text;
    }

    markTodoListItemAsDoneByIndex(index) {
        this.todoList.get(index).element(by.css('input')).click();
    }
}

export TodoPage;