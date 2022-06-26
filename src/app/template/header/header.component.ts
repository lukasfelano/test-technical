import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthGuard } from "src/app/authGuard ";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  getStatus() {
    return AuthGuard.statusLogged;
  }

  setStatus() {
    this.router.navigateByUrl("/");
    AuthGuard.setStatus(false);
  }

  ngOnInit(): void {}
}
