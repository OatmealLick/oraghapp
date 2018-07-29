import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.css']
})
export class AddEventDialogComponent implements OnInit {

  form: FormGroup;

  title: string;
  description: string;
  location: string;
  date: Date;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddEventDialogComponent>) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [this.title, Validators.required],
      location: [this.location, Validators.required],
      date: [this.date, Validators.required],
      description: [this.description, []],
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

  submit(form) {}
}
