import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataResponse } from '../../../../entity/data.reponse.entity';
import { Data } from '@angular/router';

@Component({
  selector: 'app-user-profile-dialog',
  templateUrl: './user-profile-dialog.component.html',
  styleUrls: ['./user-profile-dialog.component.css']
})
export class UserProfileDialogComponent {
close() {
this.dialogRef.close();
}
  constructor(
    @Inject(MAT_DIALOG_DATA) public user: Data, 
    private dialogRef: MatDialogRef<UserProfileDialogComponent>,
  ) {}
}
