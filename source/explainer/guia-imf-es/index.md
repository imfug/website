---
title: 'GUÍA: Interoperable Master Format (IMF)'
date: '2021-03-26 10:25:39'
layout: page
permalink: explainer/guia-imf-es/
---

[Resumen IMF (PDF)](/assets/2021/03/imf-explainer-v1.1a-es.pdf)[Download](/assets/2021/03/imf-explainer-v1.1a-es.pdf)

## ¿ Qué es el IMF ?

El IMF es un formato multimedia basado en archivos que simplifica la distribución y el almacenamiento de contenidos audiovisuales orientados a múltiples territorios y plataformas.

IMF está especialmente indicado para cualquier Contenido Original finalizado tales como películas, series, anuncios, materiales de corta duración, etc.

[IMF es un estándar internacional mantenido activamente por la organización SMPTE (Society of Motion Picture and Television Engineers)](https://doi.org/10.5594/SMPTE.OV2067-0.2018). Es extensible y se apoya en tecnologías ya implantadas tanto de código abierto como comerciales.

## ¿ Por qué IMF?

Los contenidos audiovisuales que se distribuyen actualmente se suelen ofrecer en muchas versiones las cuales combinan:

-   Variaciones para cumplir normativas regionales
-   Uno o más idiomas adicionales
-   Medidas de accesibilidad, tales como audio descripción o subtitulado
-   Versiones de más calidad, tales como 4K, HDR o audio inmersivo
-   Correcciones a versiones anteriores

Tal número elevado de versiones hace inviable la gestión y distribución realizada hasta ahora donde cada versión es un archivo independiente. P. ej. Como un archivo QuickTime independiente o una cinta.

## ¿ Cómo funciona el IMF ?

En el mundo del IMF, un Contenido Original se divide en sus componentes, como se muestra a continuación:

![](/assets/2021/03/cpl-1-1024x439.png)

Cada **Archivo de Media (Track File)** contiene una única esencia que se corresponde de forma unívoca con una única representación del contenido. Por ejemplo, el primer archivo de media referencia a la esencia de video mientras que el segundo lo hace a la pista de audio en Español y el tercer archivo de media a los subtítulos en inglés. Todos los archivos de media usan una versión simplificada del MXF en una única variante.

La **Compositon Playlist (CPL)** compone todos los archivos de media en una línea de tiempo a la vez que incluye los metadatos relacionados con la misma. La Composition Playlist es un documento XML.

La combinación de la Composition Playlist y de los archivos de media se denomina **Composición** y se corresponde con un único contenido audio visual.

La primera ventaja de usar esta estructura basada en componentes es que cada archivo de media puede ser reutilizado por las diferentes versiones de un título, reduciendo así los tiempos de edición (mastering) y distribución, así como los costes de almacenamiento, los tiempos empleados en los controles de calidad, etc.

## ¿ Cuales son algunos ejemplos de uso del IMF ?

-   **Envíos Incrementales**. Un contenido original en Español compuesto por una pista de vídeo y una pista en Español se envía inicialmente. Poco después, se crea la versión en Inglés Americano la cual elimina algunas escenas y añade la pista en Inglés. Usando IMF, solamente es necesario enviar los cambios como una nueva composición (reducida) lo cual elimina la necesidad de hacer el Control de Calidad completo y enviar de nuevo la totalidad del archivo de vídeo.
-   **Envíos Multi-Idioma**. Un Contenido Original se va a ofrecer en múltiples idiomas, lo cual incluye múltiples pistas de audio y subtítulos. Usando IMF para la distribución, solamente es necesario enviar la pista de vídeo una vez junto con los diferentes archivos de audio y subtítulos.
-   **Archivado**. IMF se puede usar como formato de almacenamiento para reemplazar Contenidos Originales archivados inicialmente como una colección de DPXs o imágenes TIFF y archivos WAV. Usando IMF, la sincronización entre los diferentes elementos está garantizada y la metadata se puede añadir fácilmente. Al estar IMF basado en estándares ya probados está ampliamente documentado y se ha desplegado con éxito en numerosas organizaciones. Esto lo convierte en un formato ideal para el almacenamiento a largo plazo sin usar mecanismos o métodos propietarios.

## ¿ Qué tipos de esencias soporta IMF ?

IMF soporta un gran número de esencias, las cuales incluyen:

-   **Imagen**. 8K, formatos con y sin pérdida, alto rango dinámico (HDR), color gamut, 3D, etc.
-   **Audio**. 24-bit y 48/96 kHz, audio inmersivo, …
-   **Subtítulos**. Soporte a nivel mundial de diferentes tipos de subtítulos lo cual incluye Unicode, representación bidireccional y vertical, soporte del idioma japonés, además del vídeo de alto rango dinámico, y 3D.

## ¿ Qué son las ‘Core Constraints’, Applications y Plug-ins ?

IMF se define por la familia de estándares del ST 2067 gestionados por el SMPTE.

El estándar IMF está organizado en base a una serie de restricciones base (**Core Constraints**) las cuales son de obligado cumplimiento para cualquier implementación del mismo. También se definen un conjunto de aplicaciones (**Applications**) las cuales definen los casos de uso y **plug-ins** que contienen tecnologías adicionales que pueden ser usadas transversalmente por múltiples aplicaciones.

El objetivo de las restricciones base es representar el nucleo del estándar IMF mientras que las aplicaciones y los plug-ins permiten mínimas variaciones. La principal diferencia entre las múltiples aplicaciones disponibles es la elección del códec de vídeo.

Las restricciones base se definen por el estándar SMPTE ST 2067-2 (Core Constraints). Una de las aplicaciones disponibles es la Application #2E, la cual se encuentra definida por el estándar 2067-21 y se centra en los Contenidos Originales generados por los estudios. Uno de los plugins es el Immersive Audio Bitstream Level 0 Plug-in, el cual está especificado en el estándar SMPTE ST2067-201 y añade el soporte para audio inmersivo.

## ¿ Es el IMF Ampliable ?

El IMF puede ser fácilmente ampliable con nuevos tipos de esencias audio visuales y metadatos. Tales extensiones pueden ser estándar o específicas. De hecho, el SMPTE continúa revisando y actualizando la familia de estándares del IMF para atender a las nuevas necesidades del mercado y a la corrección de bugs. Desde el IMF UG recomendamos encarecidamente la participación y contribución en la comunidad.

## ¿ Que Aplicaciones de IMF hay disponibles actualmente ?

-   **Application #2E (SMPTE ST 2067-21)**. Contenidos Originales de estudios para series y películas. Formatos con y sin pérdida usando JPEG 2000 desde SD SDR a 4K (4096×3112) HDR.
-   **Application #3 (SMPTE ST 2067-30)**. Codificación sin pérdida usando MPEG 4 Studio Profile.
-   **Application #4 (SMPTE ST 2067-40)**. Preservación de contenidos usando D-Cinema. Codificación sin pérdida usando JPEG 2000, hasta 8K (8192×6224) XYZ.
-   **Application #5 (SMPTE ST 2067-50)**. Archivado e intercambio de contenidos usando la representación ACES (Academy Color Encoding System).
-   **Application #6 (SMPTE ST 2067-60).** Flujos de trabajo en estaciones de televisión para contenidos UHD usando el códec AVC.
-   **Application DPP (ProRes) (SMPTE RDD 59-1)**. Contenidos Originales para series y películas usando ProRes, hasta UHD (3840×2160) HDR.
-   **Application ProRes (SMPTE RDD 45)**. Codificación usando ProRes hasta 4K HDR.

## ¿ Cómo se distribuyen y se almacenan las Composiciones IMF ?

Ya sea para distribución o almacenamiento,  una o más composiciones IMF puede combinarse en un paquete **(Delivery)**. Como se muestra a continuación, un paquete se compone de múltiples archivos los cuales se pueden enviar vía red o almacenar en cualquier soporte físico.

El **Asset Map** define la localización de todos los archivos incluidos en el paquete. Estos archivos se agrupan dentro de uno o más paquetes lógicos (IMP). Cada IMP puede corresponder, por ejemplo, con una orden de compra en particular. La lista de todos los archivos que pertenecen a un IMP específico se recoge en la **Packing List** (PKL).

![](/assets/2021/03/pkl-1-1024x568.png)

## ¿ Cuales NO son Objetivos del IMF ?

El IMF está diseñado para representar contenidos finalizados y por lo tanto no es apropiado  para los siguientes casos:

-   Contenido generado durante el proceso de Producción, donde hay ciertas partes que faltan y/o no están en su formato final. Contenidos IMF pueden crearse fácilmente desde formatos abiertos de playlist tales como OTIO (Open Timeline IO).
-   Experiencias completas de usuarios finales, los cuales incluyen subconjuntos de idiomas, contenidos interactivos, metadata específica para un canal de distribución completo, etc. El IMF sin embargo se adapta bien al uso de buenas prácticas tales como el uso común de metadatos (Common Metadata).
