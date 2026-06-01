import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"seran palestine",
        story:"Help me save my family 🇵🇸🇵🇸🍉🍉💔",
        youtube_channel:{
                src:"https://www.youtube.com/@Seran_Palestine"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/bQ3mKqSNA-M",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/fnG7c3oHG9Kht5NOdHlRkF6v_xBd1A7NJACvn8Q0AdgxrNNIAXNQymgqoBd0FjFzhRf3twp-RpA=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.none,url:e_data_citizen.none},

        ]
}

const seran_palestine:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {seran_palestine}