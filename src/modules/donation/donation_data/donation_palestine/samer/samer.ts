import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        image:"https://yt3.googleusercontent.com/cKdX3j2rupgTQUq9jZb5zShUx9cNYGhgvTiMIV_Y2UtVi2eVFDtCC_DFzvqVPtGdPBOp2HVp=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:"spotfund",url:"https://www.spotfund.com/story/c6bde3f6-11b4-4658-90f0-aac7efba7322?source=s&share_location=c&SFID=x5v4hh3sc&referral_id=7633caf0-9085-4703-a46a-13faaefdb4ce"},

        ],
        name:"Samer Palest ",
        story:"🇵🇸 Samer Palest & Mahmood Naseral, Voices from Gaza We are two brothers living through the unimaginable in Gaza. Once, our home was full of laughter,it’s filled with struggle and survival. Through our videos, we show the truth,  the pain, the hope, and the strength of our people.We don’t share this for pity, but for awareness, humanity, and help. Every view, share, and prayer means the world to us. Together, we can keep Gaza’s voice alive.🕊️ Stand with Gaza. Stand Humanity #Gaza #Palestine #SamerPalest #MahmoodNaseral ",
        youtube_channel:{
                src:"https://www.youtube.com/@samerpalest1-u2l/shorts"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/9zGmp8PPfLc",
                type:"yt_short"
        }
}

const SamerPalest:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {SamerPalest}