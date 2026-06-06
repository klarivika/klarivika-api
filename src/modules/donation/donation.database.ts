import { DonationDatabaseAbstract } from "../abstracts"
import { DonationDatabaseInterface } from "../interfaces"
import { t_donation_data_global } from "../types"
import { donation_data_global } from "./donation_data"


class DonationDatabase extends DonationDatabaseAbstract implements DonationDatabaseInterface{
    protected readonly data:t_donation_data_global={...donation_data_global}
    constructor(){
        super()
    }
      public readonly getData=():t_donation_data_global=> {
       return this.data
    }
}


export {
    DonationDatabase
}