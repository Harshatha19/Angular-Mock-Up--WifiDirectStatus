import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Service/shared.service';
import { parsedData } from '../parsedData';

@Component({
  selector: 'app-status-tab',
  templateUrl: './status-tab.component.html',
  styleUrls: ['./status-tab.component.css']
})

export class StatusTabComponent implements OnInit {
  channel: string;
  connection: string;
  name: string;
  password: string;
  securitycode: string;

  parsedData: parsedData = {
    channel: '',
    connection: '',
    name: '',
    password: '',
    securitycode: ''
  };

  constructor(private shared: SharedService) {
    this.channel = "";
    this.connection = "";
    this.name = ""
    this.password = "";
    this.securitycode = "";
  }

  ngOnInit() {
    this.shared.getData().subscribe(response => {
      let fieldlength = response.length - 1;
      this.parsedData.channel = response[fieldlength].channel;
      this.parsedData.connection = response[fieldlength].connection;
      this.parsedData.name = response[fieldlength].wifidirectname;
      this.parsedData.password = response[fieldlength].password;
      this.parsedData.securitycode = response[fieldlength].securitycode;
    }),
      (error: { message: any; }) => {
        console.log(error.message)
      }
  }
}
