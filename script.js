// Tüm dünya ülkeleri ve saat dilimleri
const allCountries = [
    { name: 'Afganistan', timezone: 'Asia/Kabul' },
    { name: 'Almanya', timezone: 'Europe/Berlin' },
    { name: 'Amerika Birleşik Devletleri', timezone: 'America/New_York' },
    { name: 'Andorra', timezone: 'Europe/Andorra' },
    { name: 'Angola', timezone: 'Africa/Luanda' },
    { name: 'Antigua ve Barbuda', timezone: 'America/Antigua' },
    { name: 'Arjantin', timezone: 'America/Argentina/Buenos_Aires' },
    { name: 'Arnavutluk', timezone: 'Europe/Tirane' },
    { name: 'Avustralya', timezone: 'Australia/Sydney' },
    { name: 'Avusturya', timezone: 'Europe/Vienna' },
    { name: 'Azerbaycan', timezone: 'Asia/Baku' },
    { name: 'Bahamalar', timezone: 'America/Nassau' },
    { name: 'Bahreyn', timezone: 'Asia/Bahrain' },
    { name: 'Bangladeş', timezone: 'Asia/Dhaka' },
    { name: 'Barbados', timezone: 'America/Barbados' },
    { name: 'Belarus', timezone: 'Europe/Minsk' },
    { name: 'Belçika', timezone: 'Europe/Brussels' },
    { name: 'Belize', timezone: 'America/Belize' },
    { name: 'Benin', timezone: 'Africa/Porto-Novo' },
    { name: 'Bhutan', timezone: 'Asia/Thimphu' },
    { name: 'Birleşik Arap Emirlikleri', timezone: 'Asia/Dubai' },
    { name: 'Birleşik Krallık', timezone: 'Europe/London' },
    { name: 'Bolivya', timezone: 'America/La_Paz' },
    { name: 'Bosna Hersek', timezone: 'Europe/Sarajevo' },
    { name: 'Botsvana', timezone: 'Africa/Gaborone' },
    { name: 'Brezilya', timezone: 'America/Sao_Paulo' },
    { name: 'Brunei', timezone: 'Asia/Brunei' },
    { name: 'Bulgaristan', timezone: 'Europe/Sofia' },
    { name: 'Burkina Faso', timezone: 'Africa/Ouagadougou' },
    { name: 'Burundi', timezone: 'Africa/Bujumbura' },
    { name: 'Cezayir', timezone: 'Africa/Algiers' },
    { name: 'Cibuti', timezone: 'Africa/Djibouti' },
    { name: 'Çad', timezone: 'Africa/Ndjamena' },
    { name: 'Çek Cumhuriyeti', timezone: 'Europe/Prague' },
    { name: 'Çin', timezone: 'Asia/Shanghai' },
    { name: 'Danimarka', timezone: 'Europe/Copenhagen' },
    { name: 'Doğu Timor', timezone: 'Asia/Dili' },
    { name: 'Dominik Cumhuriyeti', timezone: 'America/Santo_Domingo' },
    { name: 'Dominika', timezone: 'America/Dominica' },
    { name: 'Ekvador', timezone: 'America/Guayaquil' },
    { name: 'Ekvator Ginesi', timezone: 'Africa/Malabo' },
    { name: 'El Salvador', timezone: 'America/El_Salvador' },
    { name: 'Endonezya', timezone: 'Asia/Jakarta' },
    { name: 'Eritre', timezone: 'Africa/Asmara' },
    { name: 'Ermenistan', timezone: 'Asia/Yerevan' },
    { name: 'Estonya', timezone: 'Europe/Tallinn' },
    { name: 'Esvatini', timezone: 'Africa/Mbabane' },
    { name: 'Etiyopya', timezone: 'Africa/Addis_Ababa' },
    { name: 'Fas', timezone: 'Africa/Casablanca' },
    { name: 'Fiji', timezone: 'Pacific/Fiji' },
    { name: 'Fildişi Sahili', timezone: 'Africa/Abidjan' },
    { name: 'Filipinler', timezone: 'Asia/Manila' },
    { name: 'Finlandiya', timezone: 'Europe/Helsinki' },
    { name: 'Fransa', timezone: 'Europe/Paris' },
    { name: 'Gabon', timezone: 'Africa/Libreville' },
    { name: 'Gambiya', timezone: 'Africa/Banjul' },
    { name: 'Gana', timezone: 'Africa/Accra' },
    { name: 'Gine', timezone: 'Africa/Conakry' },
    { name: 'Gine-Bissau', timezone: 'Africa/Bissau' },
    { name: 'Grenada', timezone: 'America/Grenada' },
    { name: 'Guatemala', timezone: 'America/Guatemala' },
    { name: 'Guyana', timezone: 'America/Guyana' },
    { name: 'Güney Afrika', timezone: 'Africa/Johannesburg' },
    { name: 'Güney Kore', timezone: 'Asia/Seoul' },
    { name: 'Güney Sudan', timezone: 'Africa/Juba' },
    { name: 'Gürcistan', timezone: 'Asia/Tbilisi' },
    { name: 'Haiti', timezone: 'America/Port-au-Prince' },
    { name: 'Hindistan', timezone: 'Asia/Kolkata' },
    { name: 'Hırvatistan', timezone: 'Europe/Zagreb' },
    { name: 'Hollanda', timezone: 'Europe/Amsterdam' },
    { name: 'Honduras', timezone: 'America/Tegucigalpa' },
    { name: 'Irak', timezone: 'Asia/Baghdad' },
    { name: 'İran', timezone: 'Asia/Tehran' },
    { name: 'İrlanda', timezone: 'Europe/Dublin' },
    { name: 'İspanya', timezone: 'Europe/Madrid' },
    { name: 'İsrail', timezone: 'Asia/Jerusalem' },
    { name: 'İsveç', timezone: 'Europe/Stockholm' },
    { name: 'İsviçre', timezone: 'Europe/Zurich' },
    { name: 'İtalya', timezone: 'Europe/Rome' },
    { name: 'İzlanda', timezone: 'Atlantic/Reykjavik' },
    { name: 'Jamaika', timezone: 'America/Jamaica' },
    { name: 'Japonya', timezone: 'Asia/Tokyo' },
    { name: 'Kamboçya', timezone: 'Asia/Phnom_Penh' },
    { name: 'Kamerun', timezone: 'Africa/Douala' },
    { name: 'Kanada', timezone: 'America/Toronto' },
    { name: 'Karadağ', timezone: 'Europe/Podgorica' },
    { name: 'Katar', timezone: 'Asia/Qatar' },
    { name: 'Kazakistan', timezone: 'Asia/Almaty' },
    { name: 'Kenya', timezone: 'Africa/Nairobi' },
    { name: 'Kıbrıs', timezone: 'Asia/Nicosia' },
    { name: 'Kırgızistan', timezone: 'Asia/Bishkek' },
    { name: 'Kiribati', timezone: 'Pacific/Tarawa' },
    { name: 'Kolombiya', timezone: 'America/Bogota' },
    { name: 'Komorlar', timezone: 'Indian/Comoro' },
    { name: 'Kongo', timezone: 'Africa/Brazzaville' },
    { name: 'Kongo Demokratik Cumhuriyeti', timezone: 'Africa/Kinshasa' },
    { name: 'Kosova', timezone: 'Europe/Belgrade' },
    { name: 'Kosta Rika', timezone: 'America/Costa_Rica' },
    { name: 'Kuveyt', timezone: 'Asia/Kuwait' },
    { name: 'Kuzey Kore', timezone: 'Asia/Pyongyang' },
    { name: 'Kuzey Makedonya', timezone: 'Europe/Skopje' },
    { name: 'Küba', timezone: 'America/Havana' },
    { name: 'Laos', timezone: 'Asia/Vientiane' },
    { name: 'Lesotho', timezone: 'Africa/Maseru' },
    { name: 'Letonya', timezone: 'Europe/Riga' },
    { name: 'Liberya', timezone: 'Africa/Monrovia' },
    { name: 'Libya', timezone: 'Africa/Tripoli' },
    { name: 'Liechtenstein', timezone: 'Europe/Vaduz' },
    { name: 'Litvanya', timezone: 'Europe/Vilnius' },
    { name: 'Lübnan', timezone: 'Asia/Beirut' },
    { name: 'Lüksemburg', timezone: 'Europe/Luxembourg' },
    { name: 'Macaristan', timezone: 'Europe/Budapest' },
    { name: 'Madagaskar', timezone: 'Indian/Antananarivo' },
    { name: 'Malavi', timezone: 'Africa/Blantyre' },
    { name: 'Maldivler', timezone: 'Indian/Maldives' },
    { name: 'Malezya', timezone: 'Asia/Kuala_Lumpur' },
    { name: 'Mali', timezone: 'Africa/Bamako' },
    { name: 'Malta', timezone: 'Europe/Malta' },
    { name: 'Marshall Adaları', timezone: 'Pacific/Majuro' },
    { name: 'Mauritius', timezone: 'Indian/Mauritius' },
    { name: 'Meksika', timezone: 'America/Mexico_City' },
    { name: 'Mısır', timezone: 'Africa/Cairo' },
    { name: 'Mikronezya', timezone: 'Pacific/Chuuk' },
    { name: 'Moğolistan', timezone: 'Asia/Ulaanbaatar' },
    { name: 'Moldova', timezone: 'Europe/Chisinau' },
    { name: 'Monako', timezone: 'Europe/Monaco' },
    { name: 'Moritanya', timezone: 'Africa/Nouakchott' },
    { name: 'Mozambik', timezone: 'Africa/Maputo' },
    { name: 'Myanmar', timezone: 'Asia/Yangon' },
    { name: 'Namibya', timezone: 'Africa/Windhoek' },
    { name: 'Nauru', timezone: 'Pacific/Nauru' },
    { name: 'Nepal', timezone: 'Asia/Kathmandu' },
    { name: 'Nijer', timezone: 'Africa/Niamey' },
    { name: 'Nijerya', timezone: 'Africa/Lagos' },
    { name: 'Nikaragua', timezone: 'America/Managua' },
    { name: 'Norveç', timezone: 'Europe/Oslo' },
    { name: 'Orta Afrika Cumhuriyeti', timezone: 'Africa/Bangui' },
    { name: 'Özbekistan', timezone: 'Asia/Tashkent' },
    { name: 'Pakistan', timezone: 'Asia/Karachi' },
    { name: 'Palau', timezone: 'Pacific/Palau' },
    { name: 'Panama', timezone: 'America/Panama' },
    { name: 'Papua Yeni Gine', timezone: 'Pacific/Port_Moresby' },
    { name: 'Paraguay', timezone: 'America/Asuncion' },
    { name: 'Peru', timezone: 'America/Lima' },
    { name: 'Polonya', timezone: 'Europe/Warsaw' },
    { name: 'Portekiz', timezone: 'Europe/Lisbon' },
    { name: 'Romanya', timezone: 'Europe/Bucharest' },
    { name: 'Ruanda', timezone: 'Africa/Kigali' },
    { name: 'Rusya', timezone: 'Europe/Moscow' },
    { name: 'Saint Kitts ve Nevis', timezone: 'America/St_Kitts' },
    { name: 'Saint Lucia', timezone: 'America/St_Lucia' },
    { name: 'Saint Vincent ve Grenadinler', timezone: 'America/St_Vincent' },
    { name: 'Samoa', timezone: 'Pacific/Apia' },
    { name: 'San Marino', timezone: 'Europe/San_Marino' },
    { name: 'Sao Tome ve Principe', timezone: 'Africa/Sao_Tome' },
    { name: 'Senegal', timezone: 'Africa/Dakar' },
    { name: 'Seyşeller', timezone: 'Indian/Mahe' },
    { name: 'Sırbistan', timezone: 'Europe/Belgrade' },
    { name: 'Sierra Leone', timezone: 'Africa/Freetown' },
    { name: 'Singapur', timezone: 'Asia/Singapore' },
    { name: 'Slovakya', timezone: 'Europe/Bratislava' },
    { name: 'Slovenya', timezone: 'Europe/Ljubljana' },
    { name: 'Solomon Adaları', timezone: 'Pacific/Guadalcanal' },
    { name: 'Somali', timezone: 'Africa/Mogadishu' },
    { name: 'Sri Lanka', timezone: 'Asia/Colombo' },
    { name: 'Sudan', timezone: 'Africa/Khartoum' },
    { name: 'Surinam', timezone: 'America/Paramaribo' },
    { name: 'Suriye', timezone: 'Asia/Damascus' },
    { name: 'Suudi Arabistan', timezone: 'Asia/Riyadh' },
    { name: 'Şili', timezone: 'America/Santiago' },
    { name: 'Tacikistan', timezone: 'Asia/Dushanbe' },
    { name: 'Tanzanya', timezone: 'Africa/Dar_es_Salaam' },
    { name: 'Tayland', timezone: 'Asia/Bangkok' },
    { name: 'Tayvan', timezone: 'Asia/Taipei' },
    { name: 'Togo', timezone: 'Africa/Lome' },
    { name: 'Tonga', timezone: 'Pacific/Tongatapu' },
    { name: 'Trinidad ve Tobago', timezone: 'America/Port_of_Spain' },
    { name: 'Tunus', timezone: 'Africa/Tunis' },
    { name: 'Tuvalu', timezone: 'Pacific/Funafuti' },
    { name: 'Türkiye', timezone: 'Europe/Istanbul' },
    { name: 'Türkmenistan', timezone: 'Asia/Ashgabat' },
    { name: 'Uganda', timezone: 'Africa/Kampala' },
    { name: 'Ukrayna', timezone: 'Europe/Kiev' },
    { name: 'Umman', timezone: 'Asia/Muscat' },
    { name: 'Uruguay', timezone: 'America/Montevideo' },
    { name: 'Ürdün', timezone: 'Asia/Amman' },
    { name: 'Vanuatu', timezone: 'Pacific/Efate' },
    { name: 'Vatikan', timezone: 'Europe/Vatican' },
    { name: 'Venezuela', timezone: 'America/Caracas' },
    { name: 'Vietnam', timezone: 'Asia/Ho_Chi_Minh' },
    { name: 'Yemen', timezone: 'Asia/Aden' },
    { name: 'Yeni Zelanda', timezone: 'Pacific/Auckland' },
    { name: 'Yeşil Burun', timezone: 'Atlantic/Cape_Verde' },
    { name: 'Yunanistan', timezone: 'Europe/Athens' },
    { name: 'Zambiya', timezone: 'Africa/Lusaka' },
    { name: 'Zimbabve', timezone: 'Africa/Harare' }
];

// Görüntülenecek ülkeler
let displayedCountries = [...allCountries];

// DOM elementleri
const clockGrid = document.getElementById('clockGrid');
const searchInput = document.getElementById('searchInput');

// Saatleri güncelleme fonksiyonu
window.updateClocks = function() {
    clockGrid.innerHTML = ''; // Grid'i temizle
    
    displayedCountries.forEach(country => {
        try {
            const time = new Date().toLocaleTimeString('tr-TR', {
                timeZone: country.timezone,
                hour12: false
            });
            
            const date = new Date().toLocaleDateString('tr-TR', {
                timeZone: country.timezone,
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
            
            const clockCard = document.createElement('div');
            clockCard.className = 'clock-card';
            clockCard.innerHTML = `
                <h2>${country.name}</h2>
                <div class="time">${time}</div>
                <div class="date">${date}</div>
            `;
            
            clockGrid.appendChild(clockCard);
        } catch (error) {
            console.log(`Hata: ${country.name} için saat dilimi yüklenemedi`);
        }
    });
}

// Arama fonksiyonu
function filterCountries() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') {
        displayedCountries = [...allCountries];
    } else {
        displayedCountries = allCountries.filter(country => 
            country.name.toLowerCase().includes(searchTerm)
        );
    }
    updateClocks();
}

// Event listeners
searchInput.addEventListener('input', filterCountries);

// Saatleri her saniye güncelle
updateClocks();
setInterval(updateClocks, 1000); 
