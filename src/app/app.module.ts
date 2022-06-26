import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./template/header/header.component";
import { LoginComponent } from "./pages/login/login.component";
import { EmployeeListComponent } from "./pages/employee-list/employee-list.component";
import { EmployeeDetailComponent } from "./pages/employee-detail/employee-detail.component";
import { EmployeeAddComponent } from "./pages/employee-add/employee-add.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthGuard } from "./authGuard ";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
