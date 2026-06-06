import { t_donation_data_global } from "../../donation";
import { t_cb_response } from "../t_cb_response/t_cb_response";
import { t_q_params } from "../t_q_params/t_q_params";

export type t_fiture_q_search_param=t_cb_response&{
    q_params_datas:t_q_params|undefined,
    data_models:t_donation_data_global,
    
}