import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {LogEventosProvider} from '../../providers/log-eventos/log-eventos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform, public logger: LogEventosProvider) {

  }

  logClick() {
    this.logger.logButton('homeButton', {pram: "paramValue"})
  }
}
