import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"helping_our_families_in_gaza",
        story:"⬇️ Even in the darkest moments in Gaza, your kindness can be a light 💡 🙏 🚨DONATION ⬇️🇦🇪means a lot to help people in Gaza please 🙏 ",
        youtube_channel:{
                src:"https://www.youtube.com/@Famili-j9g/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/slGsjB6Yi4E",
                type:"yt_short"
        },
        image:"https://yt3.googleusercontent.com/H7clrjQS3qVHfzH-FEIMwSw4MB5S1oozXt0kmwqQ4-1LNmj6o189rzSmmgcUCDE6D6BsiQuQZQ=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?hosted_button_id=AZFG48ETFJ99E"}

        ]
}

const helping_our_families_in_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {helping_our_families_in_gaza}