// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('enqueue', function(){
      console.log('Heard it!');
    })
  }




});
