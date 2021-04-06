import { by, element } from "protractor";

export class CrearParque {
  private inputNombreParque = element(by.id("nombreParque"));
  private inputCodigo = element(by.id("codigo"));
  private inputDireccion = element(by.id("direccion"));
  private inputTelefono = element(by.id("telefono"));
  private botonCreaParque = element(by.id("guardarParque"));
  private swal = element(by.className('swal2-title'));


  async clickInputNombreParque() {
    await this.inputNombreParque.click();
  }
  async clickInputCodigo() {
    await this.inputCodigo.click();
  }

  async clickInputDireccion() {
    await this.inputDireccion.click();
  }
  async clickInputTelefono() {
    await this.inputTelefono.click();
  }

  async limpiarInputNombreParque() {
    await this.inputNombreParque.clear();
  }

  async limpiarInputCodigo() {
    await this.inputCodigo.clear();
  }

  async limpiarInputDireccion() {
    await this.inputDireccion.clear();
  }

  async limpiarInputTelefono() {
    await this.inputTelefono.clear();
  }

  async setInputNombreParque(nombreParque: string) {
    await this.inputNombreParque.sendKeys(nombreParque);
  }

  async setInputCodigo(codigo: string) {
    await this.inputCodigo.sendKeys(codigo);
  }

  async setInputDireccion(direccion: string) {
    await this.inputDireccion.sendKeys(direccion);
  }

  async setInputTelefono(telefono: string) {
    await this.inputTelefono.sendKeys(telefono);
  }

  async clickBotonGuardarParque() {
    await this.botonCreaParque.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }



}
