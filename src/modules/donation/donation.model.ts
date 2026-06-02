import { Universal_api_util,Donation_api } from "../../utils"
import { DonationModelAbstract } from "../abstracts"
import { DonationModelInterface } from "../interfaces"
import {t_donation_data_global,t_donation_data_member,t_model_find_all_value_skip_id_param,t_model_find_by_param } from "../types"
import { DonationDatabase } from "./donation.database"
//todo komunikasi dengan database

//todo: bikin fitur select sql look a like dan group(country_name) 
// ? select id,country_name from tabel_name group(country_name)
// todo: sementara refaktor [controller return response json][controller->service->repository->model] [service melakukan bisnis logic lalu di repository[khusus komunikasi dengan databse] sintaksnya mirip dengan findAll,findAllSkipId] [repository hanya boleh perform sql syntaks lalu hasilnya dilempar ke service][model menyediakan validasi sql sintaks untuk menyeleksi field dan groupby diwajibkan jika tidak throw error(group() functions is required in the repository {name})]
class DonationModel extends DonationModelAbstract implements DonationModelInterface{
    protected readonly tabel_name='donation'
    protected readonly database:DonationDatabase=new DonationDatabase()
    protected readonly donation_util=Donation_api
    public readonly getData=():t_donation_data_global=>this.database.getData()
    public readonly findAll=():t_donation_data_global=>{
        return this.database.getData()
    }
    public readonly findAllValueSkipId=({query}:t_model_find_all_value_skip_id_param):t_donation_data_global=>{
                const data=this.database.getData()
                // const query=""
                const data_person:t_donation_data_member[]=[]
          //todo: validasi untuk orang
          Object.values(data.countries).forEach(country_data=>{
                Object.values(country_data.persons.datas).forEach(person_data=>{
                    //? bikin skiping field untuk deep_Search
                    const validate_search=Universal_api_util.deep_search({value:person_data,query,skiping_field:['id']})
                    if(validate_search){
                        data_person.push(person_data)
                    }
                })
          })

            const grouped_data=this.donation_util.group_by({datas:data_person,group_by:"country_name"})
        return this.donation_util.reformat_mass_country({
                    country_Data:grouped_data
                })
    }
    /**
     * @desc to find data based on object given data object by developer
     * @param param 
     */
    public readonly findBy=({param,logic='and'}:t_model_find_by_param):t_donation_data_global=>{
                //todo param
                //? ambil data sampai level profile lalu di reformat pakai group by method
                //? parsial dan logika pakai or
                const params=param
                const search_values:Array<{k:string,v:any}|string|number>=[]
                for(const [key,value] of Object.entries(params)){
                        // if(key === 'id')continue
                        search_values.push({k:key,v:value})
                }
                const result_datas:t_donation_data_member[]=[]
                const datas=this.database.getData()
                Object.values(datas.countries).forEach((data_country)=>{
                    data_country.persons.datas.forEach(person_Data=>{
                        const search_logic=Universal_api_util.deep_search2({data:person_Data,queries:search_values,logic,skiping_field:[]})
                        if(search_logic){
                            result_datas.push(person_Data)
                        }
                    })
                })
                    // console.log(JSON.stringify(result_datas))
                const grouped_data=this.donation_util.group_by({group_by:'country_name',datas:result_datas})
                return this.donation_util.reformat_mass_country({
                    country_Data:grouped_data
                })
    
    //todo maka dia akan jadi some[or] atau every[and] lalu query akan di iterasi jadi key dan value dengan logic key === value atau agar parsial gunakkan teknik string dan includes gweh suka parsial karena mirip ama sql like %what data should i search?% dan dia gak strict gunakkan deep search untuk menelusuri ranting bercabang [nested object maupun array] 
        
    }
}

export {DonationModel}