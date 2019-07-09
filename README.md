# Basic Typescript isomorphic app

A very basic server- and client-sides written in Typescript.

A simple way to use this is:

```
> conda create -n ts_isomorphic_basic
> conda activate ts_isomorphic_basic
> conda install nodejs
> npm run build
> npm run start
```

And point your browser to 127.0.0.1:8080.  In Windows, you may get a pop-up asking whether you want to open port 8080, and whether it should do this for private or public networks.

For a higher level of isolation you can try `docker`:
```
(host)> docker run -it --rm -p 8080:8080 -v $REPODIR:$MAPPEDDIR node /bin/bash
(container) > pushd $MAPPEDDIR
(container) > npm install
(container) > npm run start
```

## Configuration

Right now the only available configurable paramater is the port the server listens on.  To change, please modify `src/server/config.ts`.

