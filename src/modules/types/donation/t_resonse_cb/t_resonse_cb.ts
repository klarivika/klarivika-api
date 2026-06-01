import { t_donation_data_global } from "../t_donation_data_global/t_donation_data_global"

export type t_resonse_cb={
        datas:t_donation_data_global,//{[key:string]:any},
        success:boolean,
        message:string,
        status:number//|unknown
}