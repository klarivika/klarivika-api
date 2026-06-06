import { t_base_param_types } from "../.."

 type t_donation_controller_show_param=t_base_param_types&{
    id:number|string,
    country:string
 }

 export {
    t_donation_controller_show_param
 }