# Proxeasy
Приложение для проксирования запросов:

Интерфейс конфига в формате JSON:
```
  port: number;
  api?: string;
  destination: string;
  proxiedHeaders: string[];
  origins: string[]; // протокол важно указывать, например ["http://127.0.0.1:4200"]
```

### Запуск прокси в дев режиме:
1. Положить конфиг рядом с файлом index.ts и назвать `config.json`
2. `npm i`
3. `npm run dev`

### Запуск прокси:
1. `npm i`
2. `npm build`
3. Положить конфиг в директорию к билду (`./dist`)
4. `node <путь относительно текущей директории>/index.js --config=<имя конфига>`
