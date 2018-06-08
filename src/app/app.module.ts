import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './addcomponent/add.component';
import { SubComponent } from './subcomponent/sub.component';
import { MulComponent } from './mulcomponent/mul.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {DndModule} from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    SubComponent,
    MulComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DndModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
 
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
