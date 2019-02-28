## Ejercicio de evaluación intermedia- Sprint 3 Adalab

La web consiste en un listado de pokemon, con una tarjeta para cada uno con información relevante, como el nombre, tipos y una imagen. La información de los pokemon la obtenemos de un array de datos que incluiremos en el fichero App.js.

```bash
  const pokemon = [
      {"id":1,"name":"bulbasaur","types":
  ["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.c
  om/PokeAPI/sprites/master/sprites/pokemon/1.png"},
      {"id":2,"name":"ivysaur","types":
  ["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubuserco
  ntent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},
      {"id":3,"name":"venusaur","types":
  ["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercont
  ent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},
      {"id":4,"name":"charmander","types":
  ["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI
  /sprites/master/sprites/pokemon/4.png"},
      {"id":5,"name":"charmeleon","types":
  ["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com
  /PokeAPI/sprites/master/sprites/pokemon/5.png"},
      {"id":6,"name":"charizard","types":
  ["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubuserco
  ntent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},
  {"id":7,"name":"squirtle","types":
  ["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAP
  I/sprites/master/sprites/pokemon/7.png"},
      {"id":8,"name":"wartortle","types":
  ["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/
  PokeAPI/sprites/master/sprites/pokemon/8.png"},
      {"id":9,"name":"blastoise","types":
  ["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com
  /PokeAPI/sprites/master/sprites/pokemon/9.png"},
      {"id":10,"name":"caterpie","types":
  ["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/
  sprites/master/sprites/pokemon/10.png"}
  ]
```
### Pasos para realizar el ejercicio

1. Plantear en papel la estructura de componentes para la web
2. Crear una nueva aplicación React
3. Pintar 1 tarjeta, recogiendo la información de las props
4. Pintar todas las tarjetas
5. Crear dos componentes, PokeList y Pokemon, respectivamente para el listado y para la card de cada Pokemon
6. BONUS: Maquetación.
