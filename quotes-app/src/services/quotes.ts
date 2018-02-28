import { Quote } from './../data/quotes.interface';

export class QuoteService {
  private favoriteQuotes: Quote[] = [];

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  remoteQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    })

    this.favoriteQuotes.splice(position, 1);
  }

  getFavoritesQuotes(){
    return this.favoriteQuotes.slice();
  }
}
