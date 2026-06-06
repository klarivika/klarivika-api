// ! kode program terlalu kompleks karena tidak implements kiss[keep it simple stupid] ,jika admin ingin saya ubah kodenya jadi kiss tinggal dm aja
//? deepsearch ada di 
// todo: DonationRepository
// todo: DonationModel
/**
 * ? di show[country,id] dia adalah data tunggal tapi dia butuh FitureQSearchCountry untuk memvalidasi agar program tidak ngawur dan spesifik untuk pencarian country saja misal user hit end point ke /donation/1/pal {donation/:id/:country} [pal akan cocok dengan palestine, lalu saat user ketik yang lain misal alex maka akan direspon 404 , id akan digunakan untuk pengecekan data] lalu di show jika ada id maka masukkan field id karena FitureQSearchCountry akan digunakan di lebih dari 1 fungsi misal index sedangkan show hanya butuh FitureQSearchCountry
 * todo : FitureQSearchCountry
 * todo : FitureQSearch
 */

/**
 * todo: saya membutuhkan method private yang di implementasikan di repository saya ,kalau ada yang hapus maka dia akan error sama seperti interface tapi interface tidak mengijinkan private method 
 * todo : yang mengijinkan untuk bikin kontrak method bisa memiliki private method adalah abstract class
 * todo: bukan private[tidak bisa dipanggil oleh class turunan] tapi protected bisa dipanggil oleh class turunan tapi tidak bisa dipanggil saat class dijadikan object [const class_name=new className()]
 */

/**
 * todo : dugaan bug di skiping field file universal_api_utils deepsearch2 di line gg
 */

/**
 * todo : implementasi pengamanan kode yang harus ada di masing masing controller database model repository dan service
 * todo : kodenya dibuat agar bisa merubah 1 kode tanpa harus refaktor banyak code line 
 * todo: kode di model harus sama semua methodnya agar bisa digunakkan tanpa me refaktor kodenya tinggal ubah nama modelnya dari private model=new userModel() private model=new PerpustakaanModel() 
 */
/**
 * todo: untuk kode fitur FitureQSearchCountry FitureQSearch sama persis kodenya kalau dipake di kode lain bakal ngeik ulang dan copy paste bakal ngebosenin mending disimpan di base abstract class nanti tinggal dipanggil diturunan classnya cuma modelnya[model yang ambil dari turunan classnya] yang akan dioper sebagai cb
 * todo : implement dry [dont repeat yourself]
 * todo: untuk model kembaliannya mungkin akan berbeda karena api yang dikembangkan ada 2 type api untuk a dan untuk b
 * ! bug karena di base abstract modelnya beda type maka pasti akan bentrok solusinya buat modelnya jadi union type t_q_search_country_param={model_find:modelA|modelb}
 */
/**
 * todo: gunakan abstract class untuk memproteksi protected properties
 * todo: baseAbstract khusus untuk repository karena mengandung method yang diperlukan yakni FitureQSearchCountry dan FitureQSearch
 * todo: FitureQSearchCountry mengalami maslah bug di route donation show tidak mau error jika salah input country
 */
//? contoh 

interface BaseModelInterface{
        findId(id:number):string
        findAll():string
        message():string
        name:string;
}

class perpustakaanModel implements BaseModelInterface{
    private data="perpustakaan database"
    public name="perpustakaan"
    
    findAll(): string {
        return "finding all data from "+this.data
    }
    findId(id: number): string {
        return `finding data from ${this.data} with the id ${id}`
    }
    message(): string {
        return "wellcome to the "+this.data
    }
}

class pasarModel implements BaseModelInterface{
    private data="pasar database"
    public name="pasar"
    findAll(): string {
        return "finding all data from "+this.data
    }
    findId(id: number): string {
        return `finding data from ${this.data} with the id ${id}`
    }
    message(): string {
        return "wellcome to the "+this.data
    }
}

class WarungModel implements BaseModelInterface{
    private data="warung database"
    public name="warung"
    findAll(): string {
        return "finding all data from "+this.data
    }
    findId(id: number): string {
        return `finding data from ${this.data} with the id ${id}`
    }
    message(): string {
        return "wellcome to the "+this.data
    }
}

abstract class mandatory{
    protected waris(apa:String,name:string):string{
        return `aku ${name} sebagai orang tuamu hendak mewariskan ${apa} kepada anakku `
    }
    protected abstract ortuBicara(apa:string):string
}
//todo: semua class manusia wajib bisa berbicara kepada anaknya dan punya warisan yang diwariskan kepada anaknya
// todo: bikin class manusia yang punya keinginan berpergian
class jack_sebagai_ortu extends mandatory {
    // ? bisa gonta ganti model dengan method yang sama persis tanpa perlu buang waktu refaktor kode 
    // ? kalau ingin ganti model tinggal ganti isi variablenya dengan model yang diinginkan
    private model=new perpustakaanModel()
    private name="jack"
    protected ortuBicara(apa: string): string {
        return this.waris("emas 12 gram",this.name)+apa
    }
    //?menampilkan kegiatan ada dimana perpus? warung atau pasar tergantung modelnya
    statusMessage():string{
        return `aku lagi di ${this.model.name}`
    }
    statusFindDatas():string{
        return this.model.findAll()
    }
    statusFindData(id:number):string{
        return this.model.findId(id)
    }
    statusWellcomeMessage():string{
        return this.model.message()
        
    }
}

class imam_sebagai_anak extends jack_sebagai_ortu{
    private name_anak="imam"
        anakBicara(){
            this.ortuBicara(this.name_anak)
        }
}