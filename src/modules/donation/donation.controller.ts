import { Donation_api } from "../../utils";
import { DonationControllerAbstract } from "../abstracts";
import { DonationControllerInterface } from "../interfaces";
import {
	t_donation_controller_index_param,
	t_response,
	t_donation_controller_show_param,
	t_donation_data_global,
} from "../types";
import { DonationService } from "./donation.service";

// todo https://www.w3schools.com/typescript/typescript_best_practices.php

/**
 * todo bisa filter data berdasarkan q_param
 * todo q_search_country
 * todo q_search{semua kecuali negara}
 */

class DonationController extends DonationControllerAbstract implements DonationControllerInterface {
	//todo di controller masukkan ke repository lalu repository kkomunikasi dengan model 
	protected readonly service:DonationService=new DonationService()
	protected readonly donation_util=Donation_api
	constructor() {
		super()
	}
	public readonly Index=({
		status,
		q_params
	}: t_donation_controller_index_param): t_response =>{
		//todo : repository butuh status code ,q_params
		//todo: message datas success ada didalam repository
		//todo: repository mengirimkan kembali status code sebagai callback
		let res_datas:t_donation_data_global={countries:{}}, res_message:string="",res_status_code:number=200,res_success:boolean=true
		
		 this.service.Index({
			
			
			response_cb({datas,message,status,success}) {
				res_datas=datas 
				res_message=message,
				res_status_code=status,
				res_success=success
			},
			status({status_number}){
				status({status_number:status_number})
			},
			q_params
		});
			
		// ! t_donation_data_global_paginate
			
			const data_paginate=this.donation_util.paginate({data_per_page_count:5,datas:res_datas})

		const response=this.donation_util.format({
			success:res_success,
			message:res_message,
			status:res_status_code,
			data:data_paginate
		});
		return response
	}

	public readonly Show=({
		status,
		id,
		country,
	}: t_donation_controller_show_param)=> {
		let res_datas:t_donation_data_global|[]=[], res_message:string="",res_status_code:number=200,res_success:boolean=true
		//? kemungkinan error di idnya
		 this.service.Show({
			id:id,
			country,

			response_cb({datas,message,status,success}){
				res_datas=datas 
				res_message=message,
				res_status_code=status,
				res_success=success
			},
			status({status_number}){
				status({status_number})
			}
		})

const response=this.donation_util.format({
			success:res_success,
			message:res_message,
			status:res_status_code,
			data: res_datas,
		});
		return response

		
	}
}

export { DonationController };
