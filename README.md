# FM - Team Manager

Projet multi-packages utilisant TypeScript Project References pour partager du code entre plusieurs projets.

## Structure

- **domain/** : Entités et types partagés (Team, Sport)
- **backend/** : API Fastify avec clean architecture et Prisma ORM
- **frontend/** : Application React avec Vite, TanStack Router et TanStack Query

## Installation

```bash
# Installer toutes les dépendances
npm run install:all
```

## Configuration

### Backend - Base de données PostgreSQL

Créer un fichier `.env` dans le dossier `backend/` :

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/fm
```

## Développement

### Backend

```bash
cd backend
npm install
npm run db:generate  # Générer le client Prisma
npm run db:push      # Synchroniser le schéma avec la DB
# OU pour utiliser les migrations
npm run db:migrate   # Créer et appliquer une migration
npm run dev          # Démarrer le serveur sur http://localhost:3000
```

### Frontend

```bash
cd frontend
npm install
npm run dev      # Démarrer l'app sur http://localhost:5173
```

## Architecture

### Domain
- Types TypeScript purs, sans dépendances
- Entité `Team` avec un `name` et un `sport`
- Sport défini comme object `as const` (FOOT, BASKET, TENNIS)

### Backend (Clean Architecture)
```
src/
├── application/usecases/    # Use cases métiers
├── domain/services/          # Services domaine
├── infrastructure/
│   ├── database/             # Drizzle ORM
│   └── repositories/         # Repositories
└── presentation/routes/      # Routes Fastify
```

### Frontend
```
src/
├── api/                      # API client
├── routes/                   # Routes TanStack Router
│   ├── __root.tsx
│   ├── index.tsx            # Liste des teams
│   └── create.tsx           # Création de team
└── main.tsx
```

## API Endpoints

- `GET /teams` - Récupérer toutes les teams
- `POST /teams` - Créer une team
  ```json
  {
    "name": "PSG",
    "sport": "foot"
  }
  ```

