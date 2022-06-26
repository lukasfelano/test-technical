import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { EmployeeListComponent } from "./pages/employee-list/employee-list.component";
import { EmployeeAddComponent } from "./pages/employee-add/employee-add.component";
import { EmployeeDetailComponent } from "./pages/employee-detail/employee-detail.component";
import { AuthGuard } from "./authGuard ";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "employee",
    component: EmployeeListComponent,
    canActivate: [AuthGuard],
  },
  { path: "add", component: EmployeeAddComponent, canActivate: [AuthGuard] },
  {
    path: "employee/:username",
    component: EmployeeDetailComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  checkLogged() {}
}
