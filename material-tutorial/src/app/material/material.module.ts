import { NgModule } from "@angular/core";
import {
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
} from "@angular/material";
import { MatBadgeModule } from "@angular/material/badge";

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
