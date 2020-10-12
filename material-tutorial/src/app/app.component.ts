import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "material-tutorial";
  notifications = 0;
  showSpinner = false;
  opened = false;

  log = (state) => {
    console.log(state);
  };
}
