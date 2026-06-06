function hitungKemiripan(teksA:string, teksB:string) {
    const a = teksA.toLowerCase();
    const b = teksB.toLowerCase();

    // Jika sama persis, langsung kembalikan 100% kemiripan
    if (a === b) return 1.0;
    if (a.length === 0) return 0.0;
    if (b.length === 0) return 0.0;

    // Matriks untuk menghitung jarak perubahan huruf
    const matriks = [];

    for (let i = 0; i <= b.length; i++) {
        matriks[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matriks[0][j] = j;
    }

    // Isi matriks dengan rumus Levenshtein
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matriks[i][j] = matriks[i - 1][j - 1];
            } else {
                matriks[i][j] = Math.min(
                    matriks[i - 1][j - 1] + 1, // Ubah huruf
                    matriks[i][j - 1] + 1,     // Tambah huruf
                    matriks[i - 1][j] + 1      // Hapus huruf
                );
            }
        }
    }

    // Hitung persentase kemiripan berdasarkan jarak terjauh
    const jarakTerjauh = Math.max(a.length, b.length);
    const jarakPerubahan = matriks[b.length][a.length];
    
    return (jarakTerjauh - jarakPerubahan) / jarakTerjauh;
}

console.log(hitungKemiripan("palestine", "palestines")); // Output: 0.90 (90% Mirip - Kelebihan huruf 's')
console.log(hitungKemiripan("palestine", "palstine"));   // Output: 0.88 (88% Mirip - Kurang huruf 'e')
console.log(hitungKemiripan("palestine", "indonesia"));  // Output: 0.11 (11% Mirip - Jauh berbeda)

const databaseNegara = ["Indonesia", "Palestine", "Malaysia", "Singapore"];

function fuzzySearch(keyword:string, dataList:Array<string>) {
    const AMBANG_BATAS = 0.6; // Toleransi kemiripan minimal 60%

    return dataList
        .map(item => {
            // Hitung skor kemiripan untuk setiap item
            return {
                nama: item,
                skor: hitungKemiripan(keyword, item)
            };
        })
        // Filter: Hanya ambil yang skor kemiripannya di atas ambang batas
        .filter(hasil => hasil.skor >= AMBANG_BATAS)
        // Urutkan dari yang paling mirip (skor tertinggi) ke terendah
        .sort((a, b) => b.skor - a.skor)
        // Ambil data nama aslinya saja
        .map(hasil => hasil.nama);
}

// UJI COBA PENCARIAN
console.log(fuzzySearch("palestines", databaseNegara)); 
// Output: [ 'Palestine' ]

console.log(fuzzySearch("malay", databaseNegara)); 
// Output: [ 'Malaysia' ]
