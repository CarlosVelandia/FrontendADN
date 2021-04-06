import { by, element } from "protractor";

export class EditarParque {
  private inputNombre = element(by.id("nombreParque"));
  private inputCodigo = element(by.id("codigo"));
  private inputDireccion = element(by.id("direccion"));
  private inputTelefono = element(by.id("telefono"));
  private botonActualizarParque = element(by.id("actualizarParque"));
  private swal = element(by.className('swal2-title'));


  async clickInputNombre() {
    await this.inputNombre.click();
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

  async limpiarInputNombre() {
    await this.inputNombre.clear();
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

  async setInputNombre(nombreParque: string) {
    await this.inputNombre.sendKeys(nombreParque);
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

  async clickBotonActualizarParque() {
    await this.botonActualizarParque.click();
  }

  async getTextoSwal(): Promise<string> {
    return await this.swal.getText();
  }



}
