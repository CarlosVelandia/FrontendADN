import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkUsuarios = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkParques = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));
    linkTiquetes = element(by.xpath('/html/body/app-root/app-navbar/nav/a[5]'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }
      async clickBotonUsuarios() {
        await this.linkUsuarios.click();
    }
      async clickBotonParques() {
        await this.linkParques.click();
    }
    async clickBotonTiquetes() {
      await this.linkTiquetes.click();
    }
}
