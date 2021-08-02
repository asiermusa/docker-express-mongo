# Express + MongoDB aplikazioa

Dockerizatutako aplikazioa.

- [Docker](https://docs.docker.com/engine/install/ubuntu/) eta [docker-compose](https://docs.docker.com/compose/install/) instalatuta izan behar dituzu.

## Instalazioa

Kontenedoreak abiarazi:

```bash
docker-compose up --build
```

Kontenedoreak abiarazi bigarren plano batean `-d` gehituta

```bash
docker-compose up --build -d
```

`docker-compose.yml` fitxategian aplikazioa bi kontenedoretan banatuko da. Batean aplikazioa eta bestean mongo datu basea.

## Lizentzia

[MIT](https://choosealicense.com/licenses/mit/)
