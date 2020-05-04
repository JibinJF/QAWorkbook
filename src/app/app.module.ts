import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { SideNavService } from './StructuralComponents/side-nav.service';
import { LeftSideNavComponent } from './StructuralComponents/left-side-nav/left-side-nav.component';
import { TopToolbarComponent } from './StructuralComponents/top-toolbar/top-toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports:      [
    AppRoutingModule,
    BrowserModule, 
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule
    ],
  declarations: [ 
    AppComponent, 
    LeftSideNavComponent, 
    TopToolbarComponent 
    ],
  bootstrap:    [ AppComponent ],
  providers: [SideNavService]
})
export class AppModule { }
