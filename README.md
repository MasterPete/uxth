# UX Thailand site

## Development

1. **Install package**

This project using yarn for maintain packages.

```shell
yarn
```

2. **Run development mode**

```shell
yarn develop
```

## Build & Deploy

Save and commit everything to deploy and run

```shell
make deploy
```

## Development Instruction

### Main code structure

```
├── src/
│   ├── components/     <---- components go here
│   ├── pages/          <---- page components go here
├── static/
│   ├── files           <---- files go here
│   └── images          <---- images go here
```

### Global variables

Global variables like padding sizing and colors now manage by CSS variable, it contains in [layout.css](./src/components/layout.css) (These need to be refactor to put in somewhere else)

### Naming conventions

Component filename using TitleCase

## Notes

Hosted by Github page.
