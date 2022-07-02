import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-tab',
  template: `<h1 mat-dialog-title>Delete</h1>
  <mat-dialog-content>
    <p>Are you sure you want to delete?</p>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button [mat-dialog-close]="true">Delete</button>
    <button mat-button [mat-dialog-close]="false" style="background-color: #1976D2;" (click)="onClose()">Cancel</button>
  </mat-dialog-actions> `
})
export class DialogTabComponent {

  constructor(public dialogRef: MatDialogRef<DialogTabComponent>, @Inject(MAT_DIALOG_DATA) public Data: any) { }

  onClose() {
    this.dialogRef.close();
  }
}
