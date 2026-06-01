import { t_donation_controller_index_param, t_response,t_donation_controller_show_param } from "../../types";

export interface DonationControllerInterface{
   readonly Index:(params: t_donation_controller_index_param)=>t_response 
   readonly Show:(params: t_donation_controller_show_param)=>t_response
}