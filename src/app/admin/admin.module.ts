import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthService} from "./shared/services/auth.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [AdminLayoutComponent, LoginPageComponent, DashboardPageComponent, EditPageComponent, ShowPageComponent, RegistrationComponent],
  imports:[
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path:'',component: AdminLayoutComponent,children:[
          {path:'',redirectTo:'/admin/login',pathMatch:'full'},
          {path:'login', component: LoginPageComponent},
          {path:'registration', component: RegistrationComponent},
          {path:'dashboard',component:DashboardPageComponent},
          {path:'edit-user',component:EditPageComponent},
          {path:'product/:id/show',component:ShowPageComponent},
        ]
      }
    ])
  ],
  exports:[RouterModule],
  providers: [AuthService]

})
export class AdminModule {

}
