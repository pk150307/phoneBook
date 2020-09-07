import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

// Decorators
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // create
  createContact(contactData: any): any { // 1. get the data from comp
    console.log(contactData);
    // 2. send the data to REST API
    // 2.1 What is the REST API URL?  http://jsonplaceholder.typicode.com/users
    // 2.2 What is the HTTP Method?   POST
    // 2.3 What's the REST API client?  HttpClient
    return this.http.post(this.REST_API_URL, contactData)
      .pipe(map((res: any) => { // 3. get the resp from REST API
        console.log(res);
        return res;  // 4. send the resp to the comp.
      }));
  }

  // read all contacts
  getContacts(): Observable<Contact[]> { // 1. get the req from comp
    console.log('Inside getContacts');
    // 2. send it to the rest api- REST_API_URL, Method: GET, Use http client
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: any) => { // 3. get the resp from REST API
        console.log(res);
        return res;  // 4. send the resp to the comp.
      }));
  }

  // read contact details
  getContactById(id: string): any {
    console.log(id);
    // REST API URL - http://jsonplaceholder.typicode.com/users/1
    const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${id}`;

    return this.http.get(CONTACT_DETAILS_URL)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  // update
  updateContact(updatableContactData): any {
    console.log(updatableContactData);
    const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${updatableContactData.id}`;
    return this.http.put(CONTACT_DETAILS_URL, updatableContactData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }
}
