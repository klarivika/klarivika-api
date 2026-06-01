import { t_api_format_param, t_donation_data_global, t_response,t_donation_api_reformat_param, t_donation_country_name,t_donation_data_member, t_donation_data_global_paginate } from "../modules/types"


class Donation_api{
    constructor(){}

     static format({
        success,
        message,
        status,
        data
    }:t_api_format_param):t_response {
        return {
            success: success,
            message: message,
            status,
            data: data
        }
    }


static reformat_single_country({country,donation_data_profile}:t_donation_api_reformat_param):t_donation_data_global{
  return  {
      countries:{
        [country]:{
            persons:{
                datas:[
                    {...donation_data_profile}
                  ]
                }
            }
         }
        }
    }

static reformat_mass_country({country_Data}:{country_Data:t_donation_country_name}):t_donation_data_global{
  return  {
      countries:country_Data
    }
}

static group_by=({group_by,datas}:{group_by:keyof t_donation_data_member,datas:t_donation_data_member[]}):t_donation_country_name=>{
   const grouped_data=datas.reduce((acc,person,_)=>{
            const group_by_key=group_by
            // data_country.forEach(person=>{
                const country=person[group_by_key] as string
                //todo kalau group by key kosong
                if(!acc[country]){
                    acc[country]={
                        persons:{datas:[]}
                    }
                }
                acc[country].persons.datas.push(person)
            // })
        return acc
    },{} as Record<string,{persons:{datas:t_donation_data_member[]}}>)
    return grouped_data
}

static paginate({data_per_page_count,datas}:{data_per_page_count:number,datas:t_donation_data_global}):t_donation_data_global_paginate{
const data_per_page=data_per_page_count
			const page_tracker:{[country:string]:number}={}
			
			let res_datas_global_paginate:t_donation_data_global_paginate={countries:{}}
			Object.entries(datas.countries||{}).forEach(([country_name,data_persons]) => {
					const person_list=data_persons.persons?.datas || []
					// todo: jika belum ada || undefined maka siapkan strukture object person:{datas:{}}
					if(!res_datas_global_paginate.countries[country_name]){
						res_datas_global_paginate.countries[country_name]={persons:{datas:{}}}
					}
					// todo: siapkan tracker counter untuk setiap country
					if(!page_tracker[country_name]){
						page_tracker[country_name]=0
					}
					// todo: ambil semua person data
					person_list.forEach((person)=>{
						const curent_data_count=page_tracker[country_name]
						const page_numb=Math.floor(curent_data_count/data_per_page)+1
						const key_numb=`page_${page_numb}`	
						const target_data=res_datas_global_paginate.countries[country_name].persons.datas
						if(!target_data[key_numb]){
							target_data[key_numb]=[]
						}
						target_data[key_numb].push(person)
						page_tracker[country_name]++
					})
			});
            return res_datas_global_paginate
}

}


export {
    Donation_api
}