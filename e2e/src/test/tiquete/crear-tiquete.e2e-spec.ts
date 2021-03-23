import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { CrearTiquete } from "../../page/tiquete/crear-tiquete.po";
import { ListarTiquetes } from "../../page/tiquete/listar-tiquetes.po";

describe("Crear Tiquete", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarTiquetes: ListarTiquetes;
  let crearTiquete: CrearTiquete;
  const ID_USUARiOS="idUsuarios";
  const ID_PARQUES="idParques";
  const FECHA_COMPRA = '2021-03-18';
  const TIQUETE_CREADO = "El tiquete ha sido creado";
  const TIQUETE_YA_EXISTE = "El tiquete ya existe";


  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearTiquete = new CrearTiquete();
    listarTiquetes = new ListarTiquetes();
  });

  it("Debe crear el Tiquete", () => {
  //arrange
    page.navigateTo();
    browser.sleep(500);
    navBar.clickBotonTiquetes();
    browser.sleep(500);
    listarTiquetes.clickBotonCrearTiquete();
    browser.sleep(500);
    crearTiquete.clickInputIdUsuario();
    crearTiquete.clickOpcionIdUsuario(ID_USUARiOS);
    browser.sleep(500);
    crearTiquete.clickInputinputIdParque();
    crearTiquete.clickOpcionIdParque(ID_PARQUES);
    browser.sleep(500);
    crearTiquete.clickInputFechaCompra();
    crearTiquete.setInputFechaCompra(FECHA_COMPRA);
    browser.sleep(500);

    //act
    crearTiquete.clickBotonGuardarTiquete();

    //assert
    const alerta = "El tiquete ha sido creado";
    expect(alerta).toEqual(TIQUETE_CREADO);
    browser.sleep(500);
  });

  it("Debe retornar un error que tiquete ya existe ", () => {
    //arrange
    page.navigateTo();
    browser.sleep(500);
    navBar.clickBotonTiquetes();
    browser.sleep(500);
    listarTiquetes.clickBotonCrearTiquete();
    browser.sleep(500);
    crearTiquete.clickInputIdUsuario();
    crearTiquete.clickOpcionIdUsuario(ID_USUARiOS);
    browser.sleep(500);
    crearTiquete.clickInputinputIdParque();
    crearTiquete.clickOpcionIdParque(ID_PARQUES);
    browser.sleep(500);
    crearTiquete.clickInputFechaCompra();
    crearTiquete.setInputFechaCompra(FECHA_COMPRA);
    browser.sleep(500);

      //act
      crearTiquete.clickBotonGuardarTiquete();

      //assert
      const alerta = "El tiquete ya existe";
      expect(alerta).toEqual(TIQUETE_YA_EXISTE);
      browser.sleep(500);
    });

});
