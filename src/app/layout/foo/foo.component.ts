import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  public something: string = 'This is foo';
  
  constructor() { }

  ngOnInit() {
  }

}
