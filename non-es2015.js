function PrintTeamOldSchool( city, teamName ) {

  this.city = city;
  this.teamName = teamName;
  this.fullName = this.city + " " +  this.teamName;

  return this.fullName;

}


PrintTeamOldSchool.prototype.displayTeamName = function() {
  
  document.getElementById( "containerOne" ).innerHTML = this.fullName;

}

var yankees = new PrintTeamOldSchool( "New York", "Yankees" );

yankees.displayTeamName();