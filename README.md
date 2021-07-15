# proba-feladat
Céges felvételi feladat

## Backend:
Hozz létre egy JSON API-t. Például NodeJS-ben, ExpressJS keretrendszer használatával, de
használhatsz bármi mást is. Implementáld az alábbi két végpontot:

### Login végpont:
Ha helyes a felh.név/jelszó páros, visszaad egy tokent. Ha nem, akkor 401 unathorized

### Adatok lekérdezése végpont:
Védett végpont, csak jogosultak férhetnek hozzá. Jogosultságot a fenti token meglétéhez kötjük.
Ha nincs token, vagy invalid: 400 unathorized
Ha oké, akkor az adatot küldjük vissza.

## Frontend:
Hozz létre egy két oldalból álló frontend alkalmazást Használhatsz bármilyen framework-öt vagy library-t. A munka
szempontjából előnyös lenne ha Vue.js + Bulma CSS-t használnál.

### Login oldal:
Egy formot tartalmaz az oldal közepén két mezővel (user, password). Form elküldésekor meghívja a
fent elkészített API /login végpontját. Sikeres belépés után átirányít az adatok oldalra. Sikertelen
belépés esetben kiír egy hibaüzenetet.

### Adatok oldal:
Meghívja a fent elkészített API /data végpontját (szükséged lesz a tokenre). Az adatokat megjeleníti
egy táblázatban.


# Megoldás
A backend a kért node, express segítségével készült el. Az autentikációt jws segítségével oldottam meg.
A frontend szintén a kért módon készült el.
