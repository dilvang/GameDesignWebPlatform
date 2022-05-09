import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'Game',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title: string = 'Game';
  body:  string = 'This page is about the game entiiiiirely';
  message: string;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
