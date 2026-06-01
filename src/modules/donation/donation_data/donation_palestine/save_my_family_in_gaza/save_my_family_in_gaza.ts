import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"save my family in Gaza",
        story:"Ispeak with a humanitarian spirit. Please do not ignore my message as some people did before. Help my family get food and flour. The situation is getting worse day after day. Your donation means saving my family. Donate even $50. The donation link is in my bio.🤚😭🙏🍉🥺💔",
        youtube_channel:{
                src:e_data_citizen.none
        },
        youtube_profile:{
                src:e_data_citizen.none,
                type:e_data_citizen.none
        },
        image:"https://yt3.googleusercontent.com/4M21BJPjBP9Suzf-T64etV550RhIca7CAfTDeisZHtPoIPJuNcLhfGulPFoiJNpK0CQu55W1g-w=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?hosted_button_id=FZLWEUU64R5N8"},

        ]
}

const save_my_family_in_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {save_my_family_in_gaza}