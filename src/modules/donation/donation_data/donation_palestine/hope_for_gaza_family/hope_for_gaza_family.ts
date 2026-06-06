import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Hope For Gaza Family ",
        story:"Family from ghaza Having no food No medicine no water no food I need you help to save my family Donations links are below",
        youtube_channel:{
                src:"https://www.youtube.com/@Manzafamilyfromghaza/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/Ld78jDJqOao",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/tAT0zDbS1i5zxOaTphLlxDF2pCFWgYlRDJzGYA0FvukqhMGkGwyiTtF_znT_fiYMEXVGfMt4o98=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/pools/c/9ptmPmbjIV"},

        ]
}

const hope_for_gaza_family:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {hope_for_gaza_family}