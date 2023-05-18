import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewserver: boolean = false;
  serverCreationStatus: string = 'No server created';
  serverName: string = '';
  serverCreate: boolean = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewserver = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreate = true;
    this.servers.push(this.serverName);
  }

  onUpdatedServerName(event: Event) {
    // console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
