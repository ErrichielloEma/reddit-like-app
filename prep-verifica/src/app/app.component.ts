import { Component } from '@angular/core';
import { SpamComponent } from './spam/spam.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spamming = new Array<string>(); //Dichiaro un array di stringhe
  addSpamming(spam: HTMLInputElement, numero: HTMLInputElement): boolean {
    let cont = Number(numero.value);
    console.log(`spam: ${spam.value} and numero: ${numero.value}`);
    for(let i:number =0; i< cont; i++) {
       this.spamming.push(i + " " + spam.value);
    }
  return false;
  }
}

