# 📝 Instrukcje Szybkich Zmian

## Jak zastąpić placeholdery prawdziwymi zdjęciami?

### Krok 1: Przygotuj zdjęcia

Zalecane rozmiary:
- **Hero (główne zdjęcie)**: 500x600px
- **About (O mnie)**: 400x500px
- **Why section**: 400x400px
- **Testimoniale (avatary)**: 100x100px

### Krok 2: Umieść zdjęcia w tym samym folderze

```
twoj-folder/
├── landing-page.html
├── style.css
├── script.js
├── hero-photo.jpg          ← Twoje zdjęcie główne
├── about-photo.jpg         ← Zdjęcie do sekcji "O mnie"
└── video-thumbnail.jpg     ← Miniatura wideo
```

### Krok 3: Zamień linki w HTML

**PRZED:**
```html
<img src="https://via.placeholder.com/500x600/D81B8F/ffffff?text=Magdalena+Czerwinska" alt="...">
```

**PO:**
```html
<img src="hero-photo.jpg" alt="Magdalena Czerwińska - Jelitolog">
```

---

## Jak zmienić kolory na własne?

### W pliku `style.css` znajdź sekcję `:root` (linia 9-17)

**Jeśli chcesz niebieski zamiast różowego:**

```css
:root {
    --primary-color: #3182CE;      /* Niebieski */
    --primary-dark: #2C5282;       /* Ciemniejszy niebieski */
    --secondary-color: #2D3748;    /* Zostaw bez zmian */
    --text-color: #1A202C;         /* Zostaw bez zmian */
    --text-light: #718096;         /* Zostaw bez zmian */
    --bg-light: #F7FAFC;          /* Zostaw bez zmian */
    --bg-gray: #EDF2F7;           /* Zostaw bez zmian */
    --white: #FFFFFF;             /* Zostaw bez zmian */
}
```

**Inne popularne kolory:**

| Kolor | Primary | Primary Dark |
|-------|---------|--------------|
| Różowy (obecny) | #D81B8F | #C2178B |
| Niebieski | #3182CE | #2C5282 |
| Zielony | #48BB78 | #38A169 |
| Fioletowy | #805AD5 | #6B46C1 |
| Pomarańczowy | #ED8936 | #DD6B20 |

---

## Jak zmienić główne teksty?

### 1. Nagłówek Hero (linia ~42 w HTML)

**ZMIEŃ:**
```html
<h1 class="hero-title">
    Koniec z przewlekłym zmęczeniem, zachciankami na słodkie i trądzikiem.<br>
    <span class="highlight">Pozbądź się chaosu glukozowego i odzyskaj stabilną energię.</span>
</h1>
```

**NA:**
```html
<h1 class="hero-title">
    Twój nowy nagłówek tutaj<br>
    <span class="highlight">Podkreślona część (różowa)</span>
</h1>
```

### 2. Call to Action (przyciski)

**Znajdź wszystkie:**
```html
<a href="#oferta" class="cta-button primary">KUPUJĘ TERAZ</a>
```

**Zmień tekst na:**
```html
<a href="#oferta" class="cta-button primary">DOŁĄCZAM DO KURSU</a>
<!-- lub -->
<a href="#oferta" class="cta-button primary">REZERWUJĘ MIEJSCE</a>
<!-- lub -->
<a href="#oferta" class="cta-button primary">TAK, CHCĘ TO!</a>
```

### 3. Cena (linia ~572 w HTML)

**ZMIEŃ:**
```html
<div class="old-price">CENA: <span>159zł</span></div>
<div class="new-price">99 ZŁ</div>
<p class="omnibus">Najnższa cena z ostatnich 30 dni: 159 ZŁ</p>
```

---

## Jak dodać prawdziwe wideo?

### Opcja A: YouTube

1. Wgraj film na YouTube
2. Kliknij "Udostępnij" → "Osadź"
3. Skopiuj kod iframe

**W pliku HTML (linia ~106) zamień:**

```html
<div class="video-placeholder">
    <div class="play-button">▶</div>
    <p>Naucz się zdrowia relacji z cukrem...</p>
</div>
```

**NA:**

```html
<iframe
    width="100%"
    height="450"
    src="https://www.youtube.com/embed/TWOJ_VIDEO_ID"
    frameborder="0"
    allowfullscreen>
</iframe>
```

### Opcja B: Vimeo (lepsze dla profesjonalnych wideo)

```html
<iframe
    src="https://player.vimeo.com/video/TWOJ_VIDEO_ID"
    width="100%"
    height="450"
    frameborder="0"
    allowfullscreen>
</iframe>
```

---

## Jak zmienić czas odliczania?

W pliku `script.js` (linia ~4) znajdź:

```javascript
endDate.setDate(endDate.getDate() + 7);  // 7 dni
```

**Zmień na:**
```javascript
endDate.setDate(endDate.getDate() + 3);  // 3 dni
endDate.setDate(endDate.getDate() + 14); // 14 dni
endDate.setDate(endDate.getDate() + 30); // 30 dni
```

---

## Jak dodać swoje testimoniale?

W pliku HTML znajdź sekcję testimoniali (linia ~82) i powiel ten blok:

```html
<div class="testimonial-card">
    <div class="testimonial-avatar">
        <div class="avatar-placeholder">B</div> <!-- Pierwsza litera imienia -->
    </div>
    <h4>Imię</h4>
    <div class="stars">★★★★★</div> <!-- 5 gwiazdek lub mniej -->
    <p>Tutaj wpisz opinię klientki. Im bardziej szczegółowa i konkretna, tym lepiej!</p>
</div>
```

**Możesz też dodać prawdziwe zdjęcie:**

```html
<div class="testimonial-card">
    <div class="testimonial-avatar">
        <img src="klientka1.jpg" alt="Klientka" style="width: 80px; height: 80px; border-radius: 50%;">
    </div>
    <h4>Anna Kowalska</h4>
    <div class="stars">★★★★★</div>
    <p>Świetny kurs! Polecam!</p>
</div>
```

---

## Jak zmienić FAQ (pytania)?

W pliku HTML (linia ~586) znajdź i edytuj:

```html
<div class="faq-item">
    <div class="faq-question">
        <h3>Twoje pytanie tutaj?</h3>
        <span class="faq-toggle">+</span>
    </div>
    <div class="faq-answer">
        <p>Twoja odpowiedź tutaj.</p>
    </div>
</div>
```

**Dodaj tyle pytań, ile potrzebujesz - po prostu skopiuj cały blok `<div class="faq-item">`**

---

## Jak podpiąć system płatności?

### 1. Przelewy24 / PayU / tpay

Zmień link przycisku CTA:

```html
<!-- PRZED -->
<a href="#oferta" class="cta-button primary">KUPUJĘ</a>

<!-- PO -->
<a href="https://twoj-link-platnosci.com" class="cta-button primary">KUPUJĘ</a>
```

### 2. Hotmart / EasyCart

Zamień przycisk na formularz:

```html
<form action="https://pay.hotmart.com/..." method="POST">
    <button type="submit" class="cta-button primary">KUPUJĘ TERAZ</button>
</form>
```

---

## Jak dodać Google Analytics?

Przed zamykającym tagiem `</head>` w pliku HTML dodaj:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Zamień `GA_MEASUREMENT_ID` na swój identyfikator z Google Analytics.

---

## Jak dodać Facebook Pixel?

Przed zamykającym tagiem `</head>` w pliku HTML dodaj:

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'TWOJ_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

Zamień `TWOJ_PIXEL_ID` na swój identyfikator piksela.

---

## Jak zmienić czcionkę?

W pliku `style.css` (linia ~18) znajdź:

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

**Zmień na Google Font:**

1. Wejdź na fonts.google.com
2. Wybierz czcionkę (np. "Poppins")
3. Kliknij "Select this style"
4. Skopiuj link do HTML `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

5. W CSS zmień:

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

---

## ⚠️ Częste błędy i jak ich unikać

### Błąd 1: Zdjęcia się nie ładują
✅ **Rozwiązanie:** Upewnij się, że zdjęcia są w tym samym folderze co HTML

### Błąd 2: Kolory się nie zmieniają
✅ **Rozwiązanie:** Odśwież stronę z Ctrl+F5 (Windows) lub Cmd+Shift+R (Mac)

### Błąd 3: Timer nie działa
✅ **Rozwiązanie:** Sprawdź, czy plik `script.js` jest poprawnie podłączony

### Błąd 4: Strona wygląda źle na telefonie
✅ **Rozwiązanie:** To niemożliwe - strona jest responsywna! Ale sprawdź, czy nie zmieniłeś szerokości w CSS

---

## 🎨 Gotowe palety kolorów do wyboru

### Opcja 1: Energia (Pomarańczowy)
```css
--primary-color: #F56565;
--primary-dark: #E53E3E;
```

### Opcja 2: Spokój (Niebieski)
```css
--primary-color: #4299E1;
--primary-dark: #3182CE;
```

### Opcja 3: Natura (Zielony)
```css
--primary-color: #48BB78;
--primary-dark: #38A169;
```

### Opcja 4: Luksus (Fioletowy)
```css
--primary-color: #9F7AEA;
--primary-dark: #805AD5;
```

### Opcja 5: Elegancja (Granat)
```css
--primary-color: #4A5568;
--primary-dark: #2D3748;
```

---

## 📧 Potrzebujesz pomocy?

Jeśli coś nie działa lub potrzebujesz dodatkowych zmian:
1. Sprawdź konsolę przeglądarki (F12)
2. Upewnij się, że wszystkie pliki są w tym samym folderze
3. Sprawdź, czy nie ma literówek w nazwach plików

**Powodzenia z nową stroną! 🚀**