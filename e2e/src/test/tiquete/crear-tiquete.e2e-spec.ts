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
  const FECHA_COMPRA = "03-25-2021";
  const TIQUETE_CREADO = "Tiquete creado correctamente";
  const FECHA_COMPRA_LUNES= "03-29-2021";
  const DIA_LUNES="Los Lunes no se pueden vender tiquetes por mantenimiento del parque";


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
    //const alerta = "Tiquete creado correctamente";
    const alerta = crearTiquete.getTextoSwal();

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
      //const alerta = "Los lunes no se venden tiquetes";
      const alerta = crearTiquete.getTextoSwal();
      expect(alerta).toEqual(DIA_LUNES);
      browser.sleep(1000);
    });

});
