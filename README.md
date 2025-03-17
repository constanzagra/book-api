
# book-api 📓

Ésta es una API creada por estudiantes de ADA itw para el módulo backend de la carrera de Node.js, generamos un sistema de manejo símil biblioteca que permite gestionar libros, autores y editoriales, cada quien con un ID generado por medio de UUID, usando el método MVC y completado con un servidor TCP que nos permite interactuar con la data utilizando los comandos predeterminados que te explico un poco más abajo.

# ¡Empecemos!

![empecemos!](https://github.com/user-attachments/assets/b004d0f6-6158-4c0a-a823-7553f9251e6f)
## Comandos 🚀

- GET AUTHORS : Busca y muestra por pantalla la data sobre **todos** los autores.

- GET PUBLISHERS: Busca y muestra por pantalla la data sobre **todas** las editoriales.

- GET BOOKS: Busca y muestra por pantalla la data sobre **todos** los libros.

- ADD BOOK: Permite añadir **un** libro a la lista, se solicitará que se ingrese el título y autor del mismo una vez ejecutado el comando.

- ADD AUTHOR: Permite añadir **un** autor ingresando los datos dentro del mismo comando.  el formato a utilizar es "ADD AUTHOR {nombre} {nacionalidad}" 
_ejemplo:_ ADD AUTHOR Sebastian Fitzek Aleman

- ADD PUBLISHER: Permite añadir **una** editorial ingresando los datos dentro del mismo comando. El formato a utilizar es "ADD PUBLISHER {nombre} {país}"
_ejemplo:_ ADD PUBLISHER Santillana Argentina

- SEARCH BOOK: Permite buscar un libro por título
## Instalación ⏬
```bash
git clone https://github.com/constanzagra/book-api
cd book-api
npm init 
npm install uuid
```

**¡IMPORTANTE!**
Recordá ejecutar primero el server y luego el cliente para no tener errores en la comunicación.
## Autoras 🕵️‍♂️

- [Constanza Gra ](https://github.com/constanzagra)

- [Fiorella Roma ](https://github.com/fiorellam)

- [Giselle Rastenis ](https://github.com/GegeRastenis)

- [Victoria Medone ](https://github.com/victoriamedone)
