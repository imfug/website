---
title: 'EXPLICATIF: Interoperable Master Format (IMF)'
date: '2021-03-10 11:11:49'
layout: page
permalink: explainer/imf-explicatif/
---

[Explicatif IMF (PDF)](/assets/2021/03/imf-explainer-v1a-FR.pdf)[Download](/assets/2021/03/imf-explainer-v1a-FR.pdf)

## Qu'est-ce que l’IMF ?

L’IMF est un format de média basé sur des fichiers qui simplifie la livraison et le stockage des contenus audiovisuels à destination de plateformes et de territoires multiples. Il est particulièrement bien adapté à la livraison pour les plateformes de contenu globales actuelles.

L’IMF fonctionne pour tout type de contenu audiovisuel abouti, y compris les films long métrage, les contenus par épisodes, les publicités, les courts-métrages...

[L’IMF est un standard international piloté activement par la SMPTE.](https://doi.org/10.5594/SMPTE.OV2067-0.2017) Il est extensible, se base sur des technologies éprouvées et bénéficie de nombreuses implémentations tant commerciales que open-source.

## Pourquoi l’IMF ?

Aujourd'hui, chaque titre audiovisuel est systématiquement proposé en plusieurs versions, chacune d'entre elles combinant

-   Un montage conforme aux exigences locales ;
-   Une ou plusieurs langues;
-   Les différentes technologies d'accessibilité, y compris les sous-titres et les sous-titres SME ;
-   Des présentations techniques multiples, y compris le 4K, le HDR et le son immersif ;
-   Des correctifs des versions précédentes.

Un tel nombre de versions différentes ne peut être efficacement traité par la pratique classique qui consiste à livrer chaque version sous forme de livrable linéaire séparé, par exemple sous forme de fichier QuickTime multiplexé ou de cassette.

## Comment ça marche ?

Dans l’IMF, un master audiovisuel est divisé en plusieurs composants, comme illustré ci-dessous.

![](/assets/2021/03/image.png)

Chaque **fichier media** contient un seul type d'essence audiovisuelle correspondant à un seul aspect de la présentation. Par exemple, un premier fichier media peut contenir l'essence vidéo principale, un deuxième peut contenir l'essence audio en Français et un troisième les sous-titres anglais. Les fichiers media utilisent une mouture simplifiée du format MXF.

La **composition playlist** (liste de lecture de composition)rassemble les fichiers media en une timeline et contient des métadonnées liées à cette chronologie. La composition playlistest un document XML.

La combinaison d'une Composition Playlist et des fichiers media auxquels elle fait référence est appelée une **composition** et correspond à un seul master audiovisuel.

Le principal avantage de cette approche basée sur des composants est qu'un fichier media donné peut être réutilisé pour plusieurs versions d'un même titre, ce qui réduit les délais de fabrication et de livraison, les coûts de stockage, les itérations de contrôle qualité...

## Quels sont les exemples d’utilisation de l’IMF ?

-   **Une livraison incrémentale.** Un master en français composé d'une piste vidéo et d'une piste audio française est initialement livré. Quelques temps plus tard, une version américaine du master est créée, entraînant la suppression d'une scène dans la piste vidéo et l'ajout d'une piste audio anglaise. En utilisant l’IMF, seule la Composition Playlist, de taille réduite, et la piste audio anglaise doivent être livrés, supprimant le besoin d’un contrôle qualité et la relivraison du fichier media image, de grande taille.
-   **Livraison en plusieurs langues.** Un master IMF comprend plusieurs pistes audios doublées et des pistes de sous-titres. Chaque piste audio est en outre proposée en version multicanal et stéréo. L'utilisation de l’IMF pour la diffusion permet de transmettre un seul fichier vidéo en même temps que plusieurs fichiers audio et fichiers de sous-titres.
-   **Archive.** L’IMF est utilisé comme format de stockage pour remplacer les masters précédemment stockés comme un recueil ad hoc de fichiers d’images individuelles DPX ou TIFF et de fichiers audio WAV. En utilisant l’IMF, la synchronisation précise entre l'image et les essences audio est préservée, et les métadonnées peuvent être facilement ajoutées. L’IMF est basé sur des technologies standards et éprouvées, il est largement documenté et a de multiples mises en œuvre. Cela en fait un excellent format de stockage pour archiver des originaux qui, autrement, seraient conservés de manière propriétaire ou idoine.

## Quels sont les types d'essence audiovisuelle supportés par l’IMF ?

L’IMF supporte une large gamme d'essence audiovisuelle, y compris :

-   **Image.** 4K, compression avec et sans perte, HDR et « wide color gamut », stéréoscopie...
-   **Audio.** Son 24-bit 48 kHz par canal, son immersif
-   **Sous-titres.** Sous-titres et sous-titres SME destinés au monde entier, y compris la prise en charge d'Unicode, du texte bidirectionnel et vertical, de la mise en page en japonais, du HDR, de la stéréoscopie…

## Quelles sont les « core constraints », «applications » et plugins de l’IMF?

L’IMF est spécifié dans la famille de standards ST 2067 sous la conduite de la SMPTE.

L’IMF est organisé en un ensemble de contraintes principales (**core constraints**) - auxquelles toutes les implémentations de l’IMF doivent se conformer, en plusieurs **applications** - quiciblent des cas d’utilisation spécifiques, ainsi qu’en **plugins -** qui comprennent une technologie optionnelle pouvant être utilisée dans de multiples applications.

L'objectif est que les core constraints représentent l'essentiel du standard IMF, les applications et les plugins introduisant des variations minimales. Jusqu'à présent, la principale distinction entre les applications se fait par le choix des codecs vidéo.

Les core constraints sont spécifiées dans le standard SMPTE ST 2067-2 (Core Constraints). L'une des applications est l'application 2E, qui est spécifiée dans le standard SMPTE ST 2067-21 et qui cible les masters studios. L'un des plugins est le Plug-in Immersive Audio Bitstream Level 0, qui est spécifié dans le standard SMPTE ST 2067-201 et qui ajoute la prise en charge du son immersif.

## L’IMF est-il extensible ?

L’IMF peut être facilement étendu à de nouveaux types d'essence et de métadonnées audiovisuelles. Ces extensions peuvent être standardisées ou spécifiques à l'utilisateur. De fait, la SMPTE met continuellement à jour la famille des standards de l’IMF afin de s'adapter aux nouveaux cas d’utilisation et de corriger les bogues. La contribution et la participation de la communauté sont encouragées.

## Quelles sont les applications actuelles de l’IMF ?

-   **Application n° 2E (SMPTE ST 2067-21).** Masters studio pour les contenus longs métrages et par épisodes. Codage d'images avec et sans perte au format JPEG 2000, de SD SDR à 4K (4096×3112) HDR.
-   **Application n° 3 (SMPTE ST 2067-30).** Codage d'image avec perte en utilisant le MPEG 4 Studio Profile.
-   **Application n° 4 (SMPTE ST 2067-40)**. Préservation du contenu Cinéma Numérique. Codage d'image sans perte en JPEG 2000, jusqu'à 8K (8192×6224) XYZ.
-   **Application n° 5 (SMPTE ST 2067-50)**. Archivage et échange à l'aide de la représentation d'image Academy Color Encoding System (ACES).
-   **Application n° 6 (SMPTE ST 2067-60)**. Echange de contenu UHD entre télédiffuseurs utilisant le codec d'image AVC.
-   **Application DPP (ProRes) (SMPTE **59 -1**).** Masters pour les contenus longs métrages et par épisodes utilisant le codage d'image ProRes, jusqu'à UHD (3840×2160) HDR.
-   **Application ProRes (SMPTE RDD 45).** Codage d'image utilisant le codec ProRes, jusqu'à 4K HDR.

## Comment les compositions d’un IMF sont-elles livrées ou stockées ?

Pour la livraison ou le stockage, une ou plusieurs compositions d’un IMF sont combinées en une **Livraison**. Comme illustré ci-dessous, une Livraison se compose de plusieurs fichiers, qui peuvent être stockés sur le réseau ou sur un support physique.

![](/assets/2021/03/image-1.png)

L'Asset Map permet de localiser tous les fichiers inclus dans la Livraison. Ces fichiers sont regroupés en un ou plusieurs paquets logiques (IMP). Chaque IMP peut, par exemple, correspondre à une commande particulière.

La liste des fichiers qui appartiennent à un IMP est répertoriée dans une Packing List (PKL) (liste de colisage).

## Qu’est-ce qui ne fait pas partie des objectifs de l’IMF ?

L’IMF est conçu pour représenter des masters audiovisuels aboutis, et n'est donc pas idéal pour :

-   La représentation de contenu audiovisuel en cours de production, lorsque des parties du contenu peuvent manquer et/ou ne pas être dans leur forme finale. Les masters IMF peuvent toutefois être facilement créés à partir de listes de lecture telles que l'OTIO.
-   Des expériences intégrales pour l'utilisateur final, qui comprennent des sous-ensembles linguistiques, du contenu interactif supplémentaire, des métadonnées spécifiques à un canal de distribution, etc. L’IMF fonctionne cependant bien avec les pratiques établies, telles que les Common Metadata.
