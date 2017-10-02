import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { APP_CONFIG, DI_CONFIG } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    NAV_DROPDOWN_DIRECTIVES,
    AsideToggleDirective,
    BreadcrumbComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //NgbModule.forRoot(),
    SharedModule.forRoot(),
    AppRoutingModule     
  ],
  providers: [
    { provide: APP_CONFIG, useValue: DI_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
