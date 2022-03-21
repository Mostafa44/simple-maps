import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from "./User";
const user= new User();
const company = new Company();


const custMap=new CustomMap('map');
custMap.addMarker(user);
custMap.addMarker(company);