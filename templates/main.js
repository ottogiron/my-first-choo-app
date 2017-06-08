var html = require('choo/html');
var animal = require('./animal');
// export module
module.exports = function (state, emit) {
  
  // create html template
  return html`
    <div class="container">
      <div class="grass">
        <img src="/assets/bg.gif" onclick="${add}" />
        ${state.animals.map(animal)}
      </div>
    </div>
  `

  function add() {
    emit('addAnimal')
  };
};



