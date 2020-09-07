import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: Contact;
  duplicateContactData: Contact;
  isUpdated: boolean;

  constructor(private contactService: ContactService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // read url param
    const contactID = this.route.snapshot.paramMap.get('id');

    console.log('Inside ngOnInit');
    // send ajax calls
    this.contactService.getContactById(contactID)
      .subscribe((res: Contact) => {
        console.log(res);
        this.contactData = res;
      });
  }

  editModalHandler(): void {
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  updateContactHandler(): void {
    console.log(this.duplicateContactData);

    this.contactService.updateContact(this.duplicateContactData)
      .subscribe((res: Contact) => {
        console.log(res);
        if (res) {
          this.isUpdated = true;
        }
      });
  }
}
