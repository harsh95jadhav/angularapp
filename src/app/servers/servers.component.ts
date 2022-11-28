import { Component } from "@angular/core";

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class warningAlert{
 name: string = "codemind"
 
 alloeNewServer: boolean= true;
 serverCreationStatus: string = 'server not created';
 serverName: string = 'codemind.com';


 constructor() {}
 onCreateServer(){
    this.serverCreationStatus= 'server created'
 }

}
