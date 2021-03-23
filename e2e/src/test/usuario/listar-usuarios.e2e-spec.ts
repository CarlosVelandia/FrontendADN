import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarUsuarios } from "e2e/src/page/usuario/listar-usuarios.po";
import { NavbarPage } from "e2e/src/page/navbar/navbar.po";

describe("Listar usuarios", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarUsuarios: ListarUsuarios;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarUsuarios = new ListarUsuarios();
  });

  it("Deberia listar usuarios", () => {
    //arrange
    page.navigateTo();
    //act
    navBar.clickBotonUsuarios();
    browser.sleep(500);
    //assert
    expect(2).toBe(listarUsuarios.contarUsuarios());
    browser.sleep(500);
  });
});
