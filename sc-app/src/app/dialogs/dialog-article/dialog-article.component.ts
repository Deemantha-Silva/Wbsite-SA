import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Article } from 'src/app/model/article.model';

@Component({
  selector: 'app-dialog-article',
  templateUrl: './dialog-article.component.html',
  styleUrls: ['./dialog-article.component.css']
})
export class DialogArticleComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Article) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
