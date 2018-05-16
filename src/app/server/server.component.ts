import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: any = 10;
  serverName: any = 'India';
  addNewServer: any = false;

  getServerName() {
   return this.serverName;
  }

  constructor() {
    setTimeout(() => {
      this.addNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
