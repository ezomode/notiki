import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChronoComponent } from './chrono/chrono.component';
import { MessageAddComponent } from './message-add/message-add.component';

const routes: Routes = [
  {
    path: '',
    component: ChronoComponent,
    data: { title: 'Chrono Messages' }
  },
  {
    path: 'msg/add',
    component: MessageAddComponent,
    data: { title: 'Add message' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
