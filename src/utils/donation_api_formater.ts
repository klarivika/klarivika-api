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
static sql_syntaxs({query,data,tabel_name}:{query:string,data:t_donation_data_member[],tabel_name:string}):t_donation_data_member[]{
    const rules={
  selected_fields:/([a-zA-Z_,]+)|(\*)/,//todo: sama
  group:/groupBy\(([A-Za-z_]+)\)/, //!validasi jika bukan string
  //todo: from di urutan 3 dari data terakhir
  //todo: tabel_name di urutan 2 dari data terakhir
  //todo: groupby di urutan data terakhir
} 

        query.replace(/([a-zA-Z_,]+)\s+/,"")
    const array_queries=query.split(" ")
     if(!rules.selected_fields.test(query) || array_queries.indexOf("select") !==0)return[]
    //  todo: ambil selected field dari indexof select[0+1]
     if(!/\*|[a-zA-Z_,]+/.test(query) || array_queries.indexOf("select")+1 !==1)return[]
    //  todo: ambil from
     if(!/from/.test(query)&& array_queries.indexOf("from") !==2)return[]
     const check_for_tabel_name=array_queries[array_queries.indexOf(tabel_name as string)]
     if(tabel_name !== check_for_tabel_name&& array_queries.indexOf(tabel_name as string) !==3)return[]
     if(!rules.group.test(query)|| array_queries.length-1 !==4)return[]


        const get_keys=({rule,data}:{rule:string,data:t_donation_data_member[]}):any[]=>{
            if(rule === '*'){
               return data
            }
            // todo: rule adalah name,age
            const data_selects=rule.split(",")
            return data.map((row=>{
              const new_row:Record<string,any>={}
                Object.entries(row).forEach(([key ,value])=>{
                    if(data_selects.includes(key))new_row[key]=value
                })
                return new_row
            }))
        }
     const q_select=array_queries[array_queries.indexOf("select")+1]   
     const selected_fields_=q_select === "*"?get_keys({data:data,rule:"*"}):get_keys({data:data,rule:q_select})
     const grouped_data=query.match(rules.group)?.[1]!
        if(!grouped_data)return[]
        const grouped=selected_fields_?.reduce((acc,row)=>{
          const grouped_data_type=row[grouped_data]
            if(grouped_data_type !== undefined ){
                if(!acc[grouped_data_type])acc[grouped_data_type]=[]
                acc[grouped_data_type].push(row)
            }

          return acc 
        },{} as Record<string, any[]>)

        return grouped
  }

}


export {
    Donation_api
}