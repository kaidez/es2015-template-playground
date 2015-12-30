function PrintTeamES2015( team ) {
  document.getElementById("containerTwo").innerHTML = `${team.city} ${team.teamName}`;
}

var kai = new PrintTeamES2015({city:"Brooklyn", teamName:"Nets" });