function Leaderboard(){}

Leaderboard.prototype = {
  getTopScorers: function(){
    $("#scores").empty();
    $.ajax({
      url: "https://dry-cove-2290.herokuapp.com/api/scores",
      type: 'GET',
      processData: true,
      dataType: "json"
    }).done(function(data) {
      console.log(data);
      data.forEach(function(leader) {
        $("#scores").append("<li>"+ leader.name + ": " + leader.score + "</li>");
      });
    });
  }
}
