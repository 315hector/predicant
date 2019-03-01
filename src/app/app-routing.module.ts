import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { TableComponent } from './table/table.component';
import { PnpTreeComponent } from './pnp-tree/pnp-tree.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: AuthorizationComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'address', component: AddressFormComponent },
  { path: 'table', component: TableComponent },
  { path: 'tree', component: PnpTreeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

