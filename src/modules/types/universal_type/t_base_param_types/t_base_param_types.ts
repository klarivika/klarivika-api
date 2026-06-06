import { t_q_params } from ".."

 type t_status_number_param={
    status_number:number | unknown
}
export type t_base_param_types={
    status:(({status_number}:t_status_number_param)=>void),
    q_params?:t_q_params
}