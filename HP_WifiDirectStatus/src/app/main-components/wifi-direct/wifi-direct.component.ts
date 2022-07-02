import { Component } from '@angular/core';

@Component({
  selector: 'app-wifi-direct',
  templateUrl: './wifi-direct.component.html',
  styleUrls: ['./wifi-direct.component.css']
})
export class WifiDirectComponent {
  navLinks = [
    { path: 'status', label: 'Status' },
    { path: 'settings', label: 'Configuration' }
  ];
}
