function addingEventListener(eventName, functionName) {
  const main = document.getElementById('main');

  main.addEventListener(eventName, event => {
    alert('I was clicked!');
  });

}


