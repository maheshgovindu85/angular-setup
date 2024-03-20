export interface HeaderClass {
    id:string;
    name:string; 
    link:string; 
    icon:string;
    class:string;     
    data_target:string;     
    menu?: HeaderClass[];
    visible:boolean
}