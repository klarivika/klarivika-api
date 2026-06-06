import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Hamsa Family",
        story:"My name is Hamsa, living in Gaza with my family. We are 5 people struggling to survive. Please help us with donations. Every support means so much. Thank you💔🇵🇸🍉",
        youtube_channel:{
                src:"https://www.youtube.com/@Hamsa.Family/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/WXZZAoym2Xo",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/mYJjiOIjb9bzsJDcIePso6Eid90DKp_wny-cG-NNa1kIdtiPl5AugXtDWEq7KcIcQ0zLGTSoNA=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.chuffed,url:"https://chuffed.org/project/helphamsafamilytosurviveingaza"},

        ]
}

const hamsa_family:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {hamsa_family}