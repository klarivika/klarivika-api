import { t_donation_data_global } from "../../types";

export interface DonationDatabaseInterface{
     readonly getData:()=>t_donation_data_global
}