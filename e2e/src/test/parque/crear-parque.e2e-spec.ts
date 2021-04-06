import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { CrearParque } from "../../page/parque/crear-parque.po";
import { ListarParques } from "../../page/parque/listar-parques.po";

describe("Crear Parque", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarParques: ListarParques;
  let crearParque: CrearParque;
  const NOMBRE = "test parque";
  const CODIGO = "987654";
  const DIRECCION = "Calle 1 # 2-3";
  const TELEFONO = "456789";
  const PARQUE_CREADO = "Parque creado correctamente";
  const PARQUE_YA_EXISTE = "El nombre del parque ya existe en el sistema";
  const tiempo= 500;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearParque = new CrearParque();
    listarParques = new ListarParques();
  });

  it("Debe crear el Parque", () => {
    //arrange
    page.navigateTo();
    browser.sleep(tiempo);
    navBar.clickBotonParques();
    browser.sleep(tiempo);
    listarParques.clickBotonCrearParque();
    browser.sleep(tiempo);
    crearParque.clickInputNombreParque();
    crearParque.setInputNombreParque(NOMBRE);
    browser.sleep(tiempo);
    crearParque.clickInputCodigo();
    crearParque.setInputCodigo(CODIGO);
    browser.sleep(tiempo);
    crearParque.clickInputDireccion();
    crearParque.setInputDireccion(DIRECCION);
    browser.sleep(tiempo);
    crearParque.clickInputTelefono();
    crearParque.setInputTelefono(TELEFONO);
    browser.sleep(tiempo);

    //act
    crearParque.clickBotonGuardarParque();

    //assert
    //const alerta = "El parque ha sido creado";
    const alerta = crearParque.getTextoSwal();

    expect(alerta).toEqual(PARQUE_CREADO);
    browser.sleep(tiempo);
  });

  it("Debe retornar un error que parque ya existe ", () => {
    //arrange
    page.navigateTo();
    browser.sleep(tiempo);
    navBar.clickBotonParques();
    browser.sleep(tiempo);
    listarParques.clickBotonCrearParque();
    browser.sleep(tiempo);
    crearParque.clickInputNombreParque();
    crearParque.setInputNombreParque(NOMBRE);
    browser.sleep(tiempo);
    crearParque.clickInputCodigo();
    crearParque.setInputCodigo(CODIGO);
    browser.sleep(tiempo);
    crearParque.clickInputDireccion();
    crearParque.setInputDireccion(DIRECCION);
    browser.sleep(tiempo);
    crearParque.clickInputTelefono();
    crearParque.setInputTelefono(TELEFONO);
    browser.sleep(tiempo);

    //act
    crearParque.clickBotonGuardarParque();

    //assert
    //const alerta = "El parque ya existe en el sistema";
    const alerta = crearParque.getTextoSwal();

    expect(alerta).toEqual(PARQUE_YA_EXISTE);
    browser.sleep(tiempo);
  });
});
