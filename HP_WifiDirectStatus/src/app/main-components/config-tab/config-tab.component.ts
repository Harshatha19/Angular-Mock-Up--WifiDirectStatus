import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { SharedService } from 'src/app/Service/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogTabComponent } from './dialog-tab/dialog-tab.component';
import { NgToastService } from 'ng-angular-popup';

class ValueAndText {
  constructor(public Value: string, public Text: string) { }
}
class optionSelect {
  constructor(public Title: string) { };
}

@Component({
  selector: 'app-config-tab',
  templateUrl: './config-tab.component.html',
  styleUrls: ['./config-tab.component.css']
})

export class ConfigTabComponent implements OnInit {
  color: ThemePalette = 'primary';
  defaultValues: any;
  toggleData: boolean = false;
  securityToggle: boolean;
  securityCodeVal: boolean;
  tableArray: number[];
  isShow: boolean = false;
  randomDisplay = Math.random();

  constructor(public shared: SharedService, private dialog: MatDialog, private toastpopup: NgToastService) {
    this.securityToggle = false;
    this.securityCodeVal = false;
    this.tableArray = [];
  }

  optionselect: optionSelect = new optionSelect("Manual");

  titleArray: ValueAndText[] = [
    new ValueAndText("Manual", "Manual"),
    new ValueAndText("Automatic", "Automatic"),
    new ValueAndText("Advanced", "Advanced")
  ];

  ngOnInit(): void {
    this.shared.getData().subscribe(
      (res) => {
        this.defaultValues = res[res.length - 1];
      },
      error => {
        console.log(error.message);
      }
    )
  }

  onsubmit(form: NgForm) {
    this.shared.postData(form.value).subscribe(res => {
      this.toastpopup.success({ summary: "Wifi Direct settings applied successfully", duration: 4000 })
    }, err => {
      this.toastpopup.error({ summary: "Failed to apply the settings", duration: 4000 })
    });
  }

  randomValue = '';
  passwordGenerator() {
    const random = (length = 8) => {
      let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let str = '';
      for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return str;
    };
    return random(7);
  }

  randomValueSecurity = '';
  genPassword(value: any) {
    const state = value.checked;
    if (state) {
      this.randomValue = this.passwordGenerator();
    }
  }
  genPasswordSecurity(value: any) {
    const state = value.checked;
    if (state) {
      this.randomValueSecurity = this.passwordGenerator();
    }
  }

  ChangeOfValue(data: number) {
    this.tableArray.push(data);
  }

  deleteRow() {
    const deleteValue = this.dialog.open(DialogTabComponent);
    deleteValue.afterClosed().subscribe((res) => {
      if (res) {
        this.deleteRowValue();
      }
    }, (error) => {
      console.log(error.message);
    });
  }

  deleteRowValue() {
    for (let i = 0; i < this.tableArray.length; i++) {
      for (let j = 0; j < this.shared.table.length; j++) {
        if (this.shared.table[j].row === this.tableArray[i]) {
          this.shared.table.splice(j, 1);
        }
      }
    }
  }
}
