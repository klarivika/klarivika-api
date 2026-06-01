import { t_donation_data_global, t_model_find_all_value_skip_id_param, t_model_find_by_param } from "../../types";

export interface DonationRepositoryInterface {
   readonly getData:()=>t_donation_data_global
   readonly findAll:()=>t_donation_data_global
   readonly findAllValueSkipId:(params:t_model_find_all_value_skip_id_param)=>t_donation_data_global,
   readonly findBy:(params:t_model_find_by_param)=>t_donation_data_global
}