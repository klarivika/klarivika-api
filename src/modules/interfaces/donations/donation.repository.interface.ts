import { t_donation_data_global, t_donation_repository_show_param, t_model_find_all_value_skip_id_param, t_model_find_by_param, t_response } from "../../types";

export interface DonationRepositoryInterface {
    getData():t_donation_data_global
    findAll():t_donation_data_global
    findAllValueSkipId(params:t_model_find_all_value_skip_id_param):t_donation_data_global,
    findBy(params:t_model_find_by_param):t_donation_data_global
}