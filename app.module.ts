import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {categoriesReducer} from './categories/reducers/categories.reducer';
import {CategoriesEffect} from './categories/effects/categories.effect';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      categoriesState: categoriesReducer,
    }),
    EffectsModule.forRoot([
      CategoriesEffect
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
