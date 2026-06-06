import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";
 
const data_profile:t_donation_data_profile={
        name:"Omar family ",
        story:"I am reaching out for daily support to help me manage my basic needs and keep moving forward. Even a small contribution makes a real difference and helps me get through each day with stability and hope. If you are able to help, your support would mean a lot.Donate by Chuffed 👇 ",
        youtube_channel:{
                src:"https://www.youtube.com/@Omarfamily-y1o"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/epG5jIcJoFc",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/YP3FDuwQS8tBTjnNXi077LyI9-lib1lnIo-oa5zHOX7qfUnjP4jUmrS_svGXMMkwSxuTzHR5lg=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.artwork,url:"https://www.supportmyart.shop/products/support-me-by-purchasing-this-artwork-%E2%9D%A4%EF%B8%8F?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcASGQ8JleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafujouJDYk2KPHXZWcBpUSzJTV7Mhfycxjg7XoKvh8nxaS-bAigHDpE3mhGbQ_aem_0viKLuMF0HXRcVml8esfGA&variant=53201068130632"},

        ]
}

const omar_family:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {omar_family}