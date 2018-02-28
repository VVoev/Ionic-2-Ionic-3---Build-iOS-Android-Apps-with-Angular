import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-tabs',
  templateUrl: 'page.tabs.html',
})
export class TabsPage  {
  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;

}
