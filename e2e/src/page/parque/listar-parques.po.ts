import { by, element } from "protractor";

export class ListarParques{

  private tablaParques = element.all(by.className("tablaParques"));
  private botonCrearParque = element.all(by.id("botonCrearParque"));
  private botonEditarParque = element.all(by.id("botonEditarParque1"));
  private botonEliminarParque = element.all(by.id("botonEliminarParque1"));

  async contarParques() {
    return this.tablaParques.count();
  }

  async clickBotonCrearParque() {
    await this.botonCrearParque.click();
  }

  async clickBotonEditarParque() {
    await this.botonEditarParque.click();
  }

  async clickBotonEliminarParque() {
    await this.botonEliminarParque.click();
  }
}
