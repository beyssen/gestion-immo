
# 🏠 Gestion Immobilière — Supabase + React + TypeScript

Ce projet est une application web de gestion immobilière développée en TypeScript/React avec Supabase comme backend. Elle permet de gérer :
- Les propriétaires
- Les bâtiments et les lots
- Les baux, les locataires
- Les loyers, les provisions et les charges
- La facturation automatisée
- Les connexions sécurisées avec Supabase (RLS activé)

## 🚀 Fonctionnalités principales

- 🔐 Authentification utilisateur (Admin, Gestionnaire, Utilisateur)
- 📦 Gestion des bâtiments, lots, baux, locataires
- 💸 Création automatique de factures
- 📊 Visualisation des consommations (eau, électricité, taxe foncière)
- 🧠 Filtrage dynamique par locataire
- 📤 Intégration Supabase en temps réel

## 🛠️ Technologies utilisées

- ⚛️ React + TypeScript
- 📦 Supabase (PostgreSQL, API REST, Auth, RLS)
- 🧪 Vite pour le bundling
- 💻 Déploiement via [Render](https://render.com)

## 📁 Arborescence simplifiée

```
/gestion-immo
├── .env                  # Clés Supabase
├── .gitignore
├── App.tsx              # Entrée principale
└── src
    ├── lib
    │   └── supabase.ts  # Configuration client Supabase
    └── pages
        └── TestSupabase.tsx  # Page de test connexion Supabase
```

## ⚙️ Variables d’environnement (Render)

Dans Render > Environment > Environment Variables, ajoute :

```
VITE_SUPABASE_URL=ton_url_supabase
VITE_SUPABASE_ANON_KEY=ta_cle_publique
```

Puis clique sur **"Save, Rebuild & Deploy"**

## ✅ Tester la connexion Supabase

1. Va sur la page `/testsupabase` (à créer dans `src/pages/TestSupabase.tsx`)
2. Tu devrais voir un message comme :  
   ✅ **Connexion Supabase réussie !**  
   ou  
   ❌ **Erreur de connexion Supabase**

---

## 🧪 Lancer en local

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

---

## 📤 Déploiement (Render)

1. Connecte ton GitHub à Render
2. Crée un nouveau service → Web Service → connecte le repo
3. Renseigne les variables d’environnement
4. Déploie manuellement

---

## 🧠 Idées futures

- Export PDF des factures
- Tableau de bord locataire
- Module d’alerte paiement
- API pour interconnexion avec d'autres systèmes

---

## 👤 Auteur

Jean-Paul Beyssen — [beyssen@gmail.com](mailto:beyssen@gmail.com)
