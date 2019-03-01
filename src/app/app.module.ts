import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatInputModule,
  MatSelectModule, MatRadioModule, MatTreeModule } from '@angular/material';
import { TableComponent } from './table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorizationComponent } from './authorization/authorization.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PnpTreeComponent } from './pnp-tree/pnp-tree.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TableComponent,
    DashboardComponent,
    AddressFormComponent,
    AuthorizationComponent,
    PnpTreeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
