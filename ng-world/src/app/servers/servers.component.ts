import { Component } from '@angular/core';

@Component({
  selector: 'app-servers.',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent {
  serverName = '';
  onChangeInput(event: Event) {
    console.log(event);
  }
}
