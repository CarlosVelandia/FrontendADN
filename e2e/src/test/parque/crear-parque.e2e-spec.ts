import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { CrearParque } from "../../page/parque/crear-parque.po";
import { ListarParques } from "../../page/parque/listar-parques.po";

describe("Crear Parque", () => {
  let page: AppPage;
  let listarParques: ListarParques;
  let crearParque: CrearParque;
  const NOMBRE = 'test parque';
  const CODIGO = '987654';
  const DIRECCION = 'Calle 1 # 2-3';
  const TELEFONO = '456789';
  const PARQUE_CREADO = "El parque ha sido creado";
  const PARQUE_YA_EXISTE = "El parque ya existe en el sistema";


  beforeEach(() => {
    page = new AppPage();
    crearParque = new CrearParque();
    listarParques = new ListarParques();
  });

  it("Debe crear el Parque", () => {
  //arrange
    page.navigateTo();
    listarParques.clickBotonCrearParque();
    browser.sleep(500);
    crearParque.clickInputNombreParque();
    crearParque.setInputNombreParque(NOMBRE);
    browser.sleep(500);
    crearParque.clickInputCodigo();
    crearParque.setInputCodigo(CODIGO);
    browser.sleep(500);
    crearParque.clickInputDireccion();
    crearParque.setInputDireccion(DIRECCION);
    browser.sleep(500);
    crearParque.clickInputTelefono();
    crearParque.setInputTelefono(TELEFONO);
    browser.sleep(500);

    //act
    crearParque.clickBotonGuardarParque();

    //assert
    const alerta = "El parque ha sido creado";
    expect(alerta).toEqual(PARQUE_CREADO);
    browser.sleep(500);
  });

  it("Debe retornar un error que parque ya existe ", () => {
    //arrange
      page.navigateTo();
      browser.sleep(500);
      page.clickBotonParques();
      browser.sleep(500);
      listarParques.clickBotonCrearParque();
      browser.sleep(500);
      crearParque.clickInputNombreParque();
      crearParque.setInputNombreParque(NOMBRE);
      browser.sleep(500);
      crearParque.clickInputCodigo();
      crearParque.setInputCodigo(CODIGO);
      browser.sleep(500);
      crearParque.clickInputDireccion();
      crearParque.setInputDireccion(DIRECCION);
      browser.sleep(500);
      crearParque.clickInputTelefono();
      crearParque.setInputTelefono(TELEFONO);
      browser.sleep(500);

      //act
      crearParque.clickBotonGuardarParque();

      //assert
      const alerta = "El parque ya existe";
      expect(alerta).toEqual(PARQUE_YA_EXISTE);
      browser.sleep(500);
    });

});
