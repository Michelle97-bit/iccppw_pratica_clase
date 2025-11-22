import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  counter = signal(0);

  incrementar(){
    this.counter.update(current => current +1);
  }


  decrementar(){
    this.counter.update(current => {
      if(current > 0){
        return current -1;
      }
      return 0;
    });
  }
  reset(){
    this.counter.set(0);
  }
}
