import { IChip, HomeController } from '../home.component';

export class CounterController {
  parent: HomeController;
  
  isRunning: boolean = false;
  timer: ng.IPromise<void>;
  
  // timer params
  round: number = 1;
  roundTime: number = 15; // each round lasts 15 minutes
  hasBreakBeenRequested: boolean = false; // is the next round a break?
  isBreakRound: boolean = false; // is this round a break? 

  // blinds
  smallBlind: number = 25;
  bigBlind: number = 50;

  private time: number[];

  static $inject = ['$interval'];

  constructor(private $interval: ng.IIntervalService) { }

  public start() {
    this.hasBreakBeenRequested = false;
    this.isBreakRound = false;

    this.isRunning = true;

    this.time = [this.roundTime, 0];
    this.timer = this.$interval(() => this.secondElapsed(), 1000);
  }

  public stop() {
      if (this.timer) {
          this.$interval.cancel(this.timer);
          this.timer = undefined;
      }

      this.isRunning = false;

      this.hasBreakBeenRequested = false;
      this.isBreakRound = false;
  }

  public getTime() {
      let output = '';
      
      if (this.time[0] < 10) {
          output += '0';
      }
      output += this.time[0] + ':';

      if (this.time[1] < 10) {
          output += '0';
      }
      
      return output + this.time[1];
  }

  private secondElapsed() {
      if (this.time[1] <= 0) {
          this.time[0]--;
          this.time[1] = 59;
      }
      else {
          this.time[1]--;
      }

      if (this.time[0] < 0) {
          this.increaseBlinds();
          this.time = [this.roundTime, 0];
      }
  }

  private increaseBlinds() {
      if (!this.isBreakRound) {
        // Only increase the blinds when not in a break or when about to break
        this.smallBlind = this.getNextSmallBlind(this.smallBlind);
        this.bigBlind = this.smallBlind * 2;
        this.round++;
      }

      if (this.hasBreakBeenRequested) {
          this.hasBreakBeenRequested = false;
          this.isBreakRound = true;
          return;
      }

      this.isBreakRound = false;
  }

  private getNextSmallBlind(blind: number) : number {
      if (blind < 100)
        return blind + 25;
      
      if (blind < 200)
        return blind + 50;

      if (blind < 400)
        return blind + 100;

      if (blind < 1200)
        return blind + 200;
    
      if (blind < 1500)
        return 1500;
    
      if (blind < 3000)
        return blind + 500;

      if (blind < 6000)
        return blind + 1000;

      if (blind < 10000)
        return blind + 2000;

      if (blind < 30000)
        return blind + 5000;

      if (blind < 60000)
        return blind + 10000;
      
      return blind + 15000;
  }
}

export default {
  controller: CounterController,
  template: <string> require('./counter.html'),
  require: {
    parent: '^appHome'
  }
}
