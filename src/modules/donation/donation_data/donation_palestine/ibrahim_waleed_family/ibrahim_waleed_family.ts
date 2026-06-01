import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"ibrahim waleed family",
        story:"Protect us from being starved",
        youtube_channel:{
                src:"https://www.youtube.com/@ibrahim_waleed.g/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/UdbG6M2P9yI",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/-qc_O3znIZ9OH4M-Mzbf_5BxTyfF-HDR4Home-0eauglyNbXHrktam4Bmyo0cf8inIPq-MezSg=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?campaign_id=PV45NNEDAH8GA"}

        ]
}

const ibrahim_waleed_family:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {ibrahim_waleed_family}