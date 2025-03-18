
# BOOK-API📓

## Descripción

Ésta es una API creada por estudiantes de ADA itw para el módulo de Node.js. 
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

**GET AUTHORS** : Busca y muestra por pantalla todos los autores que se encuentran.
- Ejemplo: ```GET AUTHORS ```

**GET PUBLISHERS**: Busca y muestra por pantalla todas las editoriales.
- Ejemplo: ```GET PUBLISHERS ```

**GET BOOKS**: Busca y muestra por pantalla todos los libros.
- Ejemplo: ```GET BOOKS ```

**ADD BOOK**: Permite añadir un libro a la lista, se solicitará que se ingrese el título y el nombre del autor del libro una vez ejecutado el comando.

- 1. ```ADD BOOK ``` (Solo se escribe este comando primero)
- 2. Después se nos solicitará que se ingrese el titulo del libro ```La ladrona ```
- 3. Ingresamos el nombre del autor exactamente como viene en el catálogo de autores ```Mariana Enriquez ```

**ADD AUTHOR**: Permite añadir un autor ingresando los datos dentro del mismo comando.  
- El formato a utilizar es "ADD AUTHOR {nombre} {nacionalidad}" 
- Ejemplo: ```ADD AUTHOR Sebastian Fitzek Aleman```

**ADD PUBLISHER**: Permite añadir una editorial ingresando los datos dentro del mismo comando. 
- El formato a utilizar es "ADD PUBLISHER {nombre} {país}"
- Ejemplo: ```ADD PUBLISHER Santillana Argentina```

**SEARCH BOOK BY TITLE**: Permite buscar un libro por título
- El formato a utilizar es "SEARCH BOOK BY TITLE {TITULO}"
- Ejemplo: ``` SEARCH BOOK BY TITLE RAYUELA ```

**¡IMPORTANTE!**
Recordá ejecutar primero el server y luego el cliente para no tener errores en la comunicación.

## Autoras 🕵️‍♂️

- [Constanza Riveros Ayala ](https://github.com/constanzagra)

- [Fiorella Rodriguez Mateo ](https://github.com/fiorellam)

- [Giselle Rastenis ](https://github.com/GegeRastenis)

- [Victoria Medone ](https://github.com/victoriamedone)
