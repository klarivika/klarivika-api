import { Donation_api } from "./utils"
// ! 
const dataspage=[1,2,3,4,5,6,7]

const data_per_page=2

let page_counter:number=0

type t_pages={
	[key:string]:number[]
}

const paged=dataspage.reduce((acc,val,idx)=>{
  if( idx % data_per_page ===0){
   page_counter++
 }
		if(!acc[page_counter])          {
        	acc[page_counter]=[]
        }
      acc[page_counter].push(val)
	return acc
},{} as t_pages )


console.log(paged)

//by object
type t_person={
    id: number,
    name:string,
    youtube_profile:string ,
    youtube_channel:string ,
    country_name:string ,
    link: {
    name:string,
    url:string
    },
    image:string,
    story:string | Array<string>
}
type t_data={
    countries:{
        [key:string]:{
            persons:{
                datas:t_person[]
            }
        }
    }
}
type t_api={
        success:boolean,
        message:string,
        status:number,
        datas:t_data
}
const api:t_api={
  "success": true,
  "message": "200 ok!",
  "status": 200,
  "datas": {
    "countries": {
      "palestine": {
        "persons": {
          "datas": [
            {
              "id": 1,
              "name": "mahira",
              "youtube_profile": "",
              "youtube_channel": "",
              "country_name":"palestine",
              "link": {
                "name": "link",
                "url": ""
              },
              "image": "picture.jpg",
              "story": "she struggle for her life in gaza and feed her children"
            }
          ]
        }
      }, //palestine
      "english": {
        "persons": {
          "datas": [
            {
              "id": 1,
              "name": "cindy",
              "youtube_profile": "",
              "youtube_channel": "",
              "country_name":"english",
              "link": {
                "name": "link",
                "url": ""
              },
              "image": "picture.jpg",
              "story": "she struggle for her life in gaza and feed her children"
            }
          ]
        }
      } //english
    }
  }
}

const group_by=({group_by}:{group_by:keyof t_person}):t_data=>{
   const grouped_data=Object.values(api.datas.countries).reduce((acc,data_country,idx)=>{
            const group_by_key=group_by
            data_country.persons.datas.forEach(person=>{
                const country=person[group_by_key] as string
                //todo kalau group by key kosong
                if(!acc[country]){
                    acc[country]={
                        persons:{datas:[]}
                    }
                }
                acc[country].persons.datas.push(person)
            })
        return acc
    },{} as Record<string,{persons:{datas:t_person[]}}>)
    return {countries:grouped_data}
}

const apis=Donation_api

//const format1=apis.reformat()

const q_params = 'struggle'; 
// Contoh pencarian (bisa parsial seperti 'mahi' atau 'gaza') [pencarian data tidak harus sama persis cuma potongan karakter sudah dianggap benar]

/**
 *@desc Fungsi pembantu untuk memeriksa apakah suatu nilai mengandung text pencarian secara rekursif atau tree traversal
 *@desc intinya menelusuri data object dan array dibongkar setiap valuenya hingga mencapai level primitif data type number boolean string etc
 *@param {string} query 
 *@param {any} value 
 */
const deepSearch = (value: any, query: string): boolean => {
    if (!value) return false;
    
    // Jika value berupa string, cek apakah mengandung kata kunci (case-insensitive)
    if (typeof value === 'string') {
        return value.toLowerCase().includes(query.toLowerCase());
    }
    
    // Jika value berupa Array, cek setiap elemen di dalamnya lalu lempar item yang didalamnya mungkin type datanya adalah string atau type data primitif tapi kalau isinya bukan string maka akan dilakukan pengecekan sampai valuenya ter ekstrak jadi type data primitif berupa string boolean maupun number lalu dilakukan pencocokan nilai  
    if (Array.isArray(value)) {
        return value.some(item => deepSearch(item, query));
    }
    
    // Jika value berupa Object (bukan null/array), cek semua value dari property-nya lalu validasi type akan terus berulang dan diproses sehingga data di param value akan menjadi type data primitif berupa string number ataupun boolean
    if (typeof value === 'object') {
        return Object.entries(value).some(item => deepSearch(item, query));
    }
    
    // Untuk tipe data lain seperti number, jika ingin dicocokkan juga bisa diubah ke string
    if (typeof value === 'number') {
        return value.toString().includes(query);
    }
    
    return false;
};

// Proses pencarian global melintasi semua negara
const searchResults: t_person[] = [];
        
Object.values(api.datas.countries).forEach(country => {
    country.persons.datas.forEach(person => {
        // Lakukan deep search pada objek person tersebut
        if (deepSearch(person, q_params)) {
            searchResults.push(person);
        }
    });
});

console.log(searchResults);


const skiping=['id','name']
const datas={id:1,name:"jaka",tinggi:123} 
const skipped_data=Object.entries(datas).reduce((acc,[key,value])=>{
      if(skiping.length>0){
          if(!skiping.includes(key)){
              acc[key]=value
          }
      }else{
        acc[key]=value
      }
      return acc
},{} as Record<string,any>)

console.log(skipped_data)


// 1. Tentukan jumlah data per halaman
const data_per_pages = 2;

// 2. Data API Mentah (Sudah disesuaikan dengan struktur objek kamu)
const data_apis = {
  success: true,
  message: "200 ok!",
  status: 200,
  data: {
    countries: {
      palestine: {
        persons: {
          datas: [
            { id: 1, name: "mahira", country_name: "palestine" },
            { id: 2, name: "abdullah zakaria", country_name: "palestine" },
            { id: 3, name: "For HUMANITY", country_name: "palestine" },
            { id: 4, name: "Zaid", country_name: "palestine" }
          ]
        }
      }
    }
  }
};

// 3. Tracker halaman biar tidak bentrok
const page_trackers: { [country: string]: number } = {};

const res_datas = Object.entries(data_apis.data.countries)//.palestine.persons.datas;

// 4. Proses merubah format ke "page_1": [data]
const data_pages = res_datas.reduce((acc,[country_name,val]) => {
  const country = country_name//.country_name;

  if (page_trackers[country] === undefined) {
    page_trackers[country] = 0;
  }

  // Rumus matematika modulo/pembagian untuk menentukan "page_x"
  const current_country_data_count = page_trackers[country];
  const page_num = Math.floor(current_country_data_count / data_per_pages) + 1;
  const page_key = `page_${page_num}`;

  // Siapkan struktur object penampung
  if (!acc.data) acc.data = { countries: {} };
  if (!acc.data.countries[country]) {
    acc.data.countries[country] = { persons: { datas: {} } };
  }

  const target_country_datas = acc.data.countries[country].persons.datas;
  
  // Di sini keajaibannya: Membuat properti "page_1", "page_2", dst.
  if (!target_country_datas[page_key]) {
    target_country_datas[page_key] = [];
  }

  // Masukkan data orang ke dalam format page yang tepat
  target_country_datas[page_key].push(val.persons.datas);
  page_trackers[country]++;

  return acc;
}, { success: true, message: "200 ok!", status: 200, data: { countries: {} } } as any);

// 5. Perintah wajib W3Schools agar muncul di layar hitam sebelah kanan
console.log(data_pages)

const tabel="datas"
const query="select name,age,hobby from datas groupBy(name)"

type t_sql_look_alike={
  name:string,
  age:number,
  hobby:string
}
type t_sql_look_alike_2={
  [key:string]:t_sql_look_alike[]
}
const sql_look_alike:t_sql_look_alike[]=[
     {name:"jack",age:12,hobby:"coding"},
     {name:"jack",age:12,hobby:"coding"},
  ]

// todo: kalau tidak berurutan select field from tabel groupBy(field)
// todo: step1 validasi select
// todo: step2 validasi select * atau fields
  const sql_syntaxs=({query,data,tabel_name}:{query:string,data:t_sql_look_alike[],tabel_name:string}):t_sql_look_alike_2[]=>{
    const rules={
  selected_fields:/([a-zA-Z_,]+)|(\*)/,//todo: sama
  group:/groupBy\(([A-Za-z_]+)\)/, //!validasi jika bukan string
  //todo: from di urutan 3 dari data terakhir
  //todo: tabel_name di urutan 2 dari data terakhir
  //todo: groupby di urutan data terakhir
}

        query.replace(/([a-zA-Z_,]+)\s+/,"")
    const array_queries=query.split(" ")
     if(!rules.selected_fields.test(query) || array_queries.indexOf("select") !==0)return[]
    //  todo: ambil selected field dari indexof select[0+1]
     if(!/\*|[a-zA-Z_,]+/.test(query) || array_queries.indexOf("select")+1 !==1)return[]
    //  todo: ambil from
     if(!/from/.test(query)&& array_queries.indexOf("from") !==2)return[]
     const check_for_tabel_name=array_queries[array_queries.indexOf(tabel_name as string)]
     if(tabel_name !== check_for_tabel_name&& array_queries.indexOf(tabel_name as string) !==3)return[]
     if(!rules.group.test(query)|| array_queries.length-1 !==4)return[]


        const get_keys=({rule,data}:{rule:string,data:t_sql_look_alike[]}):any[]=>{
            if(rule === '*'){
               return data
            }
            // todo: rule adalah name,age
            const data_selects=rule.split(",")
            return data.map((row=>{
              const new_row:Record<string,any>={}
                Object.entries(row).forEach(([key ,value])=>{
                    if(data_selects.includes(key))new_row[key]=value
                })
                return new_row
            }))
        }
     const q_select=array_queries[array_queries.indexOf("select")+1]   
     const selected_fields_=q_select === "*"?get_keys({data:data,rule:"*"}):get_keys({data:data,rule:q_select})
     const grouped_data=query.match(rules.group)?.[1]!
        if(!grouped_data)return[]
        const grouped=selected_fields_?.reduce((acc,row)=>{
          const grouped_data_type=row[grouped_data]
            if(grouped_data_type !== undefined ){
                if(!acc[grouped_data_type])acc[grouped_data_type]=[]
                acc[grouped_data_type].push(row)
            }

          return acc 
        },{} as Record<string, any[]>)

        return grouped
  }

  sql_syntaxs({data:sql_look_alike,query,tabel_name:tabel})

