import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './comon/home/main/main.component';
import { PageComponent } from './comon/home/page/page.component';
import { FrmComponent } from './comon/home/frm/frm.component';
import { ListComponent } from './comon/home/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatreialModule } from './module/matreial/matreial.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FromBComponent } from './comon/home/frm/from-b/from-b.component';
import { FromCComponent } from './comon/home/frm/from-c/from-c.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageComponent,
    FrmComponent,
    ListComponent,
    FromBComponent,
    FromCComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatreialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
