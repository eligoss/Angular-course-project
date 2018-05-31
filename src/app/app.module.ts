import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { RecipeBookItemComponent } from './recipe-book/recipe-book-item/recipe-book-item.component';
import { RecipeBookDetailComponent } from './recipe-book/recipe-book-detail/recipe-book-detail.component';
import {ShoppingListComponent} from './Shopping/shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './Shopping/shopping-list-edit/shopping-list-edit.component';
import {RecipeBookListComponent} from './recipe-book/recipe-book-list/recipe-book-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeBookItemComponent,
    RecipeBookListComponent,
    RecipeBookDetailComponent,
    RecipeBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
