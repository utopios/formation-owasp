### Lab1

### Prérequis :
1. **Installer DVWA** : Assure-toi d'avoir déjà installé DVWA. Si ce n'est pas le cas, tu peux le faire en suivant ces étapes :
   - Clone le projet depuis GitHub :
     ```bash
     git clone https://github.com/digininja/DVWA.git
     ```


2. **Installer OWASP Dependency-Check** :
   

### Étapes du Lab :

1. **Lancer Dependency-Check sur le projet DVWA :**
   - Navigue dans le répertoire où se trouve ton projet DVWA :
     ```bash
     cd /chemin/vers/DVWA
     ```
   - Exécute OWASP Dependency-Check sur les dépendances du projet :
     ```bash
     ~/dependency-check/bin/dependency-check.sh --project DVWA --scan /chemin/vers/DVWA --format HTML --out report
     ```
   - Cela va générer un rapport HTML avec les vulnérabilités potentielles trouvées dans les dépendances du projet DVWA.

2. **Analyser le rapport :**
   - Une fois l'analyse terminée, tu trouveras le rapport dans le dossier spécifié (ici, nommé `report`).
   - Ouvre le fichier `dependency-check-report.html` dans un navigateur pour voir les vulnérabilités trouvées.
