import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainContentComponent } from './main-content/main-content.component';
import { EmailSentComponent } from './email-sent/email-sent.component';

const routes: Routes = [
  { path: '', component: MainContentComponent},
  { path: 'sent', component: EmailSentComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainContentComponent, PageNotFoundComponent, EmailSentComponent];
