function loadData() {

  var rosterElements = ["firstName", "lastName", "nuid", "email", "year", "gpa", "courseNumber", "courseName"];

  $.getJSON( "data/roster/roster.json")
   .done( function( data ) {
       for(var i=0; i<data.roster.length; i++) {
           var val = data.roster[i];
           var item = "<tr><td>" + val.firstName +
                    "</td><td>" + val.lastName +
                    "</td><td>" + val.nuid +
                    "</td><td>" + val.email +
                    "</td><td>" + val.year +
                    "</td><td>" + val.gpa +
                    "</td><td>" + val.courseNumber +
                    "</td><td>" + val.courseName +
                    "</td></tr>";
           $("#roster tbody").append(item);
       }
       //TODO: initialize data table
    })
    .fail(function(jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      $("#errorMsg").css("display", "inline").html("error: " + err);
    });
}
