import { t_fiture_q_search_param } from "../t_fiture_q_search_param/t_fiture_q_search_param"

export type t_fiture_q_search_country_param=t_fiture_q_search_param&{
    country:string |undefined,
    id:number|undefined|string
}