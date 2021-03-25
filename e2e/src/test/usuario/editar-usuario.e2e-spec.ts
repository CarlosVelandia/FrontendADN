import { NavbarPage } from "../../page/navbar/navbar.po";
import { EditarUsuario } from "../../page/usuario/editar-usuario.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarUsuarios } from "../../page/usuario/listar-usuarios.po";

describe("Editar Usuario", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarUsuarios: ListarUsuarios;
  let editarUsuario: EditarUsuario
  const NOMBRE = 'test usuario';
  const CEDULA = '78901';
  const USUARIO_CREADO = "El usuario ha sido editado";
  const USUARIO_YA_EXISTE = "El usuario ya existe";


  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    editarUsuario = new EditarUsuario();
    listarUsuarios = new ListarUsuarios();
  });

  it("Debe editar el Usuario", () => {
  //arrange
    page.navigateTo();
    browser.sleep(1000);
    navBar.clickBotonUsuarios();
    browser.sleep(1000);
    listarUsuarios.clickBotonEditarUsuario();
    browser.sleep(1000);
    editarUsuario.clickInputNombre();
    editarUsuario.limpiarInputNombre();
    editarUsuario.setInputNombre(NOMBRE);
    browser.sleep(1000);
    editarUsuario.clickInputCedula();
    editarUsuario.limpiarInputCedula();
    editarUsuario.setInputCedula(CEDULA);
    browser.sleep(1000);

    //act
    editarUsuario.clickBotonActualizarUsuario();

    //assert
    const alerta = "El usuario ha sido editado";
    expect(alerta).toEqual(USUARIO_CREADO);
    browser.sleep(300);
  });

  it("Debe retornar un error que usuario ya existe ", () => {
    //arrange
      page.navigateTo();
      navBar.clickBotonUsuarios();
      browser.sleep(1000);
      listarUsuarios.clickBotonEditarUsuario();
      browser.sleep(1000);
      editarUsuario.clickInputNombre();
      editarUsuario.limpiarInputNombre();
      editarUsuario.setInputNombre(NOMBRE);
      browser.sleep(1000);
      editarUsuario.clickInputCedula();
      editarUsuario.limpiarInputCedula();
      editarUsuario.setInputCedula(CEDULA);
      browser.sleep(1000);

      //act
      editarUsuario.clickBotonActualizarUsuario();

      //assert
      const alerta = "El usuario ya existe";
      expect(alerta).toEqual(USUARIO_YA_EXISTE);
      browser.sleep(300);
    });

});
