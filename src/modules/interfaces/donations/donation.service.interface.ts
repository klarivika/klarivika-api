import { t_donation_service_index_param, t_donation_service_show_param } from "../../types";

export interface DonationServiceInterface{
      readonly Index:(params: t_donation_service_index_param)=> void
      readonly Show:(params:t_donation_service_show_param)=>void
}