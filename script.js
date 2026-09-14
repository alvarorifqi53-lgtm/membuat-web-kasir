let totalHarga = 0;

// Menghitung total harga
function hitungTotal() {
    let harga = Number(document.getElementById("harga").value);
    let jumlah = Number(document.getElementById("jumlah").value);

    totalHarga = harga * jumlah;

    if (totalHarga >= 300000) {
        let potongan = totalHarga * 0.2; // diskon 20%
        totalHarga = totalHarga - potongan;
    }

    document.getElementById("total").innerText =
        "Rp " + totalHarga.toLocaleString("id-ID");
}

// Menghitung kembalian
function hitungKembalian() {
    let uang = Number(document.getElementById("uang").value);

    if (uang < totalHarga) {
        alert("Uang pembayaran kurang!");
        return;
    }

    let kembalian = uang - totalHarga;

    document.getElementById("kembalian").innerText =
        "Rp " + kembalian.toLocaleString("id-ID");
}