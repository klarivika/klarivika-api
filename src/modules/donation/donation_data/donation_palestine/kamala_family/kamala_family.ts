import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Kamala .family ",
        story:"You are kind person who can consider donating any amount to save my life and family to get food and medical 🏥 ⬇️DONATE ⬇️🙏🇵🇸🇵🇸🇵🇸🍒🍒🍎🍉🍇🍅🍐🍋‍🟩🍈",
        youtube_channel:{
                src:"https://www.youtube.com/@Kamala.family/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/2nbuU1A6Hho",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/gQn-rgcJrUpfb0U98AyUmlRqeWdtKY91EnqPUIpd6RXl73TJCLAuPzWx6WrUp66rxK-YHPiNnGE=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?hosted_button_id=AZFG48ETFJ99E"}

        ]
}

const kamala_family:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {kamala_family}