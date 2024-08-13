import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  constructor(private ref: MatDialogRef<PopupComponent>) {
  }
  closepopup(){
    this.ref.close();
  }
}
