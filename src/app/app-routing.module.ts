import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  { path: 'add-user', component: CreateUserComponent },
  { path: 'users-list', component: UsersListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-page', component: AddPageComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
