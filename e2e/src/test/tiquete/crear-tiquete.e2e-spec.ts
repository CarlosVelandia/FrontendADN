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
  const FECHA_COMPRA = '25-03-2021';
  const TIQUETE_CREADO = "El tiquete ha sido creado";
  const FECHA_COMPRA_LUNES= '29-03-2021';
  const DIA_LUNES="Los lunes no se venden tiquetes";


  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearTiquete = new CrearTiquete();
    listarTiquetes = new ListarTiquetes();
  });

  it("Debe crear el Tiquete", () => {
  //arrange
    page.navigateTo();
    browser.sleep(1000);
    navBar.clickBotonTiquetes();
    browser.sleep(1000);
    listarTiquetes.clickBotonCrearTiquete();
    browser.sleep(1000);
    crearTiquete.clickInputIdUsuario();
    crearTiquete.clickOpcionIdUsuario();
    browser.sleep(1000);
    crearTiquete.clickInputinputIdParque();
    crearTiquete.clickOpcionIdParque();
    browser.sleep(1000);
    crearTiquete.clickInputFechaCompra();
    crearTiquete.setInputFechaCompra(FECHA_COMPRA);
    browser.sleep(1000);

    //act
    crearTiquete.clickBotonGuardarTiquete();

    //assert
    const alerta = "El tiquete ha sido creado";
    expect(alerta).toEqual(TIQUETE_CREADO);
    browser.sleep(1000);
  });

  it("Debe retornar un error el dia lunes", () => {
    //arrange
    page.navigateTo();
    browser.sleep(1000);
    navBar.clickBotonTiquetes();
    browser.sleep(1000);
    listarTiquetes.clickBotonCrearTiquete();
    browser.sleep(1000);
    crearTiquete.clickInputIdUsuario();
    crearTiquete.clickOpcionIdUsuario();
    browser.sleep(1000);
    crearTiquete.clickInputinputIdParque();
    crearTiquete.clickOpcionIdParque();
    browser.sleep(1000);
    crearTiquete.clickInputFechaCompra();
    crearTiquete.setInputFechaCompra(FECHA_COMPRA_LUNES);
    browser.sleep(1000);

      //act
      crearTiquete.clickBotonGuardarTiquete();

      //assert
      const alerta = "Los lunes no se venden tiquetes";
      expect(alerta).toEqual(DIA_LUNES);
      browser.sleep(1000);
    });

});
