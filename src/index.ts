import { Elysia ,t} from "elysia";
import { openapi } from '@elysia/openapi'
import { rateLimit } from 'elysia-rate-limit'
import { DonationController } from "../src/modules";
import { Universal_api_util } from "./utils";
//index is controller service model
//rate limit 80
// 429 Too Many Requests
const donation_controller=new DonationController()
const crime_keyword_route:string='/crime' 
const donation_keyword_route:string='/donation' 
// todo donation route start
const v1donation=new Elysia()
.get(`${donation_keyword_route}s`,({set,query})=>{
      const q_params=Universal_api_util.get_queries_params({query})
  return donation_controller.Index({q_params,status({ status_number }) {
    if(typeof status_number === 'number')set.status=status_number
  },})
}) 
.get(`${donation_keyword_route}/:id/:country`,({set,params:{id,country}})=>{
  // let status_code:number=200 ,message:string="ok",success:boolean=true 
     return donation_controller.Show({status({ status_number }) {
    if(typeof status_number === 'number')set.status=status_number
  },id,country})
})
// todo donation route end
// todo crime route start
const v1crime=new Elysia()
.get(`${crime_keyword_route}s`,()=>"hello") 
.get(`${crime_keyword_route}/:id`,({params:{id}})=>"hello "+id) 
// todo crime route end

const app = new Elysia()
.use(rateLimit({
  duration:60_000, //1 minutes
  max:80, //maximal hit request in 60 seconds or 1 minutes,
  errorResponse:"too many request" //when user hit too many request and reach the limit message will appear
}))
.use(openapi())
.get("/", ({set}) => {
   const status_code=set.status=400
   set.status=400

   return "hello world "+status_code
})
.get("/ip", ({server,request}) =>{
  return server?.requestIP(request)
})
.group('api/v1',(app)=>
  app
.use(v1crime)
.use(v1donation)
 
.get("/query",({query})=>query,{
    query:t.Object({
      name:t.String()
    })
  })

  /**
 * todo bisa filter data berdasarkan q_param
 * todo q_global_id 
 * todo q_search_country
 * todo q_search{semua kecuali negara dan global id}
 */

   
      )
  
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
