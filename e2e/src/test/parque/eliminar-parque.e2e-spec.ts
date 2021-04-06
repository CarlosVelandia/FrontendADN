import { NavbarPage } from "../../page/navbar/navbar.po";
import { browser } from "protractor";
import { AppPage } from "../../app.po";
import { ListarParques } from "../../page/parque/listar-parques.po";

describe("Eliminar Parque", () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let listarParques: ListarParques;
  const PARQUE_ELIMINADO = "Parque eliminado correctamente";
  const tiempo= 500;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    listarParques = new ListarParques();
  });

  it("Debe eliminar el Parque", () => {
  //arrange
    page.navigateTo();
    browser.sleep(tiempo);
    navBar.clickBotonParques();
    browser.sleep(tiempo);

    //act
    listarParques.clickBotonEliminarParque();
    browser.sleep(tiempo);

    //assert
    //const alerta = "El parque ha sido eliminado";
    const alerta = listarParques.getTextoSwal();

    expect(alerta).toEqual(PARQUE_ELIMINADO);
    browser.sleep(tiempo);
  });
});
