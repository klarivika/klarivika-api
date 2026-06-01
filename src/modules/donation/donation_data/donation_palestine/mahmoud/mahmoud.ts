import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Mahmoud family",
        story:"POV: you’re kind soul who rewatched 3x to help me buy food for my children in Gaza ",
        youtube_channel:{
                src:"https://www.youtube.com/@Save_Mahmoud_Family"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/XOrN5LAn_Yw",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/cLdEjD0Bb4aW_y1EfRk-62m_3zjzsG5uvDmQthRwYDEZ6Y_3J5K60kZlhspivB_raQWG1g3BtA=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?campaign_id=SLNAVPN76EDRQ"},

        ]
}

const mahmoud:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {mahmoud}