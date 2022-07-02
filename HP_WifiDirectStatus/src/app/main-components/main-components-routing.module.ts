import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigTabComponent } from './config-tab/config-tab.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { StatusTabComponent } from './status-tab/status-tab.component';
import { WifiDirectComponent } from './wifi-direct/wifi-direct.component';

const routes: Routes = [
  { path: '', redirectTo: 'hp/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  {
    path: 'network/wifiDirect', component: WifiDirectComponent, children: [
      { path: 'status', component: StatusTabComponent },
      { path: 'settings', component: ConfigTabComponent },
      { path: '', redirectTo: 'status', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainComponentsRoutingModule { }
