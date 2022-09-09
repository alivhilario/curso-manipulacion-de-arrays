const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(element);
}

letters.forEach(item => console.log(`${item} with forEach` ));


const task = [
    { name: 'dishes', completed: true },
    { name: 'make a history', completed:  false }
]

// const toDo = document.getElementById('toDo');
task.forEach(task => {
    if (task.completed) {
       console.log(task.name); 
    }
})
