import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Mohamed amazeh ",
        story:"please help my family here Donation link, inshallah,Allah bless you all 🙏🔗👇👇🍉🇵🇸",
        youtube_channel:{
                src:"https://www.youtube.com/@Mohamed.amazeh"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/qYqX7jGckTc",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/sToI1oOS59z6jnZhxfp-I6gUFGMfEi9-0VfFCOKrWHMzqw0Y4h8IuJzCy5XkIL3BJndEGkvQ=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate/?hosted_button_id=32VNRBUA45WXL"},

        ]
}

const mohamed_amazeh:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {mohamed_amazeh}