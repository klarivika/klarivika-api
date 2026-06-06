import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Save my family",
        story:"Every child in Gaza deserves food, freedom, and a future. I use my voice to speak for those who are unheard.",
        youtube_channel:{
                src:"https://www.youtube.com/@SaveGaza-x3m/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/7Mdv-TZkFTM",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/ytc/AIdro_mbdw79JGc5mlEFb4L_fDS_eNfnZ3cB5TODqlDQLt_5YWQ-7_FLklstw7UB2tMe0YfK6w=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"paypal.com/donate?hosted_button_id=QTF497FNWUS2U"}

        ]
}

const save_my_family:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {save_my_family}