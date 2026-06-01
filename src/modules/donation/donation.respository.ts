import { DonationRepositoryAbstract } from "../abstracts"
import { DonationRepositoryInterface } from "../interfaces"
import {  t_donation_data_global, t_model_find_all_value_skip_id_param, t_model_find_by_param } from "../types"
import { DonationModel } from "./donation.model"




class DonationRepository extends DonationRepositoryAbstract implements DonationRepositoryInterface{
    //todo komunikasi antara model dan controller
    //todo: kode untuk validasi status code message dll
    protected readonly model=new DonationModel()
    constructor(){
        super()
    }
   readonly getData=(): t_donation_data_global=> {
        throw new Error("Method not implemented.")
    }
    readonly findAll=(): t_donation_data_global=> {
        throw new Error("Method not implemented.")
    }
    readonly findAllValueSkipId=(params: t_model_find_all_value_skip_id_param): t_donation_data_global =>{
        throw new Error("Method not implemented.")
    }
    readonly findBy=(params: t_model_find_by_param): t_donation_data_global=> {
        throw new Error("Method not implemented.")
    }
    


}




export {
    DonationRepository
}