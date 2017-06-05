import { Component } from '@angular/core';

class Todo {
    constructor(public title: string,
                public completed: boolean = false){
    }

}


const todos: Todo[] = [
    {
        title: 'Изучить JavaScript',
        completed: true
    },
    {
        title: 'Изучить Angular2',
        completed: false
    },
    {
        title: 'Задача 1',
        completed: true
    },
    {
        title: 'Задача 2',
        completed: true
    },
    {
        title: 'Задача 3',
        completed: true
    }
]

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title='Angular 2Do';
    todos: Todo [] = todos;

    create(event: Event, input: HTMLInputElement){

        event.preventDefault(); //Останавливается отправка данных, страница не обновляется во время create
        let todo: Todo = new Todo(input.value);
        if (todo.title !="")  {
            this.todos.push(todo);
        }
        input.value = ''; //Очищение формы ввода после create
    }

    toggle (todo: Todo) {
        todo.completed = !todo.completed;
    }

    delete(todo: Todo){
        let index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

}