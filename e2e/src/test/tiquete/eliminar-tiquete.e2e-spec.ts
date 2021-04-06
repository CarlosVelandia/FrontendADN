import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarTiquetes } from "../../page/tiquete/listar-tiquetes.po";

describe("Eliminar Tiquete", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarTiquetes: ListarTiquetes;
  const TIQUETE_ELIMINADO = "Tiquete eliminado correctamente";

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarTiquetes = new ListarTiquetes();
  });

  it("Debe eliminar el Tiquete", () => {
  //arrange
    page.navigateTo();
    browser.sleep(500);
    navBar.clickBotonTiquetes();
    browser.sleep(500);

    //act
    listarTiquetes.clickBotonEliminarTiquete();
    browser.sleep(500);

    //assert
    //const alerta = "El tiquete ha sido eliminado";
    const alerta = listarTiquetes.getTextoSwal();
    expect(alerta).toEqual(TIQUETE_ELIMINADO);
    browser.sleep(500);
  });
});
