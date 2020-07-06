import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrmComponent } from './comon/home/frm/frm.component';
import { MainComponent } from './comon/home/main/main.component';
import { PageComponent } from './comon/home/page/page.component';
import { FromCComponent } from './comon/home/frm/from-c/from-c.component';
import { FromBComponent } from './comon/home/frm/from-b/from-b.component';
import { ListComponent } from './comon/home/list/list.component';



const routes: Routes = [
  {
    path: 'home', component: MainComponent,
    children: [
      {
        path: 'fromsmain', component: FrmComponent,
        children: [
       
        ]
      },

      { path: 'PageComponent', component: PageComponent },
      { path: 'FromBC', component: FromBComponent },
      { path: 'FromCC', component: FromCComponent },
      { path: 'List', component:  ListComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
     
    ]
  },
 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
