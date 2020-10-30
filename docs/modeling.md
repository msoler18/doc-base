# 3. DISEÑO DEL MODELO DE DATOS

Distinguir cuales son las entidades involucradas en el sistema y mencionarlas en un 	formato Human Readable. Esta información debe iniciar con un diagrama y presentar los datos de entrada, datos internos y datos de salida.

### Mermaid

Enlace a la documentación [https://mermaid-js.github.io/mermaid](https://mermaid-js.github.io/mermaid)

**Flujo:**

```mermaid
graph LR
    A --- B
    B-->C[fa:fa-ban forbidden]
    B-->D(fa:fa-spinner);
```

**Secuencia:**

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```
