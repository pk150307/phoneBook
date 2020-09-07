import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './components/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';


// tslint:disable-next-line: semicolon
const routes: Routes = [
{ path: 'contacts', component: ContactsComponent },
{ path: 'contacts/add', component: AddContactComponent, canActivate: [ AuthGuard ]},
{ path: 'contacts/:id', component: ContactDetailsComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule { }
