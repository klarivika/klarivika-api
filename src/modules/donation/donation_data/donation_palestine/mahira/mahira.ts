import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        image:"picture.jpg",
        links:[
                {name:"link",url:""}
        ],
        name:"mahira",
        story:"she struggle for her life in gaza and feed her children",
        youtube_channel:{
                src:""
        },
        youtube_profile:{
                src:"",
                type:""
        }
}

const mahira:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {mahira}