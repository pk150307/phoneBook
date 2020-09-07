import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  /*step 1 : creating a custom property */
  @Input() age = 25;


  constructor() { }

  ngOnInit(): void {
  }

}
