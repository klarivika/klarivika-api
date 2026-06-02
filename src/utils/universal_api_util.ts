import { e_status_code } from "../modules/enum"
import { t_q_params ,t_deep_search2,t_deep_search} from "../modules/types"



export class Universal_api_util{
     static get_queries_params=({query}:{query:Record<string,string>})=>{
        const {
            q_search_country,
            q_search}=query 
            const q_params:t_q_params={
                    q_search_country,
                    q_search
            }
            return q_params
      }
      /**
             *@desc Fungsi pembantu untuk memeriksa apakah suatu nilai mengandung text pencarian secara rekursif atau tree traversal
            *@desc intinya menelusuri data object dan array dibongkar setiap valuenya hingga mencapai level primitif data type number boolean string etc
            *@desc dia by default akan menggunakkan logika | kalau di sql seperti where like %what% 
            *@param {string} query 
            *@param {any} value 
      */
     
     public static deep_search({value,query,skiping_field}:t_deep_search):boolean{
            const validate_data={
                  value_is_string:typeof value === 'string',
                  value_is_array:Array.isArray(value),
                  value_is_number:typeof value === 'number',
                  value_is_object:typeof value === 'object',
            }
            if(value === null ||  value === undefined)return false
            if(validate_data.value_is_string){
                  return value.toLowerCase().includes(query.toLowerCase())
            }
            if(validate_data.value_is_number){
                  return String(value).toLowerCase().includes(query)
            }
            if(validate_data.value_is_array){
                  return value.some((val:string|number|object)=>this.deep_search({query:query,value:val,skiping_field}))
            }
            if(validate_data.value_is_object){

                  return Object.entries(value)
                  .map(([key,values])=>{
                        //? kalau skiping field ada isinya
                        if(skiping_field.length>0){
                              //? lewati key tertentu
                              if(!skiping_field.includes(key)){
                                    return values
                              }
                        }else{
                              //?kalau kosong gak ada nilainya
                              return values
                        }
                  })
                  .filter(val=>val!==undefined)
                  .some(val=>this.deep_search({query:query,value:val,skiping_field}))
            }

           return false 
     } 

     
     public static deep_search2=({data,queries,logic='or',skiping_field}:t_deep_search2):boolean=>{
                const validate_data_type={
                    array:Array.isArray(data),
                    string:typeof data === 'string',
                    number:typeof data === 'number'
                }
                //? nilai falsy 
                /**
                 * ?null (mengatasi bug typeof null === 'object')
                 * ?undefined (jika ada properti objek yang tidak diisi)
                 * ?"" (string kosong)
                 * ?0 atau NaN
                 * todo: loloskan string kosong dan 0 jika ada
                 */
                if( data === null ||  data === undefined )return false
                //todo : array adalah object keynya index {0:data,1:jaka} tapi dikasih property length pop push dll
                //todo :param queries itu memvalidasi banyak data dari array lalu data dicari dengan some untuk mnencocokkan setiap data yang akan cocok ,queries pakai every guna memastikan semua value queries ada didalam array, data yang diubah adalah datanya[data yang dimasukkan kedalam param data lalu divalidasi sampai level type data primitif[value berupa string ataupun number]] karena yang dicari adalah nilai dari data bukan queriesnya karena queries hanya digunakkan untuk proses pencarian data 
                  if(Array.isArray(data)){
                    //todo param queries_data akan dioper guna pencocokan di level dasar | type data primitif via parameter 
                    //todo: every merupakan perulangan yang mencocokkan nilai dan return berupa boolean every akan memastikan semua data harus bernilai true jika ada 1 yang false maka dianggap gagal every itu seperti logika dan &&  misal 1>3 && 6===6 maka jawabannya false sebab logika dan[&&] menghasilkan false jika kedua nilai perbandingan tidak benar semua 
                    //todo: untuk some dia akan benar jika salah satu datanya ada yang bernilai true atau benar ,some logikanya seperti operator or | , misal 1>2 | 5<2 hasilnya true karena salah satu perbandingan nilai ada yang benar 
                       
                               //? kalau object {country:palestine} maka?
                              //? menghasilkan nested array [country,palestine] 
                              //? misal queries berisi [country_name,palestine]
                              //? cocokkan semua value dari queries dan semua data di queries harus ada didalam data
                              //? query_data menyimpan queries untuk dicocokkan pada saat data di ekstrak menjadi type data primitif  
                            return data.some(valsome=>this.deep_search2({data:valsome,queries:queries,logic,skiping_field}))
                        
                  }
                  //? jika pengecekkan object ditaruh dipaling atas maka dia akan menyebabkan infinite loop karena object di konversi sebagai array lalu di cek di pengecekan object lagi tanpa henti karena array adalah object juga
                  if(typeof data ==='object'&&data!=null){
                 
                        const data_arrays=Object.entries(data as Record<string,any>)
                        .reduce((acc,[key,value])=>{
                              if(skiping_field.length>0){
                                    // todo: kalau skipping field tidak kosong maka buang fieldnya
                                    if(!skiping_field.includes(key)){
                                          acc[key]=value
                                    }
                              }else{
                                    // todo: masukkan semua field
                                    acc[key]=value
                              }

                              return acc
                        },{} as Record<string,any>)//todo: return object[key:string]:any
                        //todo: check setiap data
                        //? kalau ada 1 data key match misal key maka akan terus check minimal 1 kecocokan dan dia true
                        //? jika data array [[name,jaka],[country_name,palestine]]
                        //! todo: refaktor jadi deepsearch bongkar jadi primitif value dibongkar 1 per 1 lalu dicocokan strict misal id == id saat menyentuh type data primitif
                     const search_datas_criteria=Object.entries(queries)
                     const check_matching=(criteria:Array<{k:string,v:any}|string|number>)=>{
                           const [keyEntry, valueEntry] = criteria;
                              /**
                               * todo: kalau valueEntry adalah object dia akan berisi {k:val,v:val} lalu keyEntry berisi index misal 0 karena kan queries itu adalah array<{key,val}> nah bentuknya kurleb seperti ini [{key:id,val:1},{key:name,val:jack}] karena object.entries bertugas membongkar array maupun object menjadi pair maka dia akan lihat dulu kalau dia adalah array maka keynya jadi index dari array itu sendiri kalau object maka keynya adalah key dari object itu sendiri  
                               * todo: [jaka,id,12] menjadi [[0,jaka],[1,id][2,12]]
                               * todo: [{val:name,key:name}] [[0,{val:name,key:name}]]
                               * todo: {val:name,key:id} menjadi [ [val,name],[key,id] ]
                               */

                              if (typeof valueEntry === 'object' && valueEntry !== null && 'k' in valueEntry) {
                                   
                                    const actualValue = data_arrays[valueEntry.k];
                                    if (actualValue === undefined) return false;

                                    if (valueEntry.k === 'id') {
                                          return actualValue.toString() === valueEntry.v.toString();
                                    }
                                    return actualValue.toString().toLowerCase().includes(valueEntry.v.toString().toLowerCase());
                              }

                              
                              if(typeof keyEntry !== "number" || typeof keyEntry !== "string")return false
                              const actualValue = data_arrays[keyEntry];
                              if (actualValue === undefined) return false;

                              if (keyEntry === 'id') {
                                    return actualValue.toString() === valueEntry.toString();
                              }
                              return actualValue.toString().toLowerCase().includes(valueEntry.toString().toLowerCase());
                        }
                        let is_match=false
                        if(logic === 'and')is_match=search_datas_criteria.every(criteria=>check_matching(criteria))
                        if(logic === 'or')is_match=search_datas_criteria.some(criteria=>check_matching(criteria))
                        if(is_match==true)return true      
                  
                    

                    return false
                }
                  if(validate_data_type.number){
                        if(logic==='and'){
                              return queries.every(queri=> data ==queri)
                        }
                        if(logic==='or'){
                              return queries.some(queri=> data ==queri)
                        }
                  }
                  //? queries [country,palestine]
                  if(typeof data === 'string'){
                        //?misal data berisi palestine lalu queries_Data berisi palestine maka akan return true
                        //? pencocokan secara parsial misal data=palestine queries_data=pal maka dia true
                        if(logic === 'and'){
                              return queries.every(queri=> data.toLowerCase().includes(queri?.toString()!))
                        }
                        if(logic === 'or'){
                              return queries.some(queri=> data.toLowerCase().includes(queri?.toString()!))
                        }
                  }
                  return false
            }



            public static responses({cb,code}:{cb:({status_code_response,message_response,success_response}:{status_code_response:number,message_response:string,success_response:boolean})=>void,code:200|404}){
                    let status_code_response:number
                    let message_response:string
                    let success_response:boolean
                    const data_responses={
                        200:{
                            status_code_response:e_status_code.SuccessCode as number,
                            message_response:e_status_code.SuccessMessage as string,
                            success_response:true
                        },
                        404:{
                            status_code_response:e_status_code.NotFoundCode as number,
                            message_response:e_status_code.NotFoundMessage as string,
                            success_response:false
                        }
                    }
                     status_code_response=data_responses[code].status_code_response
                     message_response=data_responses[code].message_response
                     success_response=data_responses[code].success_response
                    cb({
                        message_response,
                        status_code_response,
                        success_response
                    })
                    

                }


}