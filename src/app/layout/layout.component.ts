import { FooComponent } from './foo/foo.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild(FooComponent, null) fooComponent: FooComponent;

  constructor() { }

  ngOnInit() {
    console.log(this.fooComponent.something);
  }

}
