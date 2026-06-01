import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"Sahar family",
        story:"Hello my name is Sahar. I am a mother of Five from Gaza🇵🇸. We live in a tent and there is not enough food, water, or medicine. Please donate through the link to help my family survive. Thank you for your support.🙏🍉",
        youtube_channel:{
                src:"https://www.youtube.com/@Sahar_from_gaza"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/Esce_I5o6W0",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/xfFENT483SfN70GWmYuTZVGVS4zVCuiOegxeIOT_k81PRoqs5i3ufxI116rLRveY2hs0k3xxoQ=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.go_fund_me,url:"https://www.gofundme.com/f/help-the-orubs-family-rebuild-their-home?attribution_id=sl:16f2135c-670a-4465-a00e-3e5ce4017353&lang=en_GB&ts=1779715093&utm_campaign=fp_sharesheet&utm_content=amp20_t1&utm_medium=customer&utm_source=copy_link"},

        ]
}

const sahar:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {sahar}