import { ChangeDetectorRef, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { HeaderClass } from './HeaderClass';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import * as jsonURL from 'src/assets/menu.json';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { HeaderProfileComponent } from 'src/app/Tank-Common/Components/header-profile/header-profile.component';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['../../../../styles.scss','../../../../common.css','side-bar.component.scss']
})

export class SideBarComponent implements OnInit {
  // @ViewChild(HeaderProfileComponent) ProfileCompViewChild: HeaderProfileComponent;
  @Input() inputSideStatus: boolean = true


  userType: any;
  admin_dropdown: any
  setup_dropdown: any
  customer_dropdown: any
  user_dropdown: any
  queryParam;
  password_dropdown: boolean;
  source: NodeJS.Timeout;
  public theme: string;
  currIcon: string = "light_mode";
  isdark_theme: boolean = false;
  isopen: boolean = false;
  refreshTheme:string='true';
  display: boolean = false;
  PmtprofileForm: FormGroup;
  firstletter = "";
  profileHeader: any;
  show: boolean = false;


  public static readonly DARK_THEME = 'dark-theme';
  public static readonly LIGHT_THEME = 'light-theme';
  public static readonly DARK_THEME_DARK = 'dark';
  public arrCase = [];
  HeaderClasss: Array<HeaderClass> = [];
  sidebar_openclose: boolean = true;


  constructor(public fb: FormBuilder, private domSanitizer: DomSanitizer, @Inject(DOCUMENT) private document: Document, 
  public activatedRoute: ActivatedRoute, private matIconRegistry: MatIconRegistry, 
  private router: Router, 
  private ref: ChangeDetectorRef
  ) {
    this.matIconRegistry.addSvgIcon(
      `pmt_menu`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Img/tank_logo.svg")
    );
    let html = '';
    let menudiv = '';
    let menudivid = '';
    this.theme = this.document.documentElement.classList.contains(SideBarComponent.DARK_THEME) ? SideBarComponent.DARK_THEME : SideBarComponent.LIGHT_THEME;
    this.arrCase = (jsonURL as any).default;

  }

  ngOnInit(): void {
    this.isDark()
    this.userType = localStorage.getItem('user_type');
    this.PmtprofileForm = this.fb.group({
      id: [0],
      name: [''],
      companyName: [''],
      companyWebsite: [''],
      industrytype: [''],
      department: [''],
      designation: [''],
      email: ['']
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.queryParam = params['master'];
    })
    this.Getprivillage(1, 1);
    this.profiledata();
  }

  Getprivillage(profileid, roleid) {

    this.HeaderClasss = this.arrCase;
    this.ref.detectChanges();
  }

 


  get_active_style() {
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("nav-link");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
  }

  
  toggleChildren(node: any) {
    node.visible = !node.visible;
  }

  
  View_plan() {
    this.show = !this.show;
    this.PmtprofileForm.patchValue(this.profileHeader);
  }

  profiledata() {
    
  }

  User_Profile() {
    this.display = !this.display;
  }

  razorpay() {
    this.router.navigate(['/pmt-management/account1']);
  }


  strip() {
    this.router.navigate(['/pmt-management/account2']);
  }

  
  isDark(){
    if (localStorage.getItem('isdark')){
      this.darkTheme()
    }else{
      this.lightTheme()
    }
  }

  lightTheme() {
    this.document.documentElement.classList.remove(SideBarComponent.DARK_THEME);
    this.document.documentElement.classList.add(SideBarComponent.LIGHT_THEME);
    this.theme = SideBarComponent.LIGHT_THEME;
    this.currIcon = "light_mode";
    localStorage.removeItem('isdark')
  }

  darkTheme() {
    this.document.documentElement.classList.remove(SideBarComponent.LIGHT_THEME);
    this.document.documentElement.classList.add(SideBarComponent.DARK_THEME);
    this.theme = SideBarComponent.DARK_THEME_DARK;
    this.currIcon = "dark_mode";
    localStorage.setItem('isdark',this.refreshTheme)
  }

}
