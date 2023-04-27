import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Actions } from "../../models/actions";

export interface DialogData {
  actionList: Actions[];
  invalidFildList: boolean[];
  totalBalanceValue: number;
}

@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog.html',
  styleUrls: ['dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  actionList: Actions[] = [];
  isErrorRow:boolean = false;
  invalidFildList: boolean[] = [];
  totalBalance:number = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  ngOnInit(){
    this.actionList = this.data?.actionList;
    this.invalidFildList = this.data?.invalidFildList;
    this.isErrorRow = this.invalidFildList.some((row: boolean) => row === false)
    this.totalBalance = this.data?.totalBalanceValue;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  calculePercentual(percentual: number, totalBalance: number): number {
    return totalBalance * (percentual/100);
  }
}
