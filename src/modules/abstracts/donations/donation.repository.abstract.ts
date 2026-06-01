import { DonationModel } from "../../donation/donation.model";


export abstract class DonationRepositoryAbstract{
    protected readonly abstract model:DonationModel
}