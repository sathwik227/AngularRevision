import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: any = 10;
  serverName: any = 'India';
  getServerName() {
   return this.serverName;
  }
  constructor() { }

  ngOnInit() {
  }

}
