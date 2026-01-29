# 🚀 Deploy su Vercel - Guida Rapida

## Metodo 1: Via Browser (PIÙ SEMPLICE - 5 minuti)

### Passo 1: Push su GitHub
```bash
# Se non hai ancora Git inizializzato
git init
git add .
git commit -m "Sito Digisolar pronto per deploy"

# Crea repository su GitHub.com
# Poi:
git remote add origin https://github.com/TUO_USERNAME/digisolar.git
git branch -M main
git push -u origin main
```

### Passo 2: Deploy su Vercel
1. Vai su [vercel.com](https://vercel.com)
2. Click "Sign Up" → usa GitHub per login
3. Click "Add New Project"
4. Seleziona il repository "digisolar"
5. **IMPORTANTE - Configura Build Settings:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

6. **Configura Environment Variables:**
   Click "Environment Variables" e aggiungi:
   ```
   VITE_AIRTABLE_API_KEY = [tua API key]
   VITE_AIRTABLE_BASE_ID = [tuo Base ID]
   VITE_AIRTABLE_TABLE_NAME = Leads
   VITE_SITE_URL = https://digisolar.vercel.app
   ```

7. Click "Deploy" e aspetta 2 minuti

8. **FATTO!** Il tuo link sarà: `https://digisolar.vercel.app`

---

## Metodo 2: Via CLI (PIÙ VELOCE - 3 minuti)

### Passo 1: Installa Vercel CLI
```bash
npm install -g vercel
```

### Passo 2: Login
```bash
vercel login
```

### Passo 3: Deploy
```bash
# Prima volta - configurazione
vercel

# Rispondi alle domande:
# Set up and deploy? → Yes
# Which scope? → [tuo account]
# Link to existing project? → No
# What's your project's name? → digisolar
# In which directory? → ./
# Want to override settings? → Yes
#   Build Command: npm run build
#   Output Directory: dist/public
#   Development Command: npm run dev

# Il deploy parte automaticamente!
```

### Passo 4: Configura Variabili Ambiente
```bash
# Aggiungi variabili una per una
vercel env add VITE_AIRTABLE_API_KEY
# Incolla il valore quando richiesto
# Seleziona: Production, Preview, Development

vercel env add VITE_AIRTABLE_BASE_ID
vercel env add VITE_AIRTABLE_TABLE_NAME
```

### Passo 5: Re-deploy con variabili
```bash
vercel --prod
```

**LINK PRONTO:** `https://digisolar.vercel.app` o `https://digisolar-[random].vercel.app`

---

## 🌐 Dominio Custom (Opzionale)

Se hai già il dominio `digisolar.it`:

1. Vai su Vercel Dashboard → Settings → Domains
2. Aggiungi `digisolar.it` e `www.digisolar.it`
3. Vercel ti darà dei record DNS da configurare
4. Vai sul tuo provider DNS (es: GoDaddy, Cloudflare)
5. Aggiungi i record:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
6. Aspetta 10-30 minuti per propagazione DNS
7. **FATTO!** Sito sarà su `https://digisolar.it`

---

## ✅ Dopo il Deploy

### Verifica Tutto Funziona:
- [ ] Vai su `https://digisolar.vercel.app`
- [ ] Naviga tutte le pagine
- [ ] Testa form contatti
- [ ] Verifica cookie banner appare
- [ ] Testa su mobile

### Aggiorna Sitemap:
Modifica `public/sitemap.xml` e sostituisci tutti i `https://digisolar.it` con il tuo URL Vercel, poi:
```bash
vercel --prod
```

### Google Search Console:
1. Vai su [search.google.com/search-console](https://search.google.com/search-console)
2. Aggiungi proprietà con il tuo URL
3. Verifica proprietà (metodo DNS o HTML)
4. Submit sitemap: `https://digisolar.vercel.app/sitemap.xml`

---

## 🔄 Aggiornamenti Futuri

Ogni volta che modifichi il sito:

**Con Git + GitHub:**
```bash
git add .
git commit -m "Aggiornamento contenuti"
git push
```
→ Vercel fa **auto-deploy automatico!** ✨

**Con CLI:**
```bash
vercel --prod
```

---

## 💡 Tips

- **Preview Deployments**: Ogni push su branch diverso da `main` crea un preview URL
- **Analytics**: Vercel include analytics gratis (vai su dashboard)
- **Logs**: Vedi logs in real-time su dashboard Vercel
- **Rollback**: Puoi tornare a versioni precedenti con 1 click

---

## 🆘 Troubleshooting

### "Build Failed"
```bash
# Verifica build locale funziona
npm run build

# Se ci sono errori TypeScript, puoi skipparli temporaneamente
# Aggiungi in vercel.json:
{
  "build": {
    "env": {
      "CI": "false"
    }
  }
}
```

### "Environment Variables non funzionano"
- Verifica nomi variabili iniziano con `VITE_`
- Dopo aver aggiunto variabili, fai re-deploy

### "404 su route"
Crea file `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 📊 Costi

- **Hobby Plan**: **GRATIS per sempre**
  - Bandwidth: Illimitato
  - Builds: 6000 minuti/mese (più che sufficiente)
  - Serverless Functions: 100GB-Hours
  - Progetti: Illimitati

- **Pro Plan**: €20/mese (solo se serve più potenza)

Per un sito come Digisolar, **Hobby Plan è perfetto!** ✅

---

**🎉 In 10 minuti avrai il link da condividere: `https://digisolar.vercel.app`**
