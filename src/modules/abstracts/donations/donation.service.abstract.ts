import { Donation_api } from "../../../utils";
import { DonationModel } from "../../donation/donation.model";
import { BaseAbstract } from "../global";

export abstract class DonationServiceAbstract extends BaseAbstract {
    protected abstract donation_util:Donation_api
	protected abstract model:DonationModel
}