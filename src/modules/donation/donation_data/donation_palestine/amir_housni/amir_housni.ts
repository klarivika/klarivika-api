import { e_data_citizen } from "../../../../enum";
import { t_donation_data_member,t_donation_data_profile } from "../../../../types";

const data_profile:t_donation_data_profile={
        name:"amir_housni",
        story:" We are running out of time… Gaza peoples are  dying. Please, please help us by donating $20, $50, $70. Your kindness can save there life. Link in bio, please share our story. 👇",
        youtube_channel:{
                src:"https://www.youtube.com/@amirHousniz"
        },
        youtube_profile:{
                src:"https://www.youtube.com/shorts/eIWdz2QNPiQ",
                type:e_data_citizen.yt_short
        },
        image:"https://yt3.googleusercontent.com/t6wXY12ufo_69IZ_0H7Mm7d2KRnjf28e50Dc0R7Oj9quYZMXIdjyA1fyvfL7agKsbDIUY8YnWQ=s160-c-k-c0x00ffffff-no-rj",
        links:[
                
                {name:e_data_citizen.spot_fund,url:"https://www.spotfund.com/story/04a52948-8833-483f-99d5-fe6e2075643a?SFID=FamilyAya&r=aHR0cHM6Ly93d3cueW91dHViZS5jb20v"},

        ]
}

const amir_housni:t_donation_data_member={
        name:data_profile.name,
        youtube_profile:data_profile.youtube_profile,
        youtube_channel:data_profile.youtube_channel,
        links:data_profile.links,
        image:data_profile.image,
        story:data_profile.story,
}


export {amir_housni}