fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter((completed,index) => {        
        return completed.completed;
     });

     const todoTitles = json.map(todoTitles => todoTitles.title)
     console.log(todoTitles)
    });