import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SmartTableComponent } from 'ng2-smart-table';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { Ng2tableComponent } from './ng2table/ng2table.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {
    path: "", component: Ng2tableComponent
  },
  {
    path:'viewUser/:id',component:ViewDetailsComponent
  },
  {
    path:'adminPage',component:AdminPageComponent
  },
  {
    path:'userPage',component:UserPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
