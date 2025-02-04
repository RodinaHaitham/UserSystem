import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: false,
  
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverId:number = 2025;
  serverStatus: string = 'Rody';
  allowAddServer:boolean=false;
  getServerStatus()
  {
    return this.serverStatus;
  }
}
