import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindingass',
  templateUrl: './databindingass.component.html',
  styleUrls: ['./databindingass.component.css']
})
export class DatabindingassComponent implements OnInit {

  userName: string = 'Javascript';
  allowServer: boolean = true
  serverStory: string = 'Username is NOT an empty string';
  onAllowServer: string = " ";

  constructor() {}
    onServerStory(){
      this.serverStory = 'Username is NOT an empty string'
    }
    onServerStoryClick(){
      this.onAllowServer = "Empty string"
    }

  

  ngOnInit() {
  }

}
