import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        image:"https://yt3.googleusercontent.com/sIm_6aEiB_Ma9KncYECwSzLYXDZw4ebMTXvEOjpywJrkz6Ga2fOxc_vB-KKcxY3Wy7hx20HrWdk=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.chuffed,url:"https://chuffed.org/"},

        ],
        name:"For HUMANITY",
        story:"This channel has a purpose to stand up for every injustice going on all over the world , use audios of Palestinians as much as possible and uplift their unheard voices to the world.EVERYONE WITH OR WITHOUT A RELIGION HAS A RIGHT TO EXIST EXCEPT THE ONE WHO SPREAD CORRUPTION --> SUBSCRIBE and become the part of this community 💝✨ Free Palestine🇵🇸 Free Sudan 🇸🇩 ",
        youtube_channel:{
                src:"https://www.youtube.com/@ForHUMANITY-m9j/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/waUWGOUmoKE",
                type:"yt_short"
        }
}

const for_humanity:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {for_humanity}