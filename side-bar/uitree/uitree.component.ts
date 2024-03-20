import { Component, Input } from '@angular/core';
import { HeaderClass } from '../HeaderClass';

@Component({
  selector: 'app-uitree',
  templateUrl: './uitree.component.html',
})
export class UitreeComponent {
  @Input() data: HeaderClass[];

 
  constructor() {

    
    
   }
   toggleChildren(node: any) {
    node.visible = !node.visible;
  }
}
