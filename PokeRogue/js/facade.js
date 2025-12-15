class Facade {
  showBattle() {
    const footer = document.getElementById("footer");
    footer.style.visibility = "visible";
  }

  showTeam() {
    const footer = document.getElementById("footer");
    footer.style.visibility = "hidden";
  }
}

export { Facade };
