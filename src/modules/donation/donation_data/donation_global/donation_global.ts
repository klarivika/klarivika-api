import { t_donation_data_global } from "../../../types";
import { palestine } from "../donation_palestine";

const donation_data_global_raw: t_donation_data_global = {
	countries: {
		...palestine,
	},
};
    let id_global_counter:number=0
		//todo format data didalam 
    const donation_data_global:t_donation_data_global=Object.entries(donation_data_global_raw.countries).reduce((acc,[key,val],idx:number)=>{
        const formated_data=val.persons.datas.map(val=>{
                id_global_counter++
                return {
                    id:id_global_counter,
                    ...val
                }
            })
            acc['countries'][key]={
				persons:{
					datas:[
						...formated_data
					]
				}
			}
        return acc    
    },{countries:{}} as t_donation_data_global)

export { donation_data_global };
