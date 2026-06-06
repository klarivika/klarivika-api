import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Hossam's family Gaza",
        story:"This is the donation link, I hope you can help me  🙏🙏🇯🇴👪 food",
        youtube_channel:{
                src:e_data_citizen.none
        },
        youtube_profile:{
                src:e_data_citizen.none,
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/7RLV1yi88RalpdAhBd2FsDzaoHwQ243-wggjdZGHjpRZkUXkxZzdxRbKsH4xCWhRvV7s7fwCWA=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?hosted_button_id=YUNLPRWJQV7XG"},

        ]
}

const hossam_family_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {hossam_family_gaza}