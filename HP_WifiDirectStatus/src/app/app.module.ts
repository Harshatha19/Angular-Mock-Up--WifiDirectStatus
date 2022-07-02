import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './main-components/sidenav/sidenav.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { WifiDirectComponent } from './main-components/wifi-direct/wifi-direct.component';
import { StatusTabComponent } from './main-components/status-tab/status-tab.component';
import { ConfigTabComponent } from './main-components/config-tab/config-tab.component';
import { MaterialsModuleModule } from './materials-module/materials-module.module';
import { LandingPageComponent } from './main-components/landing-page/landing-page.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './Service/shared.service';
import { DialogTabComponent } from './main-components/config-tab/dialog-tab/dialog-tab.component';
import { NgToastModule } from 'ng-angular-popup'

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    WifiDirectComponent,
    StatusTabComponent,
    ConfigTabComponent,
    LandingPageComponent,
    DialogTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModuleModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
