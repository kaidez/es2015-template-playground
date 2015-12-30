function PrintTeamES2015( team ) {

  /*
   * Templates are defined bu the "`" charater, which is (probably) to
   * the left of the "1" button on your keyboard
   */
  document.getElementById( "containerTwo" ).innerHTML = `${team.city} ${team.teamName}`;

}

var kai = new PrintTeamES2015( {city:"Brooklyn", teamName:"Nets" } );