import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"layan gaza",
        story:"This is a humble request for help. My family is struggling, and your kindness through Chuffed can give us hope.",
        youtube_channel:{
                src:"https://www.youtube.com/@LayanGaza-e5f/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/IE-WzqBx12o",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/gsFUyN4wILWarxwx--_Sl8Dl_qG8A6enElgwli2JK1T4bzRVtBZSI5KFu1yEFioWP6l2eWNaOzY=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.artwork,url:"https://www.supportmyart.shop/products/support-me-by-purchasing-this-artwork-%E2%9D%A4%EF%B8%8F?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASGQ8JleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafujouJDYk2KPHXZWcBpUSzJTV7Mhfycxjg7XoKvh8nxaS-bAigHDpE3mhGbQ_aem_0viKLuMF0HXRcVml8esfGA&variant=53201068130632"},

        ]
}

const layan_gaza:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {layan_gaza}