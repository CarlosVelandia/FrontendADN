import { by, element } from "protractor";

export class EditarUsuario {
  private inputNombreUsuario = element(by.id("nombreUsuario"));
  private inputCedula = element(by.id("cedula"));
  private botonActualizarUsuario = element(by.id("actualizarUsuario"));

  async clickInputNombre() {
    await this.inputNombreUsuario.click();
  }
  async clickInputCedula() {
    await this.inputCedula.click();
  }

  async limpiarInputNombre() {
    await this.inputNombreUsuario.clear();
  }

  async limpiarInputCedula() {
    await this.inputCedula.clear();
  }

  async setInputNombre(nombreUsuario: string) {
    await this.inputNombreUsuario.sendKeys(nombreUsuario);
  }

  async setInputCedula(cedula: string) {
    await this.inputCedula.sendKeys(cedula);
  }

  async clickBotonActualizarUsuario() {
    await this.botonActualizarUsuario.click();
  }

}
