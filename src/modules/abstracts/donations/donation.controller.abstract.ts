import { Donation_api } from "../../../utils";
import { DonationRepository } from "../../donation/donation.respository";
import { DonationService } from "../../donation/donation.service";

export abstract class DonationControllerAbstract {
    protected abstract repository:DonationRepository
	protected abstract service:DonationService
	protected abstract response:Donation_api
	protected abstract donation_util:Donation_api
}