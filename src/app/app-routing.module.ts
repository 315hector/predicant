import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { TableComponent } from './table/table.component';
import { PnpTreeComponent } from './pnp-tree/pnp-tree.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'auth', component: AuthorizationComponent },
  { path: 'address', component: AddressFormComponent },
  { path: 'table', component: TableComponent },
  { path: 'tree', component: PnpTreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

