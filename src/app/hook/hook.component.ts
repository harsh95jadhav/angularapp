import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnInit, OnChanges {
  @Input() userid: number;
pi;
  constructor() {
    this.pi= 3.14;
    console.log("HookComponent constructor called");
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    for (const propname in changes) {
      // const prop = changes[propname]
      console.log(changes);
      

      // const{previousValue,currentValue,firstChange}=prop;
      // console.log(`prop name ${propname}`)
      // console.log(`previous value ${previousValue}`);
      // console.log(`current change ${currentValue}`);
      // console.log(`first change ${firstChange}`);
            
      

    }
    console.log("HookComponent ngOnChanges called");
    
  }

  ngOnInit() {
    console.log("HookComponent ngOnInit called");
    
  }

}
