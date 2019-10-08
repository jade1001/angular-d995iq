import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pruduct-alerts',
  templateUrl: './pruduct-alerts.component.html',
  styleUrls: ['./pruduct-alerts.component.css']
})
export class PruductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}