import { t_donation_data_member } from "../..";

type t_page_counter={
	[page:string]:t_donation_data_member[];
}
 type t_donation_person_datas_paginate = {
	persons: {
		datas:t_page_counter
	};
};

export {
    t_donation_person_datas_paginate
}