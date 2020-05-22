import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ChronoComponent} from './chrono/chrono.component';
import {MessageAddComponent} from './message-add/message-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {AlertComponent} from './alert/alert.component';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    ChronoComponent,
    MessageAddComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
