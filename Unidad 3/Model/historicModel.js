export class Historico {
  constructor(
    valorNumerico,
    cambio,
    divisaValueFrom,
    divisaValueTo,
    fechaActual
  ) {
    this.valorNumerico = valorNumerico;
    this.cambio = cambio;
    this.divisaValueFrom = divisaValueFrom;
    this.divisaValueTo = divisaValueTo;
    this.fechaActual = new Date(fechaActual);
  }
}
