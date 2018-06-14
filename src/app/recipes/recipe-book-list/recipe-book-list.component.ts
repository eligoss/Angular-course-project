import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-book-list',
  templateUrl: './recipe-book-list.component.html',
  styleUrls: ['./recipe-book-list.component.css']
})
export class RecipeBookListComponent implements OnInit {
  recepes: Recipe[] = [
    new Recipe('A Test', 'this is test', 'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe('A Test 2', 'this is test 2', 'https://images.media-allrecipes.com/images/56589.png')
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
