//import cho
var choo = require('choo');
 
 var main = require("./templates/main");

var app = choo();

app.use(function(state, emmiter){
    
  state.animals = [
    {type: 'lion', x: 200, y: 100},
    {type: 'crocodile', x: 50, y: 300}
  ];

  emmiter.on('addAnimal', function(){
      var obj = {
          type: 'lion',
          x: 500,
          y: 100
      }

      state.animals.push(obj)
      emmiter.emit('render');
  });


});

app.route('/', main);

// start app
app.mount('div');