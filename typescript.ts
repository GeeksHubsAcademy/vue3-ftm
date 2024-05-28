class Todo implements TodoInterface {
    id: number;
    name: string;
    completed: boolean;

    constructor(id: number, name: string, completed: boolean) {
        this.id = id;
        this.name = name;
        this.completed = completed;
    }
}


interface TodoInterface {
    id: number;
    name: string;
    completed: boolean;
}

type TodoType = [1,string, boolean] | TodoInterface;



const todos: TodoInterface[] = [
    { id: 1, name: 'Go to the gym', completed: false },
    new Todo(2, 'Write some code', true),
    { id: 3, name: 'Do the shopping', completed: false }
]

console.log(todos);



// // [
// //     'id' => 12,
// //     'name' => 'Go to the gym',
// //     'completed' => false
// // ]

// {
//     id: 12,
//     name: 'Go to the gym',
//     completed: false
// }

// console.log(new Todo(1, 'Go to the gym', false) instanceof Todo);
// console.log({ id: 1, name: 'Go to the gym', completed: false } instanceof Todo);
