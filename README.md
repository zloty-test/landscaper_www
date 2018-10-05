# landscaper_www

### git

- Robimy fork tego repozytorium
- Klonujemy **swoje** repo 
- Synchronizujemy swoje repo z główym repozytorium

	`git remote add dowolnaNazwa link`

	np. 

	`git remote add admin https://github.com/zloty-test/landscaper_www.git`
	
	Sprawdzamy czy wszystko okej
	
	`git remote -v`
	
	Żeby pobrać ewentualne zmiany z główne repo
	
	`git pull admin master`
	
	Zamiast admin inna nazwa jaką ustaliłeś 
	
- Praca z gitem
	- Pracujesz na swoim repo i na swoim repo robisz commity 
	- Jeżeli zakończyłeś zadanie i chcesz dodać zmiany do głównego repo 
	to robisz pull request
	

------------

### SASS
Do kompilacji sass proponuje , żeby każdy robił to tak samo czyli tak jak było w kursie przez vsc to moje ustawienia
```json
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/css"
        }
    ],
    "liveSassCompile.settings.autoprefix": [
        "> 1%",
        "last 2 versions"
    ]
```

W folderze sass została utworzona struktura 
- style.scss główny plik do importowania innych plików scss 
- variables.scss plik do trzymania zmiennych jeżeli będą używane
- normalize.scss tworzy wspólne style dla przeglądarek
- mixins.scss do tworzenia mixinów, stworzyłem ułatwiające korzystanie z zapytan medialnych
- components.scss jeżeli na stronie są jakieś wspólne potwtarzające elementy np.zielony button to tutaj je umieszczamy
-  bootstrap-grid.scss grid z bootstrapa którego będziemy używać [dokumentacja](https://getbootstrap.com/docs/4.0/layout/grid/ "dokumentacja")
- base.scss podstawowe style dla strony
- Folder dla każdego do umieszczania własnych plików scss

------------

### RWD / CSS
- Stosujemy podejście mobile first 
- Do układania elementów stosujemy grida z bootstrapa
- Staramy się stosować BEM do nazywania klas [dokumentacja](https://en.bem.info/methodology/quick-start/ "dokumentacja")

------------

link do strony 

https://zloty-test.github.io/landscaper_www/ 
 
link do projektu

https://www.free-css.com/free-css-templates/page232/landscaper


Jak macie jakieś pomysły albo uwagi to piszcie ;)
