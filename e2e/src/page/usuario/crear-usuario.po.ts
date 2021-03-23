import { by, element } from "protractor";

export class CrearUsuario {

  private inputNombreUsuario = element(by.id("nombreUsuario"));
  private inputCedula = element(by.id("cedula"));
  private botonGuardarUsuario = element(by.id("guardarUsuario"));

  async clickInputNombre() {
    await this.inputNombreUsuario.click();
  }
  async clickInputCedula() {
    await this.inputCedula.click();
  }

  async setInputNombre(nombreUsuario: string) {
    await this.inputNombreUsuario.sendKeys(nombreUsuario);
  }

  async setInputCedula(cedula: string) {
    await this.inputCedula.sendKeys(cedula);
  }

  async clickBotonGuardarUsuario() {
    await this.botonGuardarUsuario.click();
  }

}
