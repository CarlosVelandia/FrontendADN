import { NavbarPage } from "e2e/src/page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { CrearUsuario } from "../../page/usuario/crear-usuario.po";
import { ListarUsuarios } from "../../page/usuario/listar-usuarios.po";

describe("Crear Usuario", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarUsuarios: ListarUsuarios;
  let crearUsuario: CrearUsuario;
  const NOMBRE = 'test';
  const CEDULA = '123456';
  const USUARIO_CREADO = "El usuario ha sido creado";
  const USUARIO_YA_EXISTE = "El usuario ya existe en el sistema";


  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    crearUsuario = new CrearUsuario();
    listarUsuarios = new ListarUsuarios();
  });

  it("Debe crear el Usuario", () => {
  //arrange
    page.navigateTo();
    browser.sleep(500);
    navBar.clickBotonUsuarios();
    browser.sleep(500);
    listarUsuarios.clickBotonCrearUsuario();
    browser.sleep(500);
    crearUsuario.clickInputNombre();
    crearUsuario.setInputNombre(NOMBRE);
    browser.sleep(500);
    crearUsuario.clickInputCedula();
    crearUsuario.setInputCedula(CEDULA);
    browser.sleep(500);

    //act
    crearUsuario.clickBotonGuardarUsuario();

    //assert
    const alerta = "El usuario ha sido creado";
    expect(alerta).toEqual(USUARIO_CREADO);
    browser.sleep(500);
  });

  it("Debe retornar un error que usuario ya existe ", () => {
    //arrange
      page.navigateTo();
      listarUsuarios.clickBotonCrearUsuario();
      browser.sleep(500);
      crearUsuario.clickInputNombre();
      crearUsuario.setInputNombre(NOMBRE);
      browser.sleep(500);
      crearUsuario.clickInputCedula();
      crearUsuario.setInputCedula(CEDULA);
      browser.sleep(500);

      //act
      crearUsuario.clickBotonGuardarUsuario();

      //assert
      const alerta = "El usuario ya existe";
      expect(alerta).toEqual(USUARIO_YA_EXISTE);
      browser.sleep(500);
    });

});
