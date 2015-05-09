function Leaderboard(){
  this.topScore = 0;
}

Leaderboard.prototype = {
  getTopScorers: function(){
    $("#scores").empty();
    $.ajax({
      url: "https://dry-cove-2290.herokuapp.com/api/scores",
      type: 'GET',
      processData: true,
      dataType: "json"
    }).done(function(data) {
      if (data.length > 5) { data.splice(5); }
      this.topScore = data[data.length-1].score;
      data.forEach(function(leader) {
        $("#scores").append("<li>"+ leader.name + ": " + leader.score + "</li>");
      });
    });
  },

  add: function(name) {
    $.ajax({
      url: "https://dry-cove-2290.herokuapp.com/api/scores",
      type: 'POST',
      crossDomain: true,
      data: { name: name, score: 5 },
      success: function(data) {
        console.log("Successfully post");
      }
    });
  }
}
