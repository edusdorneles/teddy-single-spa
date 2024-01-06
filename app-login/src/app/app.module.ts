import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule],
    providers: [{ provide: APP_BASE_HREF, useValue: "/angular" }],
    bootstrap: [AppComponent]
})
export class AppModule {}
