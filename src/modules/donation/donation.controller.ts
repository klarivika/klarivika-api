import { Donation_api } from "../../utils";
import { DonationControllerAbstract } from "../abstracts";
import { DonationControllerInterface } from "../interfaces";
import {
	t_donation_controller_index_param,
	t_response,
	t_donation_controller_show_param,
	t_donation_data_global,
} from "../types";
import { DonationRepository } from "./donation.respository";
import { DonationService } from "./donation.service";

// todo https://www.w3schools.com/typescript/typescript_best_practices.php

/**
 * todo bisa filter data berdasarkan q_param
 * todo q_search_country
 * todo q_search{semua kecuali negara}
 */

class DonationController extends DonationControllerAbstract implements DonationControllerInterface {
	//todo di controller masukkan ke repository lalu repository kkomunikasi dengan model 
	protected repository:DonationRepository=new DonationRepository()
	protected service:DonationService=new DonationService()
	protected response=Donation_api
	protected donation_util=Donation_api
	constructor() {
		super()
	}
	public Index({
		status,
		q_params
	}: t_donation_controller_index_param): t_response {
		//todo : repository butuh status code ,q_params
		//todo: message datas success ada didalam repository
		//todo: repository mengirimkan kembali status code sebagai callback
		let res_datas:t_donation_data_global|[]=[], res_message:string="",res_status_code:number=200,res_success:boolean=true
		 this.service.Index({
			// status({status_number:200}),
			//? status method dari repository  
			// status({status_number}){
			// 	//? status ini asalnya dari parameter controller 
			// 	//? untuk menerima status number dari method index repository
			// 	status({ status_number })
			// },
			
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

		const response=this.donation_util.format({
			success:res_success,
			message:res_message,
			status:res_status_code,
			data: res_datas,
		});
		return response
	}

	public Show({
		status,
		id,
		country,
	}: t_donation_controller_show_param) {
		let res_datas:t_donation_data_global|[]=[], res_message:string="",res_status_code:number=200,res_success:boolean=true
		//? kemungkinan error di idnya
		 this.service.Show({
			id,
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
