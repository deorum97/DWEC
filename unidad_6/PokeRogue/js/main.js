import { Facade } from "./facade.js";

const facade = new Facade();

const battle = document.getElementById("battle");
const team = document.getElementById("team");

const historic = document
  .getElementById("historic")
  .addEventListener("click", (e) => facade.showBattle);
const imports = document
  .getElementById("import")
  .addEventListener("click", (e) => facade.showBattle);

battle.addEventListener("click", (e) => facade.showBattle());
team.addEventListener("click", (e) => facade.showTeam());
