### Create by Cursor
### Nota: los archivos generados no se agregan en arvhivo prompt pero si se realiza commit de los mismos

## Prompt 1:

@frontend Como desarrollador senior en front end de react, crea la interfaz "position", una página en la que se debe poder visualizar y gestionar los diferentes candidatos de una posición específica. La interfaz grafica debe ser una pagiba web tipo kanban, mostrando los candidatos como tarjetas en diferentes columnas que representan las fases del proceso de contratación, y pudiendo actualizar la fase en la que se encuentra un candidato solo arrastrando su tarjeta.Aquí tienes un ejemplo de interfaz posible, debes tener en cuenta los siguientes requerimientos para el diseño esperado:

1- Se debe mostrar el título de la posición en la parte superior, para dar contexto
2- Añadir una flecha a la izquierda del título que permita volver al listado de posiciones
3- Deben mostrarse tantas columnas como fases haya en el proceso
4- La tarjeta de cada candidato/a debe situarse en la fase correspondiente, y debe mostrar su nombre completo y su puntuación media
5- Si es posible, debe mostrarse adecuadamente en móvil (las fases en vertical ocupando todo el ancho)

Algunas observaciones:

1- Asume que la página de posiciones la encuentras 
2- Asume que existe la estructura global de la página, la cual incluye los elementos comunes como menú superior y footer. Lo que estás creando es el contenido interno de la página.
@frontend 
Adicional, requiero que tengas presentes los metodos implementados en la carpeta @backend GET /positions/:id/interviewFlow, GET /positions/:id/candidates y PUT /candidates/:id/stage y generes la implemación entre back- front

Es importante que realices el desarrollo con buenas practicas de frontend, documentando las funciones, generando modulación y lazy loading si es necesario y generando archivos de traducciones i18n para español y papiamento.

Requiero que generes el codigo dentro de la carpeta frontend/src 
Tienes alguna duda?

# RTA Prompt 1:

Hola! Entiendo perfectamente el requerimiento. Vamos a crear una interfaz Kanban para gestionar candidatos de una posición específica. Implementaré la solución utilizando React con TypeScript, react-beautiful-dnd para el arrastre, y configuraremos i18n para las traducciones.

- Primero, vamos a crear la estructura de archivos necesaria:

**Se genera la interface en la ruta src/types/position.ts**

- Ahora necesitamos crear el archivo api.ts para crear los llamados a los servicios:

**Se genera el archivo de service en la ruta src/services/api.ts**  

- Ahora, generaré el archivo React index.tsx

**Se genera el archivo de rutas en la ruta src/pages/PositionKanban/index.tsx**  

- Ahora, generaré el archivo de estilos PositionKanban.module.css 

**Se genera el archivo de estilos css en la ruta src/pages/PositionKanban/PositionKanban.module.css**  

- Ahora vamos a crear los archivos de traducción es y pap:

**Se genera el archivo .json con traducciones en la ruta src/locales/es/translation.json**  
**Se genera el archivo .json con traducciones en la ruta src/locales/pap/translation.json**  

### En estos archivos se agrega la solicitud de que la pantalla sea traducida a español y papiamento de curazao

- Para configurar i18n:

**Se genera el archivo i18n.ts para controlar el uso de los diferentes idiomas de los archivos i18n generados anteriormente**

Esta implementación incluye:
1. Tipado fuerte con TypeScript
2. Gestión de estado con React hooks
3. Drag and drop con react-beautiful-dnd
4. Diseño responsive
5. Internacionalización con i18next
6. Manejo de errores
7. Servicios API modularizados
8. Estilos CSS modulares
¿Necesitas alguna aclaración o tienes alguna pregunta específica sobre la implementación?

## Prompt 2-6

Solicito ayuda para instalar dependencias, en donde me genera las siguientes instalaciones que luego son ejecutadas

# RTA Prompt 2-6 - Se instalan depenencias

**Para instalar axios i18n**

npm install axios i18next i18next-browser-languagedetector react-i18next
npm install react-i18next i18next @types/i18next

**Para instalar react-beautiful-dnd en tipados react**

npm install react-beautiful-dnd @types/react-beautiful-dnd

**Para instalar iconos  @phosphor-icons/react**

npm install @phosphor-icons/react

**Para instalar axios**

npm install axios @types/axios

## Prompt 7:

Solicito solucionar los errores luego de ejecución (agrego como contexto los errores de la terminal)

# RTA Prompt 7

Solución de errores y correcto cargue de la pantalla

### Se ejecuta de manera correcta, ver video en ruta src/assets/prueba_ejecucion.mp4