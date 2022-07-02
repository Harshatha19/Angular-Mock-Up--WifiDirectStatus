import { Component } from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  panelOpenState = false;
  isDisplaySidenav = true;

  config = {
    sideNavpanels: [
      { "text": "Home" },
      { "text": "Jobs" },
      { "text": "Quick Sets" },
      { "text": "Contacts" },
      { "text": "Supplies" },
      { "text": "Media" },
      { "text": "Fax" },
      { "text": "Printer Management" },
      { "text": "Web Services" },
    ],
  };

  toggleSidenav() {
    this.isDisplaySidenav = !this.isDisplaySidenav;
  }
}
