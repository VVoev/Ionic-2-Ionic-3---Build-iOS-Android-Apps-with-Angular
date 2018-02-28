import { QuoteService } from './../../services/quotes';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: any;
  constructor(private navCtrl: NavController,
     private navParams: NavParams,
      private alertCtrl: AlertController,
      private quoteService:QuoteService) {
  }

  onAddtoFavorite(quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'is this the quote?',
      buttons: [
        {
          text: 'Yes go ahead',
          handler: () => {
           this.quoteService.addQuoteToFavorites(quote);
          }
        },
        {
          text: 'No i change my mind',
          role:'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        },
      ]
    });

    alert.present();
  }


  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
}
