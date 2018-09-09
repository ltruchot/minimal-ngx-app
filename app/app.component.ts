import { Component } from '@angular/core';

interface IAppInfos {
  version: number;
  theme: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Quizz generator';
  isStarted = false;
  appInfos: IAppInfos;
  user: string;
  private score = 0;

  constructor() {
    setTimeout(() => {
      this.appInfos = {
        version: 1,
        theme: 'herbalism',
      };
    }, 2);
  }

  startGame() {
    this.isStarted = true;
  }

  endGame() {
    window.alert(`Game over ${this.user}. Score: ${this.score}`);
    this.isStarted = false;
  }
}
