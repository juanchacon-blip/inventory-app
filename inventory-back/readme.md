


## Relación entre foldes y capas

```
domain/entities             -->  Entities
domain/repositories         -->  Entities (contrato/interfaz)
application/usecases        -->  Use Cases
infrastructure/config       -->  Frameworks & Drivers (composition root)
infrastructure/controllers  -->  Interface Adapters
infrastructure/repositories -->  Interface Adapters (gateway)
infrastructure/routes       -->  Frameworks & Drivers
```

## Instalación

# Entrar a la carpeta 
cd inventory

# Inicializar
npm init -y

# Agregar type module al package.json para usar import/export
# Abre package.json y agrega: "type": "module"

# Instalar Express
npm install express

# Instalar mongoose
npm install mongoose

# Ejecutar
node src/index.js