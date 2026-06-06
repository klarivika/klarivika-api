import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"haneen",
        story:"I am Haneen from Gaza. Here, I share with you the details of our lives that news screens do not broadcast. Amidst the rubble and the tents, I convey stories of resilience and the search for life in its simplest details. My channel is your window to see Gaza through my eyes.To support our resilience and help me continue providing and developing this content, you can contribute via the link below or contact me on WhatsApp at the following number:+972599616037",
        youtube_channel:{
                src:"https://www.youtube.com/@AnaHaneenGaza"
        },
        youtube_profile:{
                src:"https://www.youtube.com/watch?v=FceNFZXAavE",
                type:e_data_citizen.yt_long
        },
        image:"https://yt3.googleusercontent.com/tQP__Nflmflf6attvKsoMA2pd-n6LYf5IK1RbHXObj2vrR71sNt9YPy8cOu1ruSA3c-3PfKr5eg=s160-c-k-c0x00ffffff-no-rj",
        links:[
                {name:e_data_citizen.usdt_binance,url:"https://docs.google.com/document/d/1udZWSh7KE03-BLmR7QFP0BTymFvOe1lTPIl67UAJMLQ/edit?tab=t.0"},
                {name:e_data_citizen.linkedin,url:"https://www.linkedin.com/in/haneen-sabah-822a6320b/"},
                {name:e_data_citizen.instagram,url:"https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbllDTmVTU3ViNzFDZlZvNWpySGxrWnFjVEJ3UXxBQ3Jtc0ttZENHWXVWTElseVVoTkVPU0lXZ0ljb0Rxb2M0QnotcmplVzhUWE4tem4xRmJka2lOeUtwdlBqaVlOeWxzdXdrZGtxVUZTU2t3aG85VTRKNHZhbG5aSEwtNjFYdzJTbFVITFRiQUdRTzNRLVhrT0hGTQ&q=https%3A%2F%2Fwww.instagram.com%2Fhaneenemsb"},
                {name:e_data_citizen.chuffed,url:"https://chuffed.org/project/183373-from-displaced-to-home"},

        ]
}

const haneen:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {haneen}