import { NavbarPage } from "../../page/navbar/navbar.po";

import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarParques } from "../../page/parque/listar-parques.po";

describe("Listar parques", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarParques: ListarParques;
  const tiempo= 500;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarParques = new ListarParques();

  });

  it("Deberia listar parques", () => {
    //arrange
    page.navigateTo();
    browser.sleep(tiempo);
    //act
    navBar.clickBotonParques();
    browser.sleep(tiempo);
    //assert
    expect(2).toBe(listarParques.contarParques());
    browser.sleep(tiempo);
  });
});
