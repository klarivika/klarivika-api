import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"hope for gaza people",
        story:"We are poor families living in the same area in Gaza, before the war, our life was simple but peaceful. We had a home, a routine, and dreams just like everyone else. But this war has taken everything away from us. Our house is gone, our belongings are destroyed, and our source of livelihood has disappeared.Today, we are struggling just to survive. Access to basic needs like food, clean water, and medical care has become extremely difficult. Children cry out of hunger, and the elderly suffer without proper treatment. Every day is a battle of fear and hope-hope that we make it through another night. I hope that help reaches us before it is too late.",
        youtube_channel:{
                src:"https://www.youtube.com/@hopeforgazapeople-u3c/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/xVTmVFBdH34",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/-cqk_vaGpjhpzX2u0RbTWaY8D1p0y8-ecdXR2uc4yBRx5GU5j3E5R-x7FkBpqYO8L9_gX8DKhQ=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.paypal,url:"https://www.paypal.com/donate?campaign_id=M4U4AWCXD5UUU"}

        ]
}

const hope_for_gaza_people:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {hope_for_gaza_people}