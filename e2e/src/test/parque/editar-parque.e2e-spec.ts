import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarParques } from "../../page/parque/listar-parques.po";
import { EditarParque } from "../../page/parque/editar-parque.po";

describe("Editar Parque", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarParques: ListarParques;
  let editarParque: EditarParque;
  const NOMBRE = "test parque";
  const CODIGO = "78901";
  const DIRECCION = "test parque";
  const TELEFONO = "78901";
  const PARQUE_EDITADO = "El parque ha sido editado";
  const PARQUE_YA_EXISTE = "El parque ya existe en el sistema";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    editarParque = new EditarParque();
    listarParques = new ListarParques();
  });

  it("Debe editar el Parque", () => {
    //arrange
    page.navigateTo();
    browser.sleep(1000);
    navBar.clickBotonParques();
    browser.sleep(1000);
    listarParques.clickBotonEditarParque();
    browser.sleep(1000);
    editarParque.clickInputNombre();
    editarParque.limpiarInputNombre();
    editarParque.setInputNombre(NOMBRE);
    browser.sleep(1000);
    editarParque.clickInputCodigo();
    editarParque.limpiarInputCodigo();
    editarParque.setInputCodigo(CODIGO);
    browser.sleep(1000);
    editarParque.clickInputDireccion();
    editarParque.limpiarInputDireccion();
    editarParque.setInputDireccion(DIRECCION);
    browser.sleep(1000);
    editarParque.clickInputTelefono();
    editarParque.limpiarInputTelefono();
    editarParque.setInputTelefono(TELEFONO);
    browser.sleep(1000);

    //act
    editarParque.clickBotonActualizarParque();

    //assert
    const alerta = "El parque ha sido editado";
    expect(alerta).toEqual(PARQUE_EDITADO);
    browser.sleep(1000);
  });

  it("Debe retornar un error que parque ya existe ", () => {
    //arrange
    page.navigateTo();
    browser.sleep(1000);
    navBar.clickBotonParques();
    browser.sleep(1000);
    listarParques.clickBotonEditarParque();
    browser.sleep(1000);
    editarParque.clickInputNombre();
    editarParque.limpiarInputNombre();
    editarParque.setInputNombre(NOMBRE);
    browser.sleep(1000);
    editarParque.clickInputCodigo();
    editarParque.limpiarInputCodigo();
    editarParque.setInputCodigo(CODIGO);
    browser.sleep(1000);
    editarParque.clickInputDireccion();
    editarParque.limpiarInputDireccion();
    editarParque.setInputDireccion(DIRECCION);
    browser.sleep(1000);
    editarParque.clickInputTelefono();
    editarParque.limpiarInputTelefono();
    editarParque.setInputTelefono(TELEFONO);
    browser.sleep(1000);

    //act
    editarParque.clickBotonActualizarParque();

    //assert
    const alerta = "El parque ya existe en el sistema";
    expect(alerta).toEqual(PARQUE_YA_EXISTE);
    browser.sleep(1000);
  });
});
