# Étape 1 : build de l'app React
FROM node:18-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : serveur Nginx pour servir le build statique
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

# Remplacer la config par défaut si besoin (optionnel)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
