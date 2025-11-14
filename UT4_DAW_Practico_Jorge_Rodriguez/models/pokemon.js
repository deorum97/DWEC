class Pokemon {
  constructor(nombre, tipo, nivel) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.nivel = nivel;
    this.fechaCaptura = new Date(Date.now());
  }
}

export { Pokemon };
