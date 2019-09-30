import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftContentComponent } from './left-content/left-content.component';
import { RightContentComponent } from './right-content/right-content.component';
import { FormComponent } from './form/form.component';
import { QuoteComponent } from './quote/quote.component';
import { ScopeComponent } from './scope/scope.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    LeftContentComponent,
    RightContentComponent,
    FormComponent,
    QuoteComponent,
    ScopeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
