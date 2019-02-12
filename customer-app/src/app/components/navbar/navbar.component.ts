import { Component, OnInit } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import { MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
