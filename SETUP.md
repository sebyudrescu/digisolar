# 🚀 Digisolar - Setup e Configurazione

Guida completa per configurare e deployare il sito Digisolar.

---

## 📋 Indice

1. [Prerequisiti](#prerequisiti)
2. [Installazione](#installazione)
3. [Configurazione Airtable](#configurazione-airtable)
4. [Configurazione Google Maps](#configurazione-google-maps)
5. [Configurazione Analytics](#configurazione-analytics)
6. [Variabili d'Ambiente](#variabili-dambiente)
7. [Sviluppo Locale](#sviluppo-locale)
8. [Build e Deploy](#build-e-deploy)
9. [Checklist Pre-Produzione](#checklist-pre-produzione)

---

## ✅ Prerequisiti

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (installabile con: `npm install -g pnpm`)
- Account **Airtable** (gratuito)
- Account **Google Cloud Platform** (per Maps API)
- Account **Umami** o **Google Analytics** (opzionale)

---

## 📦 Installazione

```bash
# Clone del repository
git clone <repository-url>
cd digisolar-premium

# Installazione dipendenze
pnpm install

# Copia file ambiente
cp .env.example .env
```

---

## 🗄️ Configurazione Airtable

### 1. Crea un Base Airtable

1. Vai su [airtable.com](https://airtable.com)
2. Crea un nuovo **Base** chiamato "Digisolar Leads"
3. Crea una **Table** chiamata "Leads" con questi campi:

| Nome Campo | Tipo Campo | Opzioni |
|-----------|-----------|---------|
| Nome | Single line text | - |
| Azienda | Single line text | - |
| Email | Email | - |
| Telefono | Phone number | - |
| Messaggio | Long text | - |
| Tipo | Single select | Opzioni: Generale, Preventivo, CER, Revamping |
| Fonte | Single line text | - |
| Data | Date | Include time |
| Status | Single select | Opzioni: Nuovo, Contattato, Preventivo Inviato, Chiuso |

### 2. Ottieni API Key e Base ID

**API Key:**
1. Vai su [airtable.com/account](https://airtable.com/account)
2. Scorri fino a "API"
3. Clicca "Generate API key"
4. Copia la tua API key

**Base ID:**
1. Vai su [airtable.com/api](https://airtable.com/api)
2. Seleziona il tuo Base "Digisolar Leads"
3. Nella URL vedrai: `https://airtable.com/[BASE_ID]/api/docs`
4. Il BASE_ID inizia con `app...`

### 3. Configurazione nel .env

```bash
VITE_AIRTABLE_API_KEY=keyXXXXXXXXXXXXXX
VITE_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
VITE_AIRTABLE_TABLE_NAME=Leads
```

### 4. Test Integrazione

```bash
# Avvia il server di sviluppo
pnpm dev

# Vai su http://localhost:3000/contatti
# Compila e invia il form
# Controlla che il lead appaia in Airtable
```

---

## 🗺️ Configurazione Google Maps

### 1. Crea Progetto Google Cloud

1. Vai su [console.cloud.google.com](https://console.cloud.google.com)
2. Crea nuovo progetto "Digisolar"
3. Vai su "API & Services" > "Library"
4. Abilita queste API:
   - **Maps JavaScript API**
   - **Geocoding API**
   - **Maps Embed API**

### 2. Crea API Key

1. Vai su "API & Services" > "Credentials"
2. Clicca "Create Credentials" > "API Key"
3. Copia la tua API key
4. Clicca "Edit" sull'API key appena creata

### 3. Restrizioni API Key (Importante!)

**Restrizioni applicazione:**
- Seleziona "HTTP referrers (web sites)"
- Aggiungi: `https://digisolar.it/*` e `http://localhost:3000/*`

**Restrizioni API:**
- Seleziona "Restrict key"
- Abilita solo le API necessarie (vedi sopra)

### 4. Configurazione nel .env

```bash
VITE_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### 5. Aggiorna Coordinate Mappa

Nel file `client/src/pages/Contatti.tsx`, aggiorna l'iframe con le coordinate corrette:

```tsx
// Trova l'indirizzo su Google Maps
// Copia il codice embed e sostituisci l'URL
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
  // ... resto del codice
/>
```

---

## 📊 Configurazione Analytics

### Opzione A: Umami (Consigliato - Privacy-Friendly)

1. Self-hosted o usa [Umami Cloud](https://umami.is)
2. Crea un nuovo sito "Digisolar"
3. Copia Website ID

```bash
VITE_ANALYTICS_ENDPOINT=https://your-umami-instance.com
VITE_ANALYTICS_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### Opzione B: Google Analytics

1. Vai su [analytics.google.com](https://analytics.google.com)
2. Crea nuova proprietà "Digisolar"
3. Copia Measurement ID (inizia con G-)

```bash
# Aggiungi in client/index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔐 Variabili d'Ambiente

### File .env Completo

```bash
# ========================================
# AIRTABLE
# ========================================
VITE_AIRTABLE_API_KEY=keyXXXXXXXXXXXXXX
VITE_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
VITE_AIRTABLE_TABLE_NAME=Leads

# ========================================
# GOOGLE MAPS
# ========================================
VITE_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# ========================================
# ANALYTICS
# ========================================
VITE_ANALYTICS_ENDPOINT=https://analytics.digisolar.it
VITE_ANALYTICS_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# ========================================
# SITE INFO
# ========================================
VITE_SITE_URL=https://digisolar.it
VITE_SITE_NAME=Digisolar
VITE_CONTACT_EMAIL=info@digisolar.it
VITE_CONTACT_PHONE=+393472219505
```

### Variabili di Produzione

⚠️ **IMPORTANTE**: Nel deploy in produzione, configura le variabili d'ambiente nel tuo hosting provider (Vercel, Netlify, etc.)

---

## 💻 Sviluppo Locale

```bash
# Sviluppo con hot reload
pnpm dev

# Apri http://localhost:3000

# Type checking
pnpm check

# Format code
pnpm format
```

---

## 🏗️ Build e Deploy

### Build di Produzione

```bash
# Build frontend + backend
pnpm build

# Preview build locale
pnpm preview

# Test build
node dist/index.js
```

### Deploy su Vercel (Consigliato)

1. Installa Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy:

```bash
vercel

# Configura variabili d'ambiente nel dashboard Vercel
# Dashboard > Settings > Environment Variables
```

### Deploy su Netlify

1. Crea `netlify.toml`:

```toml
[build]
  command = "pnpm build"
  publish = "dist/public"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Deploy via Netlify CLI o Git integration

### Deploy su VPS (Linux)

```bash
# Server setup
ssh user@your-server.com

# Install Node.js & pnpm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g pnpm pm2

# Clone e setup
git clone <repo-url>
cd digisolar-premium
pnpm install
pnpm build

# Configura .env in produzione
nano .env

# Start con PM2
pm2 start dist/index.js --name digisolar
pm2 save
pm2 startup

# Setup Nginx come reverse proxy
sudo nano /etc/nginx/sites-available/digisolar

# Nginx config:
server {
    listen 80;
    server_name digisolar.it www.digisolar.it;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Abilita site e restart Nginx
sudo ln -s /etc/nginx/sites-available/digisolar /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Setup SSL con Certbot
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d digisolar.it -d www.digisolar.it
```

---

## ✅ Checklist Pre-Produzione

### Contenuti
- [ ] Aggiorna tutti i link social (Facebook, Instagram, LinkedIn, YouTube)
- [ ] Verifica email e telefono di contatto
- [ ] Verifica indirizzo sede
- [ ] Carica immagini ottimizzate (WebP)

### SEO
- [ ] Verifica meta tags su tutte le pagine
- [ ] Verifica `sitemap.xml` è accessibile
- [ ] Verifica `robots.txt` è accessibile
- [ ] Submit sitemap a Google Search Console

### Funzionalità
- [ ] Test form contatti + verifica arrivo lead in Airtable
- [ ] Test cookie banner (accetta/rifiuta)
- [ ] Test navigazione mobile
- [ ] Test tutti i link interni/esterni
- [ ] Test calcolatore preventivo

### Performance
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Verifica caricamento immagini lazy
- [ ] Verifica HTTPS attivo
- [ ] Test velocità su mobile

### Analytics & Legal
- [ ] Verifica analytics attivo e traccia visite
- [ ] Verifica Privacy Policy aggiornata
- [ ] Verifica Cookie Policy aggiornata
- [ ] Cookie banner salva preferenze correttamente

### Browser Testing
- [ ] Chrome/Edge (desktop + mobile)
- [ ] Firefox (desktop + mobile)
- [ ] Safari (desktop + mobile)

---

## 🐛 Troubleshooting

### Form non invia lead ad Airtable

1. Verifica variabili `.env` configurate correttamente
2. Verifica API key Airtable valida
3. Verifica nomi campi Airtable corrispondono al codice
4. Controlla console browser per errori
5. Controlla network tab per vedere richiesta API

### Google Maps non si carica

1. Verifica API key configurata
2. Verifica API abilitate (Maps JavaScript API)
3. Verifica billing attivo su Google Cloud
4. Controlla console browser per errori API key

### Build fallisce

```bash
# Pulisci cache e reinstalla
rm -rf node_modules dist .vite
pnpm install
pnpm build
```

---

## 📞 Supporto

Per problemi o domande:
- **Email**: info@digisolar.it
- **Telefono**: +39 347 2219505

---

## 📄 Licenza

© 2024 Digisolar. Tutti i diritti riservati.
