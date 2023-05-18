import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offLine';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'onLine' : 'offLine';
  }

  getServerStatus() {
    return this.serverStatus + '2';
  }

  getServer() {
    // if (this.serverStatus === 'onLine') {
    //   return 'red';
    // }
    // if (this.serverStatus === 'offLine') {
    //   return 'blue';
    // }
    return this.serverStatus === 'onLine' ? 'green' : 'red';
  }
}
