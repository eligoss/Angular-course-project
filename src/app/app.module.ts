import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { RecipeBookItemComponent } from './recipes/recipe-book-item/recipe-book-item.component';
import { RecipeBookDetailComponent } from './recipes/recipe-book-detail/recipe-book-detail.component';
import {ShoppingListComponent} from './shopping/shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeBookComponent } from './recipes/recipe-book.component';
import {RecipeBookListComponent} from './recipes/recipe-book-list/recipe-book-list.component';

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
