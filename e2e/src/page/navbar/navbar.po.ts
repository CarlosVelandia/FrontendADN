import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkUsuarios = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkParques = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkTiquetes = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));


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
