import { by, element } from "protractor";

export class CrearTiquete {
  private inputIdUsuario = element(by.id("idUsuario"));
  private inputIdParque = element(by.id("idParque"));
  private inputFechaCompra = element(by.id("fechaCompra"));
  private botonCreaTiquete = element(by.id("guardarTiquete"));

  async clickInputIdUsuario() {
    await this.inputIdUsuario.click();
  }
  async clickInputinputIdParque() {
    await this.inputIdParque.click();
  }

  async clickInputFechaCompra() {
    await this.inputFechaCompra.click();
  }

  // async setInputIdUsuario(idUsuario: number) {
  //   await this.inputIdUsuario.sendKeys(idUsuario);
  // }

  // async setInputIdParque(idParque: number) {
  //   await this.inputIdParque.sendKeys(idParque);
  // }

  async setInputFechaCompra(fechaCompra: string) {
    await this.inputFechaCompra.sendKeys(fechaCompra);
  }

  async clickOpcionIdUsuario(idUsuarios: string) {
    await this.getOpcionIdUsuario(idUsuarios).click();
  }

  async clickOpcionIdParque(idParques: string) {
    await this.getOpcionIdParque(idParques).click();
  }

  getOpcionIdUsuario(idUsuarios: string) {
    return element.all(by.id(idUsuarios)).first();
  }

  getOpcionIdParque(idParques: string) {
    return element.all(by.id(idParques)).first();
  }


  async clickBotonGuardarTiquete() {
    await this.botonCreaTiquete.click();
  }

}
