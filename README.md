# Landing Page - Masterclass: Zbuduj Zdrową Relację z Cukrem

## 📋 Opis projektu

Nowoczesny, profesjonalny landing page stworzony według najlepszych praktyk sprzedażowych. Strona została zaprojektowana z myślą o maksymalnej konwersji i doświadczeniu użytkownika.

## 🎨 Wykorzystane kolory

Kolory zostały wyciągnięte z oryginalnej strony:
- **Primary Color**: #D81B8F (różowy/magenta)
- **Primary Dark**: #C2178B (ciemniejszy różowy)
- **Secondary Color**: #2D3748 (granatowy/szary)
- **Background Light**: #F7FAFC (jasny szary)
- **Text Color**: #1A202C (czarny)

## ✨ Główne funkcje

### 1. **Hero Section**
- Przyciągający uwagę nagłówek z główną obietnicą
- Call-to-Action przycisk
- Social proof (gwiazdki + liczba klientów)
- Placeholder na zdjęcie (można zastąpić prawdziwym)

### 2. **Sticky Timer**
- Odliczanie do końca promocji (7 dni)
- Automatyczne ukrywanie przy scrollowaniu w dół
- Pokazywanie przy scrollowaniu w górę

### 3. **Transformacja BYŁO/BĘDZIE**
- 7 punktów pokazujących zmianę
- Wizualne porównanie przed/po
- Emotikony dla lepszego zrozumienia

### 4. **Testimoniale**
- Karty opinii klientów
- Gwiazdki oceny
- Placeholdery na avatary

### 5. **4 Etapy Transformacji**
- Wizualna timeline
- Numerowane kroki
- Strzałki pokazujące progresję

### 6. **FAQ z rozwijaniem**
- Interaktywne pytania i odpowiedzi
- Animowane otwieranie/zamykanie
- Ikona +/× przy każdym pytaniu

### 7. **Sekcja ofertowa**
- Box z produktem
- Lista korzyści (checkmarki)
- Cena przekreślona i aktualna
- Informacja omnibus
- Duży CTA button

### 8. **Animacje scrollowania**
- Elementy pojawiają się przy przewijaniu
- Efekt fade-in + slide-up
- Smooth scroll przy klikaniu w linki

## 📁 Struktura plików

```
landing-page.html    - Główny plik HTML
style.css           - Wszystkie style CSS
script.js           - Interaktywność JavaScript
README.md           - Ten plik z instrukcjami
```

## 🚀 Jak uruchomić?

1. **Otwórz plik `landing-page.html` w przeglądarce**
   - Wystarczy kliknąć dwukrotnie na plik
   - Lub przeciągnąć go do okna przeglądarki

2. **Hosting online:**
   - Wgraj wszystkie 3 pliki na serwer
   - Upewnij się, że są w tym samym folderze
   - Otwórz przez przeglądarkę

## 🔧 Personalizacja

### Zmiana zdjęć

W pliku `landing-page.html` znajdź wszystkie `<img>` tagi z placeholderami:

```html
<img src="https://via.placeholder.com/500x600/D81B8F/ffffff?text=Tekst" alt="Opis">
```

Zamień na prawdziwe zdjęcia:

```html
<img src="twoje-zdjecie.jpg" alt="Opis">
```

**Ważne miejsca na zdjęcia:**
- Hero section (linia ~49) - zdjęcie główne eksperta
- Video section (linia ~106) - miniatura wideo
- Why section (linia ~202) - infografika
- About section (linia ~380) - zdjęcie "O mnie"

### Zmiana treści

1. **Nagłówki** - znajdź tagi `<h1>`, `<h2>`, `<h3>`
2. **Teksty** - edytuj zawartość paragrafów `<p>`
3. **Przyciski CTA** - zmień tekst w `<a class="cta-button">`

### Zmiana kolorów

W pliku `style.css` na początku znajdują się zmienne:

```css
:root {
    --primary-color: #D81B8F;  /* Główny kolor różowy */
    --primary-dark: #C2178B;   /* Ciemniejszy różowy */
    --secondary-color: #2D3748; /* Szary/granatowy */
}
```

Zmień te wartości, aby dostosować kolory do swoich potrzeb.

### Dodanie prawdziwego wideo

W pliku `script.js` (linia ~68) zmień funkcję `initVideo()`:

```javascript
function initVideo() {
    const videoPlaceholder = document.querySelector('.video-placeholder');

    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            // Zamień placeholder na iframe z Vimeo/YouTube
            videoPlaceholder.innerHTML = `
                <iframe
                    width="100%"
                    height="450"
                    src="https://www.youtube.com/embed/TU_VIDEO_ID"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
            `;
        });
    }
}
```

## 📱 Responsywność

Strona jest w pełni responsywna i dostosowuje się do:
- 💻 Desktopów (1200px+)
- 💻 Laptopów (992px - 1199px)
- 📱 Tabletów (768px - 991px)
- 📱 Telefonów (< 768px)

## ⚡ Funkcje JavaScript

1. **Countdown Timer** - odliczanie do końca oferty
2. **FAQ Toggle** - rozwijanie/zwijanie pytań
3. **Smooth Scroll** - płynne przewijanie do sekcji
4. **Scroll Animations** - animacje przy scrollowaniu
5. **Sticky Bar** - ukrywanie/pokazywanie górnego paska
6. **Analytics Ready** - gotowe do integracji z Google Analytics

## 🎯 Najlepsze praktyki zastosowane na stronie

✅ **Hero z jasną obietnicą** - użytkownik wie, co dostanie
✅ **Social proof** - testimoniale i liczby budują zaufanie
✅ **Transformacja BYŁO/BĘDZIE** - pokazuje wartość
✅ **Konkretne korzyści** - nie tylko cechy produktu
✅ **FAQ** - odpowiada na obiekcje
✅ **Urgency** - timer motywuje do działania
✅ **Wielokrotne CTA** - łatwy dostęp do zakupu
✅ **Mobile-first** - działa na wszystkich urządzeniach

## 🔗 Integracje gotowe do dodania

- 📊 Google Analytics
- 💳 System płatności (Stripe, PayU, Przelewy24)
- 📧 Email marketing (Mailchimp, GetResponse)
- 💬 Live chat (Tidio, Intercom)
- 📈 Facebook Pixel
- 🎨 A/B testing (Google Optimize)

## 📝 Co można jeszcze dodać?

1. **Popup Exit Intent** - gdy użytkownik chce opuścić stronę
2. **Live Chat** - bezpośredni kontakt
3. **Lightbox dla galerii** - powiększanie zdjęć
4. **Sekcja blogowa** - dodatkowe artykuły
5. **Porównanie pakietów** - jeśli jest więcej opcji
6. **Gwarancja zwrotu** - badge z 30-dniową gwarancją

## 🛠️ Hosting i wdrożenie

### Opcja 1: Netlify (Darmowy)
1. Zaloguj się na netlify.com
2. Przeciągnij folder ze stroną
3. Gotowe! Otrzymasz darmowy link

### Opcja 2: Własna domena
1. Kup domenę (np. nazwa.pl, ovh.pl)
2. Kup hosting (np. nazwa.pl, home.pl)
3. Wgraj pliki przez FTP
4. Skieruj domenę na hosting

## 📞 Wsparcie

Jeśli potrzebujesz pomocy z:
- Zmianą treści
- Dodaniem funkcji
- Integracją z systemami płatności
- Hostingiem

Skontaktuj się z twórcą strony.

## 📄 Licencja

Ten landing page został stworzony specjalnie dla klientki i może być swobodnie modyfikowany według potrzeb.

---

**Stworzone z ❤️ przez Claude AI**
**Data utworzenia:** 21 stycznia 2026