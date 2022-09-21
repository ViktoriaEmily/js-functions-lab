fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter((completed,index) => {
        return completed.completed;
     }).reduce((total,completed, index, array) => {
        console.log(completed)
        return total +1
     },0)
     console.log(completed);
  })
  .catch(function(err) { 
    console.log(err);
  });