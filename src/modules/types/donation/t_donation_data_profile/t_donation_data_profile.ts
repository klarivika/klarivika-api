type t_donation_links={
        url?:string,
        name?:string
}

export type t_donation_data_profile={
        image?:string|[],
        links?:t_donation_links[],
        name?:string,
        story?:string,
        youtube_channel?:{
                src?:string
        },
        youtube_profile?:{
                src?:string,
                type?:string
        }
}