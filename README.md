Bitó Zalán  

Dolgozat javítás 

MVC elvek az AI szerint nagyrészt követve vannak, viszont a szétválasztások nem teljesen tiszták. 

 

HIBÁK 

Controller 

A controllerben a Kartyak példányositásakor nem jól adom át a paramétereket. 

A controller közvetlenül hozzáfér a DOM-hoz például: $(“.darabszam”), ami a View feladata lenne.  

A controller egy ponton közvetlenül meghív egy View osztályt (Kartyak) a Model adataival ami nem helyes, mivel a View nem hozhat létre új Modelt. 

 

Model 

A feladat megoldásából kimaradt a lista véletlenszerű sorrendbe rendezése, ezt is a Modellben lehetne megvalósítani.  

 

View 

Részben megfelel az MVC elveinek azonban vannak hibák. 

Kartyak.js 

Ebben a fájlban nem szabad lekérni a getDb függvényt, csak megjeleníteni. 

Egy új Model példány jön létre ebben az osztályban, ami nem helyénvaló, hiszen a Model-t már a Controller példányosította.  

A view nem hozhat létre saját adatmodellt, csak az adatokat kell megjeleniítenie. 

 

Javasolt változtatások: 

Ahelyett, hogy a Controller közvetlenül a DOM-hoz nyúlna, a View megfelelő metódusát kellene meghívni a darabszám frissítésére. 

Viewben a Kartyak.js-en belül kell egy metódus ami a darabszám kijelzését frissíti. 

Szintén Kartyak.jsben a Modelt nem kell újrapéldányosítani, mert az adatokat a Controllerből kapja. 
