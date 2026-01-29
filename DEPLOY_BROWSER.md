# 🌐 Deploy via Browser - Il Metodo Più Semplice!

## Opzione 1: Vercel via GitHub (5 minuti)

### Passo 1: Push su GitHub
```bash
# Inizializza Git (se non già fatto)
git init
git add .
git commit -m "Sito Digisolar pronto"

# Crea repository su GitHub.com
# 1. Vai su github.com
# 2. Click "+" in alto a destra → "New repository"
# 3. Nome: digisolar
# 4. Click "Create repository"

# Poi collega e pusha:
git remote add origin https://github.com/TUO_USERNAME/digisolar.git
git branch -M main
git push -u origin main
```

### Passo 2: Deploy su Vercel
1. Vai su [vercel.com](https://vercel.com/signup)
2. Click "Sign Up" → Usa GitHub per login
3. Click "Add New Project"
4. Seleziona repository "digisolar"
5. Configura:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
6. Click "Deploy"
7. Aspetta 2 minuti

**✅ LINK PRONTO:** `https://digisolar.vercel.app`

---

## Opzione 2: Netlify Drop (3 minuti - VELOCISSIMO)

### Passo 1: Build locale
```bash
npm run build
```

### Passo 2: Deploy
1. Vai su [app.netlify.com/drop](https://app.netlify.com/drop)
2. Trascina la cartella `dist/public` nella zona
3. Aspetta upload (30 secondi)

**✅ LINK PRONTO:** `https://random-name.netlify.app`

### Passo 3 (Opzionale): Personalizza nome
1. Click "Site settings"
2. "Change site name"
3. Scrivi "digisolar"
4. **LINK:** `https://digisolar.netlify.app`

---

## Opzione 3: GitHub Pages (Gratis per sempre)

### Passo 1: Configura GitHub Pages
```bash
# Installa tool
npm install -g gh-pages

# Build
npm run build

# Deploy
gh-pages -d dist/public
```

### Passo 2: Abilita GitHub Pages
1. Vai su repository GitHub
2. Settings → Pages
3. Source: gh-pages branch
4. Save

**✅ LINK:** `https://TUO_USERNAME.github.io/digisolar`

---

## 🎯 Quale Scegliere?

| Metodo | Tempo | Link | Auto-deploy |
|--------|-------|------|-------------|
| **Vercel + GitHub** | 5 min | `digisolar.vercel.app` | ✅ |
| **Netlify Drop** | 3 min | `digisolar.netlify.app` | ❌ |
| **GitHub Pages** | 5 min | `username.github.io/digisolar` | ✅ |

**Consiglio:** Se vuoi velocità → **Netlify Drop**  
Se vuoi professionalità → **Vercel + GitHub**

---

## 🔧 Configurare Variabili Ambiente

### Su Vercel:
1. Dashboard → Project → Settings
2. Environment Variables
3. Aggiungi:
   ```
   VITE_AIRTABLE_API_KEY = [tua key]
   VITE_AIRTABLE_BASE_ID = [tuo id]
   ```
4. Redeploy

### Su Netlify:
1. Site settings → Environment variables
2. Aggiungi stesse variabili
3. Trigger deploy

---

## ✅ Dopo il Deploy

1. Testa tutte le pagine
2. Verifica form contatti (se Airtable configurato)
3. Testa su mobile
4. Condividi il link! 🎉

---

**💡 Tip:** Con GitHub + Vercel/Netlify, ogni `git push` farà deploy automatico!
