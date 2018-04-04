import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

@Injectable()
export class LogEventosProvider {

  constructor(public fba: FirebaseAnalytics) {
    console.log('Hello EventLoggerProvider Provider');
  }

  logButton(name:string,value:any){
    this.fba.logEvent(name, { pram:value })
      .then((res: any) => {console.log(res);})
      .catch((error: any) => console.error(error));
  }
}
