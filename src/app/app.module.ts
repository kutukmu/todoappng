import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoformComponent } from './components/todoform/todoform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoitemComponent } from './components/todoitem/todoitem.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ClosemodelComponent } from './components/closemodel/closemodel.component';
import {MatDialogModule} from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';;
import { reducer } from './components/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoformComponent,
    TodolistComponent,
    TodoitemComponent,
    ClosemodelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatSlideToggleModule,
    MatDialogModule,
    StoreModule.forRoot(reducer
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
