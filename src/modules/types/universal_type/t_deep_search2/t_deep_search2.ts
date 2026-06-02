import { t_skiping_field } from "../t_skiping_field/t_skiping_field"

 
 type t_deep_search2=t_skiping_field&{
            data:unknown,
            queries:Array<{k:string,v:any}|string|number>,
            logic:'or'|'and'
     }

export{ t_deep_search2}     