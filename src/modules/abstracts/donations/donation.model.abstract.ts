import { Donation_api } from "../../../utils"
import { DonationDatabase } from "../../donation/donation.database"

export abstract class DonationModelAbstract {
    protected abstract readonly database:DonationDatabase
    protected abstract readonly donation_util: Donation_api
}