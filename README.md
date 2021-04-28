# snapRIL

Une application hybride de messagerie instantanée créée avec Ionic Framework et Angular (typescript)

## Etape 1 : galerie de photos

https://ionicframework.com/docs/angular/your-first-app

## Etape 2 : connexion, inscription, liste de messages

2 activités ont été créées pour la connexion et l'inscription. L'authentification se fait avec Firebase. Les messages sont sauvegardés dans Realtime Database et affichés en temps réel.

## Démarrage

```batch
ionic serve
```

## Génération des app natives

La première fois :

```batch
ionic build
ionic cap add android
ionic cap open android
```

Si changement :

```batch
ionic build
ionic cap copy
```

## Live reload

```batch
ionic cap run android -l --external
```
