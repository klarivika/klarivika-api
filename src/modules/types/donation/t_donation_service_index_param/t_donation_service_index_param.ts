import { t_base_param_types } from "../../universal_type"
import { t_resonse_cb } from "../t_resonse_cb/t_resonse_cb"


type t_donation_service_index_param=t_base_param_types&{
    response_cb:(params:t_resonse_cb)=>void
}

export {
    t_donation_service_index_param
}