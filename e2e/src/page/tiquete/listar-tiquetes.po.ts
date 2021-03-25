import { by, element } from "protractor";

export class ListarTiquetes{

  private tablaTiquetes = element.all(by.className("tablaTiquetes"));
  private botonCrearTiquete = element.all(by.id("botonCrearTiquete"));
  private botonEditarTiquete = element.all(by.id("botonEditarTiquete1"));
  private botonEliminarTiquete = element.all(by.id("botonEliminarTiquete1"));

  async contarTiquetes() {
    return this.tablaTiquetes.count();
  }

  async clickBotonCrearTiquete() {
    await this.botonCrearTiquete.click();
  }

  async clickBotonEditarTiquete() {
    await this.botonEditarTiquete.click();
  }

  async clickBotonEliminarTiquete() {
    await this.botonEliminarTiquete.click();
  }
}
