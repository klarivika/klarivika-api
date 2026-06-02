import { Donation_api } from "../../utils"
import { DonationRepositoryAbstract } from "../abstracts"
import { DonationRepositoryInterface } from "../interfaces"
import {  t_donation_data_global, t_model_find_all_value_skip_id_param, t_model_find_by_param } from "../types"
import { DonationModel } from "./donation.model"




class DonationRepository extends DonationRepositoryAbstract  implements DonationRepositoryInterface{
    //todo komunikasi antara model dan controller
    //todo: kode untuk validasi status code message dll
    protected readonly model:DonationModel=new DonationModel()
    protected readonly donation_apis=Donation_api
    protected readonly tabel_name="donation"
    constructor(){
        super()
    }
   readonly getData=(): t_donation_data_global=> {
       const datas=Object.values(this.model.getData().countries).map(val=>{
            const data_return:Record<string,any>={}
             Object.values(val.persons.datas).map((person)=>{
                   Object.entries(person).forEach(([key ,person])=>{
                            data_return[key]=person
                   })
            })//.map(val=>val)
        return data_return
       })
       const sintaks=this.donation_apis.sql_syntaxs({data:datas,query:"select id,name from donation groupBy(country_name)",tabel_name:this.tabel_name})
       return {countries:{persons:{persons:{datas:sintaks}}}}
        // throw new Error("Method not implemented.")
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