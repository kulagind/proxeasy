# Proxeasy
Приложение для проксирования запросов:

### Запуск прокси:
Интерфейс конфига в формате JSON:
```
  port: number;
  api?: string;
  router: {
    [originHost: string]: string
  };
  proxiedHeaders: string[];
```
