import { t_base_param_types } from "../../universal_type"
import { t_resonse_cb } from "../t_resonse_cb/t_resonse_cb"


export type t_donation_service_show_param=t_base_param_types&{
    id:number|string,
    country:string,
    response_cb:(params:t_resonse_cb)=>void
}