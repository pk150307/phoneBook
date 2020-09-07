import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
      .greenText{
        color: green;
      }
    `
  ]
})
export class ConceptsComponent implements OnInit {
/*String interpoltion related*/

  appName = 'Phone Book App!';
  exp = 20;
  /*Property Binding */

  companyName = 'L & T Construction';
  isLoggedIn = true;

  courseName = 'Angular';

  profileName: any;

  skillsList: string[] = ['html', 'css', 'js'];
  constructor() { }

  ngOnInit(): void {
  }

  isAuth(): boolean{
    return !this.isLoggedIn;
  }

  // clickHandler(evt): void{
  //   console.log(evt);
  //   alert('clicked');
  // }

  profileLoadedHandler(evt): void{
    console.log(evt);
    this.profileName = evt;
  }
  // tslint:disable-next-line: typedef
  setSaving(element, text){
    element.textContent = text;
    element.disabled = true;
  }

}

