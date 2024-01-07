import { Component } from "@angular/core";
import { navigateToUrl } from "single-spa";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css"
})
export class AppComponent {
    user = "";
    password = "";
    rememberUser = false;
    error = "";

    resetFields() {
        this.user = "";
        this.password = "";
        this.rememberUser = false;
        this.error = "";
    }

    onSubmit() {
        if (this.user.length > 0 && this.password.length > 0) {
            if (this.rememberUser) {
                document.cookie = `@teddy/user-name=${this.user}`;
            } else {
                sessionStorage.setItem("@teddy/user-name", this.user);
            }

            this.resetFields();
            navigateToUrl("/dashboard");
        } else {
            this.error = "Preencha todos os campos.";
        }
    }
}
