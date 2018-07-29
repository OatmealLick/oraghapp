import {NgModule} from '@angular/core';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule, MatCardModule, MatDatepickerModule, MatDialog, MatDialogModule, MatDialogRef, MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatNativeDateModule,
  MatToolbarModule
} from "@angular/material";
import {AddEventDialogComponent} from "../../components/add-event-dialog/add-event-dialog.component";

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  entryComponents: [AddEventDialogComponent]
})
export class MaterialModule {
}
