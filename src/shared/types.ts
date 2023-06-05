export enum SelectedPage {
    Home = "home",
    OurServices = "ourservices",
    LaundryTips = "laundrytips",
    ContactUs = "contactus",
}
  
export interface OurServicesType {
    title: string;
    description: string;
}
  
export interface LaundryTipsType {
    number: string;
    tip: string;
  }