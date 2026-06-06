import { t_donation_data_profile } from "../t_donation_data_profile/t_donation_data_profile";

type t_data_country = t_donation_data_profile & {
	id?: number | string,
	country_name?:string
};


export type t_donation_data_member = t_data_country;
