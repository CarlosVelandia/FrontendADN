import { by, element } from "protractor";

export class ListarTiquetes{

  private tablaTiquetes = element.all(by.className("tablaTiquetes"));
  private botonCrearTiquete = element.all(by.id("botonCrearTiquete"));
  private botonEditarTiquete = element.all(by.id("botonEditarTiquete3"));
  private botonEliminarTiquete = element.all(by.id("botonEliminarTiquete3"));
  private swal = element(by.className('swal2-title'));


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

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }
}
