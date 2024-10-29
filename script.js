// script.js

// Fungsi untuk menampilkan alert saat halaman dimuat
window.onload = function() {
    alert("Selamat datang di website spesial untukmu, Sayang!");
};

// Menambahkan partikel cinta
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Durasi acak antara 3s dan 5s
    document.body.appendChild(heart);

    // Menghapus partikel setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, 5000); // Sesuaikan dengan durasi animasi
}

// Membuat partikel cinta setiap detik
setInterval(createHeart, 1000);