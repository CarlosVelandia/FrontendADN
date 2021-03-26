import { NavbarPage } from "../../page/navbar/navbar.po";
import { ListarParques } from "../../page/parque/listar-parques.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";

describe("Listar tiquetes", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarParques: ListarParques;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarParques = new ListarParques();
  });

  it("Deberia listar tiquetes", () => {
    //arrange
    page.navigateTo();
    //act
    navBar.clickBotonTiquetes();
    browser.sleep(300);
    //assert
    expect(0).toBe(listarParques.contarParques());
    browser.sleep(500);
  });
});
