// 1. Menü Açma/Kapama
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("hidden");
}

// 2. GitHub'dan Kod Çekme ve İşleme
async function fetchGitHubFile(url, action) {
    try {
        const response = await fetch(url);
        const code = await response.text();

        if (action === 'copy') {
            navigator.clipboard.writeText(code);
            alert("Script panoya kopyalandı!");
        } else if (action === 'view') {
            // Basit bir modal/alert ile içeriği gösteriyoruz
            alert("--- SCRIPT İÇERİĞİ ---\n\n" + code);
        }
    } catch (error) {
        console.error("Hata oluştu:", error);
        alert("Script yüklenemedi, GitHub linkini kontrol et.");
    }
}

// Menü dışına tıklandığında menüyü kapatma özelliği
document.addEventListener('click', function(event) {
    const menu = document.getElementById('nav-menu');
    const btn = document.querySelector('.menu-btn');
    if (!menu.contains(event.target) && event.target !== btn) {
        menu.classList.add('hidden');
    }
});
