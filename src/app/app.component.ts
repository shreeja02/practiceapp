import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(){}
  title = 'angularDemoApp';
  movies = [
    {
      title: 'Episode I - The Phantom Menace',
      poster: 'abc'
    },
    {
      title: 'Episode II - Attack of the Clones',
      poster: 'xyz'
    },
    {
      title: 'Episode III - Revenge of the Sith',
      poster: 'hij'
    },
    {
      title: 'Episode IV - A New Hope',
      poster: 'pqr'
    }
  ];
}



