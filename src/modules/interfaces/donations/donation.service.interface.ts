import { t_donation_service_index_param, t_donation_service_show_param } from "../../types";

export interface DonationServiceInterface{
     Index(params: t_donation_service_index_param): void
      Show(params:t_donation_service_show_param):void
}