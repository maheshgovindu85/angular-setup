import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import * as jsonURL from '../menu.json';
import { HeaderClass } from './HeaderClass';
import { SidebarTreeComponent } from "./sidebar-tree/sidebar-tree.component";
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ABMFObjectClassService } from '../../service/abmf-object-class.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [CommonModule, SidebarTreeComponent, RouterLink, RouterLinkActive]
})
export class SidebarComponent implements OnInit {

  HeaderClasss: Array<HeaderClass> = [];
  public arrCase = [];
  activeclass: boolean;
  active_route: string;
  routeac: string
  role: any;
  constructor(
    @Inject(DOCUMENT) public document: Document,
    private router: Router,
    public _ABMFObjectClassService: ABMFObjectClassService,
    private route: ActivatedRoute,

  ) {

  }
  ngOnInit(): void {
    this.arrCase = (jsonURL).default;
    this.HeaderClasss = this.arrCase
    this.localstorage();
    let active_route_array = this.router.url;
    let data = active_route_array.split('/').slice(1)[1];
    this.active_route = data;


  }
  localstorage() {
    const localStorage = document.defaultView?.localStorage;
    if (localStorage) {
      const userData = localStorage.getItem('logindetails');
      if (userData) {
        this.role = JSON.parse(userData).role;
      }
    }
    this.HeaderClasss.forEach(element => {
      element.login_type_visible = element.role.includes(this.role);
    });
  }

  toggleChildren(node: HeaderClass) {
    if (node.noroute) {
      node.visible = !node.visible;
      return;
    }
    this.router.navigate([node.link]);
    let active_route_array = node.link;
    let data = active_route_array.split('/').slice(1)[1];
    this.active_route = data;
  }
}
