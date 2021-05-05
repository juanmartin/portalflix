# Portalflix

Portal basado en la estética de Netflix que presenta tutoriales de uso del nuevo Portal de Sancor Seguros.

Atento a poner el siguiente `.htaccess` en caso de hostear en apache.

```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /subdirectory
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule . /index.html [L]
</IfModule>
```