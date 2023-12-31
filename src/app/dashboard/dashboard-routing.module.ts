import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrudTableComponent } from './components/crud-table/crud-table.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'ropa', component: CrudTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
