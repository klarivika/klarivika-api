import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"hope gaza 11",
        story:"SAVE ME AND MY 35 FAMILY MEMBERS FROM HUNGER HELP US TO GET FOOD AND CLEAN WATER 💦 WE ARE STARVING HERE IN THE WAR Donation link PLEASE 🥺 DONATE ",
        youtube_channel:{
                src:"https://www.youtube.com/@hopegaza11/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/sRaV1IvyXHk",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/tXC_-Dk1SkqqxbXqwExCFyD_Gipvlm3TdTRYjHOihuYKb0p--weltk7cvHD09D-4Sw_b7MQphw=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.donorbox,url:"https://donorbox.org/save-me-and-my-35-family-members-to-get-food-water-sleeping-in-tent-save-us-become-our-savior-939888"}

        ]
}

const hope_gaza_11:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {hope_gaza_11}