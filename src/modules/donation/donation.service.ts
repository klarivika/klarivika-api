import { Donation_api } from "..";
import { Universal_api_util } from "../../utils";
import { DonationServiceAbstract } from "../abstracts";
import { e_status_code } from "../enum";
import { DonationServiceInterface } from "../interfaces";
import { t_donation_service_index_param, t_q_params, t_fiture_q_search_country_param, t_fiture_q_search_param, t_donation_service_show_param } from "../types";
import { DonationModel } from "./donation.model";
import { DonationRepository } from "./donation.respository";

//? repository memanggil model untuk komunikasi ke database
//?
//? controller memanggil service
//? callback based untuk mengoper status codennya
//? service menerima perintah dari controller ->service->repository->model->database 
// todo: alurnya controller->service->repository->model->database
// type  t_donation_service_index_param
class DonationService extends DonationServiceAbstract implements DonationServiceInterface{
	protected readonly donation_util:Donation_api=Donation_api
	protected readonly model:DonationModel=new DonationModel()
    protected readonly repository:DonationRepository=new DonationRepository()
	constructor(){
		super()
	}
protected readonly FitureQSearchCountry=({cb_response,id,data_models,q_params_datas,country}:t_fiture_q_search_country_param)=>{
            this.QSearchCountry({
                cb_response({ data_models, message_response, status_code_response, success_response }) {
                    cb_response({
                        data_models,
                        message_response,
                        status_code_response,
                        success_response
                    })
                },
                country,
                data_models,
                id,
                model_find:this.model,
                q_params_datas
            })

    }
    protected readonly FitureQSearch=({q_params_datas,data_models,cb_response}:t_fiture_q_search_param)=>{
       this.QSearch({
        cb_response({data_models,message_response,status_code_response,success_response}){
            cb_response({data_models,message_response,status_code_response,success_response})
        },
        data_models,
        model_find:this.model,
        q_params_datas
       })
    }
	
	public readonly Index=({
		    status,
            q_params,
            response_cb
	}: t_donation_service_index_param): void =>{
		//? q_search_country:string,
            // ?q_search:string global search
            //? 
            let query=""
            let status_code:number=e_status_code.SuccessCode
            let datas=this.model.findAll()
            let message:string=e_status_code.SuccessMessage
            let success:boolean=true
                //? kalau ada q_params ada isinya
                //?q_search adalah global search except id ya guys ya
                    const data_q_param:t_q_params|undefined=q_params
                    this.FitureQSearch({cb_response({ message_response, status_code_response, success_response,data_models }) {
                        status_code=status_code_response
                        success=success_response
                        message=message_response
                        datas=data_models
                    },data_models:datas,q_params_datas:data_q_param})
                    // todo: kalau q_search_country ada mak global search akan ditimpa oleh search country dan global search tidak akan valid dan dia akan ke overide
                if(data_q_param?.q_search_country !== undefined){
                        query=data_q_param?.q_search_country
                    datas=this.model.findBy({param:{country_name:query}})
                        if(Object.values(datas.countries).length===0){
                            //  Donation_api.country_not_found_response({message,status_code,success})
                            Universal_api_util.responses({cb({message_response,status_code_response,success_response}){
                                success=success_response
                                message=message_response
                                status_code=status_code_response 
                            },code:404})
                        }
                }
            status({status_number:status_code})
            response_cb({
                datas,
                message,
                status:status_code,
                success
            })
	}
	public readonly Show=({
		    status,
            q_params,
            response_cb,
            country,
            id
	}: t_donation_service_show_param): void =>{
		  let status_code:number=e_status_code.SuccessCode
            let message:string=e_status_code.SuccessMessage
            let success:boolean=true
            let datas=this.model.findBy({param:{id:id,country_name:country}})
            const q_params_datas:t_q_params|undefined=q_params
                // console.log("Data awal setelah findBy:", datas)

                //todo : gunanya untuk response 404 jika user asal asalan input country yang bukan merupakan negara
                // ? jika q_search_country ada 
                this.FitureQSearchCountry({
                    cb_response({data_models,message_response,status_code_response,success_response}){
                        datas=data_models
                        success=success_response
                        message=message_response
                        status_code=status_code_response 
                        // console.log("Data akhir setelah findBy:", datas)
                    }
                ,data_models:datas,country,q_params_datas,id})

                status({status_number:status_code})
            response_cb({
                datas,
                message,
                status:status_code,
                success
            })
	}
}

export { DonationService };
