
### 1. Quel est l'objectif principal de l'OWASP Top 10 ?
- a) Proposer une liste des meilleures pratiques en développement web
- b) Identifier et classer les principales vulnérabilités de sécurité web
- c) Fournir un guide de gestion des systèmes d'information
- d) Élaborer des politiques de conformité RGPD

### 2. Quelle vulnérabilité est classée comme critique dans l'OWASP Top 10 et permet l'exécution de commandes malveillantes sur le serveur ?
- a) Cross-Site Scripting (XSS)
- b) Injection
- c) Attaque par brute force
- d) Manque de chiffrement

### 3. Quel mécanisme est recommandé pour protéger contre les attaques par Cross-Site Scripting (XSS) ?
- a) Utilisation de jetons CSRF
- b) Encodage des données en sortie
- c) Cryptage des données au repos
- d) Validation des formulaires d'authentification

### 4. Qu'est-ce qu'une mauvaise gestion d'authentification et de session peut entraîner dans une application web ?
- a) Vol de session utilisateur
- b) Requêtes SQL inefficaces
- c) Temps de chargement plus long
- d) Meilleure performance de l'application

### 5. Quel est l'un des principaux risques lorsqu'une application web ne chiffre pas les données sensibles, selon OWASP ?
- a) Réduction des performances du serveur
- b) Attaques par interception (Man-in-the-Middle)
- c) Problèmes de compatibilité avec les navigateurs
- d) Augmentation des temps de latence réseau

### 6. Quel contrôle est essentiel pour empêcher les accès non autorisés à des objets internes, comme des fichiers ou des identifiants de session ?
- a) Utilisation de mots de passe forts
- b) Vérification des contrôles d'accès
- c) Validation côté client
- d) Séparation des privilèges

### 7. Quel est l'un des principes fondamentaux pour prévenir les attaques par injection dans une application ?
- a) Utilisation de requêtes paramétrées
- b) Chiffrement des cookies
- c) Utilisation des jetons JWT
- d) Désactivation de JavaScript

### 8. Quelle est la vulnérabilité liée à la redirection et aux renvois non validés dans les applications web ?
- a) Les utilisateurs peuvent être redirigés vers des sites malveillants
- b) Les utilisateurs peuvent accéder à des fichiers protégés
- c) Les données peuvent être interceptées sur le réseau
- d) Les sessions utilisateur peuvent être volées

### 9. Quelle est la fonction principale d'un Web Application Firewall (WAF) dans la protection d'une application web ?
- a) Bloquer le trafic non chiffré
- b) Filtrer et surveiller les requêtes HTTP pour détecter les attaques
- c) Créer des sessions utilisateur sécurisées
- d) Activer l'authentification multifactorielle

### 10. Pourquoi l'utilisation de Content Security Policy (CSP) est-elle essentielle dans une application web ?
- a) Pour empêcher les attaques de type Cross-Site Request Forgery (CSRF)
- b) Pour restreindre les sources de contenu exécutées dans le navigateur
- c) Pour améliorer la performance des scripts côté client
- d) Pour éviter les injections SQL

### 11. Quel risque est particulièrement élevé si une application n'implémente pas correctement les contrôles d'accès au niveau fonctionnel ?
- a) Les utilisateurs peuvent accéder à des fonctionnalités réservées aux administrateurs
- b) Les mots de passe peuvent être volés par des attaquants
- c) Le site peut subir une attaque par déni de service (DDoS)
- d) Les fichiers de configuration peuvent être supprimés

### 12. Quelles sont les meilleures pratiques recommandées pour gérer les sessions utilisateur de manière sécurisée ?
- a) Utiliser des jetons avec une courte durée de vie
- b) Stocker les mots de passe en texte clair
- c) Ne pas utiliser de chiffrement pour les cookies de session
- d) Laisser les sessions ouvertes indéfiniment

### 13. Pourquoi est-il essentiel de maintenir à jour les bibliothèques et les dépendances utilisées dans une application web ?
- a) Pour améliorer les performances des requêtes HTTP
- b) Pour corriger les vulnérabilités connues exploitées par les attaquants
- c) Pour simplifier la gestion des erreurs applicatives
- d) Pour garantir la compatibilité avec les anciens navigateurs

### 14. Quelle est la vulnérabilité principale que l'OWASP ASVS (Application Security Verification Standard) cherche à atténuer ?
- a) Manque de validation des entrées utilisateur
- b) Dépendances de bibliothèques tierces non sécurisées
- c) Références directes non sécurisées à un objet
- d) Attaques par DDoS

### 15. Dans le contexte d'OWASP, que signifie la violation de "gestion des identifiants et sessions" ?
- a) Une mauvaise gestion des permissions de fichiers
- b) La réutilisation des jetons de session ou des mots de passe compromis
- c) Le stockage d'informations sensibles dans le cache du navigateur
- d) Un manque de validation des entrées utilisateur

### 16. Quel type d'attaque est CSRF (Cross-Site Request Forgery) ?
- a) Une attaque où l'utilisateur est forcé à exécuter une action qu'il n'a pas initiée
- b) Une attaque où le code malveillant est injecté dans une application
- c) Une attaque où l'attaquant intercepte les communications réseau
- d) Une attaque où les fichiers du serveur sont modifiés

### 17. Quelle pratique est essentielle pour empêcher les attaques SSRF (Server-Side Request Forgery) ?
- a) Restreindre les requêtes internes du serveur
- b) Permettre toutes les redirections HTTP
- c) Activer le mode strict des navigateurs
- d) Utiliser des cookies HttpOnly

### 18. Pourquoi la validation des entrées est-elle cruciale dans le développement sécurisé ?
- a) Pour améliorer la vitesse de traitement des formulaires
- b) Pour prévenir l'injection de code malveillant dans l'application
- c) Pour rendre le site compatible avec tous les navigateurs
- d) Pour faciliter la gestion des erreurs applicatives

### 19. Que signifie l'acronyme SAST dans le cadre des tests de sécurité ?
- a) Secure Application Software Testing
- b) Static Application Security Testing
- c) Secure Authentication System Testing
- d) Structured Application Security Training

### 20. Qu'est-ce qu'une redirection non sécurisée peut entraîner dans une application web ?
- a) Perte de données
- b) Accès non autorisé aux ressources du serveur
- c) Redirection des utilisateurs vers des sites malveillants
- d) Augmentation des temps de réponse du serveur

### 21. Quelle technique peut être utilisée pour atténuer les risques de manipulation des cookies de session ?
- a) Utilisation des attributs HttpOnly et Secure
- b) Cryptage des requêtes HTTP
- c) Rejet des cookies pour les utilisateurs non authentifiés
- d) Augmentation de la durée de vie des sessions

### 22. Quel est le principal objectif de l'OWASP ZAP (Zed Attack Proxy) ?
- a) Créer des rapports de sécurité pour les applications web
- b) Détecter automatiquement les vulnérabilités dans les applications web
- c) Optimiser les performances des applications web
- d) Faciliter la gestion des sessions utilisateur

### 23. Pourquoi est-il important de restreindre l'accès aux références directes à des objets dans une application web ?
- a) Pour empêcher les attaques par déni de service (DDoS)
- b) Pour éviter que des utilisateurs non autorisés n'accèdent à des ressources sensibles
- c) Pour améliorer la compatibilité avec les navigateurs modernes
- d) Pour accélérer les temps de réponse des requêtes

### 24. Quelle mesure de sécurité est essentielle pour protéger les API exposées par une application web ?
- a) Utilisation de certificats SSL
- b) Limitation du nombre de requêtes par minute
- c) Implémentation d'une authentification forte
- d) Stockage des jetons d'accès dans le cache du navigateur

### 25. Quel est l'un des principaux avantages d'un programme de "bug bounty" pour une entreprise ?
- a) Augmenter la visibilité du site web
- b) Identifier les vulnérabilités non découvertes par les équipes internes
- c) Réduire les coûts de maintenance des serveurs
- d) Améliorer la performance réseau des applications

### 26. Pourquoi est-il recommandé de désactiver les modules et fonctionnalités non nécessaires sur un serveur web ?
- a) Pour libérer de l'espace disque
- b) Pour réduire la surface d'attaque potentielle
- c) Pour améliorer la vitesse de traitement des requêtes
- d) Pour garantir la compatibilité avec les nouveaux systèmes d'exploitation

### 27. Quel est l'avantage d'utiliser les certificats TLS/SSL dans une application web ?
- a) Améliorer la performance du serveur
- b) Protéger les données en transit contre les interceptions
- c) Augmenter la capacité de stockage du serveur
- d) Réduire les coûts d'exploitation

### 28. Quel est le rôle d'un pare-feu applicatif (WAF) dans la sécurisation d'une application web ?
- a) Restreindre l'accès aux fichiers système
- b) Filtrer et bloquer les requêtes malveillantes
- c) Améliorer les performances du serveur
- d) Simplifier la gestion des sessions utilisateur

### 29. Pourquoi est-il important de configurer correctement les en-têtes HTTP dans une application web ?
- a) Pour améliorer le SEO du site
- b) Pour éviter les attaques de type "clickjacking" et "MIME sniffing"
- c) Pour réduire les coûts d'hébergement
- d) Pour rendre le site compatible avec les anciennes versions des navigateurs

### 30. Quel type de contrôle permet de limiter les privilèges des utilisateurs à ce qui est nécessaire pour accomplir leurs tâches ?
- a) Contrôle d'accès basé sur les rôles (RBAC)
- b) Gestion des identifiants et sessions
- c) Configuration de pare-feu
- d) Utilisation de jetons cryptographiques
