import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        image:"https://yt3.googleusercontent.com/zMObFZwgPYUa_Az8TtGJLpg-T74KQ_M2qHQdSnkUjxLKzqHrNCPZ1X7trBx15u0U2KneHq_8=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.artwork,url:"https://www.supportmyart.shop/products/support-me-by-purchasing-this-artwork-%E2%9D%A4%EF%B8%8F?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASGQ8JleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafujouJDYk2KPHXZWcBpUSzJTV7Mhfycxjg7XoKvh8nxaS-bAigHDpE3mhGbQ_aem_0viKLuMF0HXRcVml8esfGA&variant=53201068130632"}

        ],
        name:"abdullah zakaria",
        story:"Our financial situation has worsened beyond our control.Even arranging food has become a daily struggle.Any assistance would mean a great deal to us.",
        youtube_channel:{
                src:"https://www.youtube.com/@Abdullahzakaria-g6w/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/Fiod1bYoZQw",
                type:e_data_citizen.yt_short
        }
}

const abdullah_zakaria:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {abdullah_zakaria}