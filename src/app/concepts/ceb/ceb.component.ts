import { Component, OnInit, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  /*Step 1 : create a custom event -- create an obj for EventEmmiter*/
  @Output() profileLoaded: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    /*lifecycle hook */
    console.log('Inside ngOnInit');
    /* ideal place for AJAX calls*/
  }

  sendDataHandler(): void{
    /*Step 3 : Emit the custom event. */
    this.profileLoaded.emit('Piyush');
    /*Step 4 :  Sending piyush to parent*/
  }

}
