import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"",
        story:"",
        youtube_channel:{
                src:""
        },
        youtube_profile:{
                src:"",
                type:e_data_citizen.yt_short
        },
        image:"",
        links:[
                
                {name:"",url:""}

        ]
}

const sample:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {sample}