import { Universal_api_util } from "../../../utils";
import { DonationModel } from "../../donation/donation.model";
import { t_fiture_q_search_country_param, t_fiture_q_search_param } from "../../types";

type t_q_search_country_param=t_fiture_q_search_country_param&{
    model_find:DonationModel
}
type t_q_search_param=t_fiture_q_search_param&{
    model_find:DonationModel
}
export abstract class BaseAbstract{
    protected readonly QSearchCountry=({cb_response,country,data_models,id,q_params_datas,model_find}:t_q_search_country_param)=>{
         //! potensi bug kalau country_name search beda misal mahira maka dia akan memunculkan datanya
                const negaras:Array<string|undefined>=[]
                for(const data_country of Object.values(model_find.findAll().countries)){
                    Object.values(data_country.persons.datas).forEach(person_data=>{
                        //? negara belum ada di dalam array
                        if(!negaras.includes(person_data.country_name)){
                            negaras.push(person_data.country_name)
                        }
                    })
                }
                
                 /**
                 * 
                 * @desc it validate and throw 404 data not found when validate country is false
                 * @desc it for validate country when country is not country name and return 404
                 * @desc q_param is stand for query_parameter
                 */
                const country_not_found_q_param_response=({validate_country}:{validate_country:boolean})=>{
                    if(!validate_country){
                        data_models=model_find.findBy({param:{not_found:"data not found!"}})
                         Universal_api_util.responses({cb({message_response,status_code_response,success_response}){
                                cb_response({data_models,message_response,status_code_response,success_response})
                         },code:404})
                         return
                    }
                }
                // todo: kalau country tidak ngaco dan id itu datanya ada dan bukan undefined
                 //todo: buat validasi country dengan deep search untuk validasi kalau semisal user asal asalan isi dinamic param country misal[jaka] maka akan digagalkan dan diberikan not found 404
                    
                const validate_country=Universal_api_util.deep_search({value:negaras,query:country!,skiping_field:[]})
                // todo: kalau dia tepat [ada id dan country tapi tidak ada query parameter untuk search negara] maka kirimkan datanya dan user tidak asal isi negara dengan nilai yang bukan negara
                if(validate_country && id !== undefined && country !==''){
                    data_models=model_find.findBy({param:{country_name:country!,id:id}})
                       
                    if(Object.values(data_models.countries).length <1){
                         data_models=model_find.findBy({param:{not_found:"data not found!"}})
                        Universal_api_util.responses({cb({ status_code_response, message_response, success_response }) {
                        
                              cb_response({data_models,message_response,status_code_response,success_response})
                         },code:404})
                    }else{
                         Universal_api_util.responses({cb({ status_code_response, message_response, success_response }) {
                        
                              cb_response({data_models,message_response,status_code_response,success_response})
                      },code:200})
                    }
                }
                // ! bagaimana caranya jika di route donation/:id/:country kalau ada q_search_country dia akan mencari negara dan mengabaikan :country 

                //todo : lempar error 404 karena data query bukan merupakan country
                //todo:country_not_found() hanya memvalidasi jika ada query parameter q_search_country
                const country_not_found=()=>{
                   country_not_found_q_param_response({validate_country:validate_country})
                if(q_params_datas?.q_search_country !== undefined){
                    //? kalau ada dinamic_param:id
                    let data_find_by:{
                        id?:number|string,country_name?:string
                    }={id:id,country_name:q_params_datas?.q_search_country}
                        //todo: clearing id jika id undefined
                        if(id === undefined){
                            data_find_by=Object.entries(data_find_by)
                            .reduce((acc,[key,value])=>{
                                    if(key !== 'id')acc[key]=value
                                return acc
                            },{} as Record<string,string|number|undefined>)
                        }
                    
                    //?kalau input user ngaco dan bukan merupakan country
                    const validate_country_from_q_param=Universal_api_util.deep_search({value:negaras,query:q_params_datas?.q_search_country,skiping_field:[]})
                    /**
                     * todo : jika q_search_country ada dan isinya bukan merupakan negara
                     */
                  country_not_found_q_param_response({validate_country:validate_country_from_q_param})
                  data_models=model_find.findBy({param:data_find_by})
                //   todo: jika q_search_country ada dan isinya merupakan negara 
                  if(validate_country_from_q_param){

                      Universal_api_util.responses({cb({ status_code_response, message_response, success_response }) {
                        
                              cb_response({data_models,message_response,status_code_response,success_response})
                      },code:200})
                       
                  }

                }

                }

            
                country_not_found()
    }
    protected readonly QSearch=({cb_response,data_models,q_params_datas,model_find}:t_q_search_param)=>{
         if(q_params_datas?.q_search !== undefined){
                    data_models=model_find.findAllValueSkipId({query:q_params_datas.q_search})
                    if(Object.values(data_models.countries).length===0){
                         Universal_api_util.responses({cb({message_response,status_code_response,success_response}){
                                cb_response({message_response,status_code_response,success_response,data_models})
                         },code:404})
                        }else{
                            data_models=model_find.findAllValueSkipId({query:q_params_datas.q_search})
                            Universal_api_util.responses({cb({message_response,status_code_response,success_response}){
                                cb_response({message_response,status_code_response,success_response,data_models})
                         },code:200})
                        }
                        
                        }
    }
     protected abstract FitureQSearchCountry(params:t_fiture_q_search_country_param):void
     protected abstract FitureQSearch(params:t_fiture_q_search_param):void
    constructor(){}
}