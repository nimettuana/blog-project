import { Component, inject } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogService } from '../services/blog.service';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { RouterModule,RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],


  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(private blogService: BlogService, public dialog: MatDialog, private _snackBar: MatSnackBar, ) {}

  blogData: Array<any> = [];
  pageSize = 8;
  page = 13;

  ngOnInit(): void {

    this.blogService.getPosts().subscribe((res:any) =>  {
      res.forEach((element:any) => {
        this.blogData.push(element);
      });

       this.blogData = res;
      console.log("data:",this.blogData);
    });
  }

  openDialog(element: any, vieworupdate: any) {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      data: { blog: element, isUpdate: vieworupdate },
    });
  }



  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


}
export class NgbdNavBasic {
	active = 1;
}


