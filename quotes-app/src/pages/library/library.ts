import { QuotesPage } from './../quotes/quotes';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import quotes from '../../data/quotes';




@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quotesPage = QuotesPage;
  quoteCollection: { category: string, quotes: Quote[], icon: string }[];

  ngOnInit(){
    this.quoteCollection = quotes;
  }

}
