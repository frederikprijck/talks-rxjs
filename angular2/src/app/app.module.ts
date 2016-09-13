import { NgModule }                                     from '@angular/core';
import { BrowserModule }                                from '@angular/platform-browser';
import { FormsModule }                                  from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend }                       from '@angular/http';
import { InMemoryBackendService, SEED_DATA }            from 'angular2-in-memory-web-api';
import { InMemoryDataService }                          from './api/in-memory-data.service';

import { AppComponent }                                 from './app.component';
import { Routing }                                      from './app.routing';
import * as person                                      from './person';
import { OrderByComponent, SearchComponent }                             from './shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    HttpModule
  ],
  providers: [
    person.PersonService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }     // in-mem server data
  ],
  declarations: [
    AppComponent,
    person.PersonComponent,
    person.PersonDetailComponent,
    OrderByComponent,
    SearchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

