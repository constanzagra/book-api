
# BOOK-API📓

## Descripción

Ésta es una API creada por estudiantes de ADA itw para el módulo de backend de la carrera de Node.js.
Generamos un sistema de manejo de una biblioteca que permite gestionar libros, autores y editoriales. Cada libro, autor y editorial tienen su propio id generado por medio de UUID. Se usó el patrón de diseño MVC (Modelo - Vista - Controlador) y además se complementó utilizando una comunicación TCP entre un servidor y un cliente local, de esta manera se permite interactual con la información, utilizando los comandos predeterminados que se explican más abajo.

# ¡Empecemos!

![empecemos!](https://github.com/user-attachments/assets/b004d0f6-6158-4c0a-a823-7553f9251e6f)

## Instalación ⏬
```bash
git clone https://github.com/constanzagra/book-api
cd book-api
npm install
npm start (Este comando se ejecuta en una terminal)
node client.js (Este comando se ejecuta en otra terminal)
```

## Uso Comandos 🚀
> [!]
**GET AUTHORS** : Busca y muestra por pantalla todos los autores que se encuentran.
    - Ejemplo en terminal: ```GET AUTHORS ```

- GET PUBLISHERS: Busca y muestra por pantalla la data sobre **todas** las editoriales.

- GET BOOKS: Busca y muestra por pantalla la data sobre **todos** los libros.

- ADD BOOK: Permite añadir **un** libro a la lista, se solicitará que se ingrese el título y autor del mismo una vez ejecutado el comando.

- ADD AUTHOR: Permite añadir **un** autor ingresando los datos dentro del mismo comando.  el formato a utilizar es "ADD AUTHOR {nombre} {nacionalidad}" 
_ejemplo:_ ADD AUTHOR Sebastian Fitzek Aleman

- ADD PUBLISHER: Permite añadir **una** editorial ingresando los datos dentro del mismo comando. El formato a utilizar es "ADD PUBLISHER {nombre} {país}"
_ejemplo:_ ADD PUBLISHER Santillana Argentina

- SEARCH BOOK: Permite buscar un libro por título

**¡IMPORTANTE!**
Recordá ejecutar primero el server y luego el cliente para no tener errores en la comunicación.
## Autoras 🕵️‍♂️

- [Constanza Riveros Ayala ](https://github.com/constanzagra)

- [Fiorella Rodriguez Mateo ](https://github.com/fiorellam)

- [Giselle Rastenis ](https://github.com/GegeRastenis)

- [Victoria Medone ](https://github.com/victoriamedone)
