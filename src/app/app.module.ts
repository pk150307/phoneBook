import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/cpb/cpb.component';
import { CebComponent } from './concepts/ceb/ceb.component';
import { ContactsModule } from './contacts/contacts.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    LoginComponent,
    SignupComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ContactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
