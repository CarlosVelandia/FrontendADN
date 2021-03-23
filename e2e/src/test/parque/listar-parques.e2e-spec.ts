import { NavbarPage } from "e2e/src/page/navbar/navbar.po";
import { ListarParques } from "e2e/src/page/parque/listar-parques.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";

describe("Listar parques", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarParques: ListarParques;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarParques = new ListarParques();

  });

  it("Deberia listar parques", () => {
    //arrange
    page.navigateTo();
    browser.sleep(500);
    //act
    navBar.clickBotonParques();
    browser.sleep(500);
    //assert
    expect(2).toBe(listarParques.contarParques());
    browser.sleep(500);
  });
});