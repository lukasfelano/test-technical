import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthGuard } from "src/app/authGuard ";
import { HeaderComponent } from "src/app/template/header/header.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitLogin() {
    let data = this.loginForm.value;
    if (data.username == "admin" && data.password == "admin") {
      AuthGuard.setStatus(true);
      this.router.navigateByUrl("/employee");
    } else {
      alert("Your username or password is wrong!");
    }
  }
}
