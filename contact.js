document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form verilerini al
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Form doğrulama
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                alert('Lütfen tüm alanları doldurun.');
                return;
            }
            
            // E-posta formatı kontrolü
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                alert('Lütfen geçerli bir e-posta adresi girin.');
                return;
            }
            
            // Normalde burada bir API'ye gönderilir
            // Şimdilik başarılı mesajı gösterelim
            alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
            
            // Formu temizle
            contactForm.reset();
        });
    }
}); 