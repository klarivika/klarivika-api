import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"help nurse hamza in gaza",
        story:"I live next to death 🇵🇸🍉lost our home 😭😭",
        youtube_channel:{
                src:e_data_citizen.none
        },
        youtube_profile:{
                src:e_data_citizen.none,
                type:e_data_citizen.none
        },
        image:"https://yt3.googleusercontent.com/zcI7QBhcrL-IRuoDB-O05Riv4DYxVIAszec2QvHmFP4T3MnowrH0cG-bzn8AEYCHcqWX4Z2cvw=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=ZV3XL6M2UPPQU"},
                {name:e_data_citizen.donorbox,url:"https://donorbox.org/tooth-surgery-for-nurse-hamza"},

        ]
}

const help_nurse_hamza_in_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {help_nurse_hamza_in_gaza}