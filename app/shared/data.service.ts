import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const todos = [
            {
                id: 1,
                title: 'Изучить JavaScript',
                completed: true
            },
            {
                id: 2,
                title: 'Изучить Angular2',
                completed: false
            },
        ];

        return { todos : todos };
    }
}
