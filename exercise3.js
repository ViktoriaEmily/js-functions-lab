fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.filter((completed,index) => {        
        return completed.completed === false;
    
    }).map(uncompleted => {
        console.log(uncompleted);
        return {
            userid: uncompleted.userId,
            title: uncompleted.title
        };
        });
        console.log(uncompleted);
    });