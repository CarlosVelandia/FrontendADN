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
  const DIRECCION = "Calle 95 # 45b - 32";
  const TELEFONO = "2365544";
  const PARQUE_EDITADO = "Parque actualizado correctamente";
  const PARQUE_YA_EXISTE = "El codigo del parque ya existe en el sistema";
  const NOMBRE_ACTUALIZAR = "Segundo Parque";
  const CODIGO_ACTUALIZAR = "2456";
  const DIRECCION_ACTUALIZAR = "Carrera 12A # 22 - 14";
  const TELEFONO_ACTUALIZAR = "2278956";
  const tiempo= 500;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    editarParque = new EditarParque();
    listarParques = new ListarParques();
  });

  it("Debe editar el Parque", () => {
    //arrange
    page.navigateTo();
    browser.sleep(tiempo);
    navBar.clickBotonParques();
    browser.sleep(tiempo);
    listarParques.clickBotonEditarParque();
    browser.sleep(tiempo);
    editarParque.clickInputNombre();
    editarParque.limpiarInputNombre();
    editarParque.setInputNombre(NOMBRE);
    browser.sleep(tiempo);
    editarParque.clickInputCodigo();
    editarParque.limpiarInputCodigo();
    editarParque.setInputCodigo(CODIGO);
    browser.sleep(tiempo);
    editarParque.clickInputDireccion();
    editarParque.limpiarInputDireccion();
    editarParque.setInputDireccion(DIRECCION);
    browser.sleep(tiempo);
    editarParque.clickInputTelefono();
    editarParque.limpiarInputTelefono();
    editarParque.setInputTelefono(TELEFONO);
    browser.sleep(tiempo);

    //act
    editarParque.clickBotonActualizarParque();

    //assert
    //const alerta = "El parque ha sido editado";
    const alerta = editarParque.getTextoSwal();

    expect(alerta).toEqual(PARQUE_EDITADO);
    browser.sleep(tiempo);
  });

  it("Debe retornar un error que parque ya existe ", () => {
    //arrange
    page.navigateTo();
    browser.sleep(tiempo);
    navBar.clickBotonParques();
    browser.sleep(tiempo);
    listarParques.clickBotonEditarParque();
    browser.sleep(tiempo);
    editarParque.clickInputNombre();
    editarParque.limpiarInputNombre();
    editarParque.setInputNombre(NOMBRE_ACTUALIZAR);
    browser.sleep(tiempo);
    editarParque.clickInputCodigo();
    editarParque.limpiarInputCodigo();
    editarParque.setInputCodigo(CODIGO_ACTUALIZAR);
    browser.sleep(tiempo);
    editarParque.clickInputDireccion();
    editarParque.limpiarInputDireccion();
    editarParque.setInputDireccion(DIRECCION_ACTUALIZAR);
    browser.sleep(tiempo);
    editarParque.clickInputTelefono();
    editarParque.limpiarInputTelefono();
    editarParque.setInputTelefono(TELEFONO_ACTUALIZAR);
    browser.sleep(tiempo);

    //act
    editarParque.clickBotonActualizarParque();

    //assert
    //const alerta = "El parque ya existe en el sistema";
    const alerta = editarParque.getTextoSwal();

    expect(alerta).toEqual(PARQUE_YA_EXISTE);
    browser.sleep(tiempo);
  });
});
