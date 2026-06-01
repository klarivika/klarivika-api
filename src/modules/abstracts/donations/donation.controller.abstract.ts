import { Donation_api } from "../../../utils";
import { DonationService } from "../../donation/donation.service";

export abstract class DonationControllerAbstract {
	protected abstract readonly service:DonationService
	protected abstract readonly donation_util:Donation_api
}