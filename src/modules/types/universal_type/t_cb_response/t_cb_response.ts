import { t_cb_response_param } from "../t_cb_response_param/t_cb_response_param"

export type t_cb_response={
    cb_response:({data_models,message_response,status_code_response,success_response}:t_cb_response_param)=>void
}