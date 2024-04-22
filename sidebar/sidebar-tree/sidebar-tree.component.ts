import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderClass } from '../HeaderClass';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-tree',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink],
  templateUrl: './sidebar-tree.component.html',
  styleUrl: './sidebar-tree.component.scss'
})
export class SidebarTreeComponent {
  @Input() data?: HeaderClass[];
  
  constructor( private router: Router, ) {
  }
  toggleChildren(node: HeaderClass) {
   if (node.noroute) {
     node.visible = !node.visible;
     return;
   }
   this.router.navigate([node.link]);
 }
}
