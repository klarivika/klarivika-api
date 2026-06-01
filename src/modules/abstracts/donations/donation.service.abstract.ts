import { Donation_api } from "../../../utils";
import { DonationModel } from "../../donation/donation.model";
import { DonationRepository } from "../../donation/donation.respository";
import { BaseAbstract } from "../global";

export abstract class DonationServiceAbstract extends BaseAbstract {
    protected abstract readonly donation_util:Donation_api
	protected abstract readonly model:DonationModel
    protected abstract readonly repository:DonationRepository
}