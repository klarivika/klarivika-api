import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Alhanaril Gaza community outreach",
        story:"Your a kind person please choose kindness and donate to save millions of Gaza families 🙏🙏🤲",
        youtube_channel:{
                src:"https://www.youtube.com/@AlhanarilGazacommunityoutreach"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/Je7R2np_ZNI",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/uEBSJ1XsQYYWyYrFyuby4OxGCtvw1QJ5Glf3X0SiM_r0BHJrKT5YAie4f_w-zB0bVls6IEfO=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=PYJB9SL68JLW6"},

        ]
}

const alhanaril_gaza_community_outreach:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {alhanaril_gaza_community_outreach}