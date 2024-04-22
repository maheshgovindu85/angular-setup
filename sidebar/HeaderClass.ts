export interface HeaderClass {
    login_type_visible: boolean;
    role: string;
    id:string;
    name:string; 
    link:string; 
    icon:string;
    class:string;     
    data_target:string;     
    menu?: HeaderClass[];
    visible:boolean
    noroute?:boolean;
}