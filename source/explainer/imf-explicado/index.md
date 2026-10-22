---
title: 'EXPLICADO: Interoperable Master Format (IMF)'
date: '2021-03-10 11:32:25'
layout: page
permalink: explainer/imf-explicado/
---

[Explicado IMF (PDF)](/assets/2021/03/imf-explainer-v1a_PT_BR.pdf)[Download](/assets/2021/03/imf-explainer-v1a_PT_BR.pdf)

## O que é IMF?

IMF é um formato de media baseado em arquivo digital que simplifica a entrega e armazenamento de um produto final audiovisual com intenção de atingir múltiplas plataformas e território. É, particularmente, muito bem adaptado para entregas nas plataformas de conteúdo global de hoje.

IMF funciona com qualquer produto audiovisual finalizado, incluindo longa-metragem, séries em episódios, publicidade, curtas, …

[IMF é um padrão internacional ativamente gerenciado pela SMPTE](https://doi.org/10.5594/SMPTE.OV2067-0.2018). É expansívell, usa  tecnologia comprovada e se beneficia de muitas implementações de fontes abertas e comerciais.

## Porque IMF?

Hoje, cada título audiovisual é, comummente, oferecido em várias versões, cada uma combinando:

-   uma edição para se adequar a requerimentos regionais
-   uma ou mais línguas
-   tecnologia de acessibilidade, incluído subtítulos e legendas descritivas
-   novas tecnologias, incluindo 4K, HDR e som imersivo
-   correções de versões anteriores

A possibilidade de um quantidade grande de versões não pode ser abordado eficientementer apenas com a entrega de cada versão como um arquivo audiovisual linear separado, como por exemplo, como um arquivo digital quicktime ou um fita.

## Como o IMF funciona ?

No IMF, um produto audiovisual finalizado é dividido em seus componentes, conforme ilustrado abaixo.

![](/assets/2021/03/image.png)

Cada **Track File (****Arquivo de Trilha****) contém um único tipo de essência audiovisual correspondente a um aspecto único da apresentação**. Por exemplo, o primeiro Arquivo de Trilha deve conter a essência do video primário enquanto o segundo deve conter a essência do áudio em francês e o terceiro a legenda descritiva em Inglês. Arquivos de Trilha usam uma variação simplificada do formato de arquivo MXF.

A **Composition Playlist** (**Lista de reprodução da Composição**) reúne os arquivos de trilha em uma linha do tempo e contém metadados relacionados à uma linha do tempo. A Lista de reprodução da Composição é um documento XML.

A combinação de uma Lista de reprodução da Composição e os Arquivos de Trilha aos quais ela faz referência é chamada de **Composição** e corresponde a um único produto audiovisual finalizado.

O benefício primário desta abordagem baseada em componentes é que um determinado arquivo de trilha pode ser reutilizado em várias versões de um título, resultando em redução dos tempos de masterização e entrega, custos de armazenamento, controle de qualidade….

## Quais são os exemplos de uso do IMF?

-   **Delivery (Entrega) Adicional****.** Um produto final Francês com uma trilha de vídeo e uma trilha de áudio em Francês é, incialmente, entregue. Algum tempo depois, uma versão em Inglês para os Estados Unidos é criada, resultando na remoção de uma cena da trilha de vídeo e na adição de uma trilahr de áudio em inglês. Usando o IMF, apenas a Lista de reprodução da composição (Composition playlist) e a trilha de áudio em inglês precisam ser incorporadas, tirando a necessidade de QC (controle de qualidade) e reenvio da trilha de vídeo.

-   **Entrega em vários línguas diferentes.** Um produto audiovisual finalizado  inclui várias faixas de áudio dubladas e faixas de legendas. Cada faixa de áudio é oferecida nas versões multicanal e estéreo. O uso do IMF para entrega resulta na transmissão de um único arquivo de vídeo junto com vários arquivos de áudio e texto cronometrado.
-   **A****rquivamento****.** O IMF é usado como um formato de armazenamento para substituir os produtos finalizados previamente armazenados como uma coleção ad-hoc de arquivos de imagem DPX ou TIFF individuais e arquivos de áudio WAV. Ao usar o IMF, a sincronização precisa entre os ativos de imagem e áudio é preservada e os metadados podem ser adicionados prontamente. O IMF é baseado em tecnologias comprovadas e padronizadas, é amplamente documentado e tem várias implementações. Isso o torna um excelente formato de armazenamento para arquivar produtos auiovisuais que, de outra forma, seriam preservados de forma proprietária ou ad hoc.

## Que tipo de essência audiovisual o IMF suporta ?

IMF suporta uma ampla gama de essência audiovisual, incluindo:

-   **Imagem.** 4K, compressão com e sem perdas, faixa dinâmica alta e ampla gama de cores, estereoscópico 3D…
-   **Áudio.**  Som baseado em canal de 48 kHz de 24 bits, som envolvente ...
-   **Texto cronometrado.** Legendas e legendas descritivas em todo o mundo, incluindo suporte para Unicode, texto bidirecional e vertical, layout em japonês, vídeo de alta faixa dinâmica, 3D estereoscópico ...

## Quais são as principais restrições, aplicativos e plug-ins do IMF ?

O IMF é especificado na família ST 2067 de padrões gerenciados pelo SMPTE.

O IMF é organizado em um **conjunto de restrições básicas**, às quais todas as implementações do IMF devem estar em conformidade, e vários **aplicativos**, que visam casos de uso específicos, e **plug-ins**, que contêm tecnologia opcional que pode ser usada em vários aplicativos.

O objetivo é que as restrições principais representem a maior parte do padrão do IMF, com aplicativos e plug-ins que apresentam variações mínimas. Até agora, a principal distinção entre os aplicativos tem sido a escolha dos codecs de vídeo.

As restrições principais são especificadas em SMPTE ST 2067-2 (restrições essenciais). Um dos aplicativos é o Aplicativo # 2E, que é especificado no SMPTE ST 2067-21 e tem como alvo os masters de estúdio. Um dos plug-ins é Immersive Audio Bitstream Level 0 Plug-in, que é especificado no SMPTE ST 2067-201 e adiciona suporte para som envolvente.

## O IMF é expansível ?

O IMF pode ser prontamente expandido com novos tipos de essência audiovisual e metadados. Essas extensões podem ser padrão ou específicas do usuário. Na verdade, o SMPTE atualiza continuamente a família de padrões IMF para corresponder aos casos de uso emergentes e corrigir erros. A contribuição e a participação da comunidade são incentivadas.

## Quais são as aplicações atuais do IMF ?

-   **Aplicação # 2E (SMPTE ST 2067-21)**. Produto finalizado de estúdio para filmes e séries. Codificação de imagem com e sem perdas usando JPEG 2000 de SD SDR para 4K (4096 × 3112) HDR.
-   **Aplicação** **#3 (SMPTE ST 2067-30).** Codificação de imagem com perdas usando MPEG 4 Studio Profile.
-   **Aplicação** **#4 (SMPTE ST 2067-40)**. Preservação de conteúdo D-Cinema. Codificação de imagem sem perdas usando JPEG 2000, até 8K (8192 × 6224) XYZ.
-   **Aplicação** **#5 (SMPTE ST 2067-50)**. Arquivamento e troca usando a representação de imagem do Academy Color Encoding System (ACES).
-   **Aplicação** **DPP (ProRes) (SMPTE RDD 59-1).** Produto finalizado para filmes e séries usando codificação de imagem ProRes, até UHD (3840 × 2160) HDR.
-   **Aplicação** **ProRes (SMPTE RDD 45).** Codificação de imagem usando codificação de imagem ProRes, até 4K HDR.

## Como são entregues ou armazenados as Composições do IMF ?

Para entrega ou armazenamento, uma ou mais composições do FMI são combinadas em uma E**ntrega**. Conforme ilustrado a seguir, uma Entrega consiste em vários arquivos, que podem ser armazenados na rede ou em mídia física.

O Mapa de ativos (Asset Map)  fornece uma localização de todos os arquivos incluídos na entrega. Esses arquivos são agrupados em um ou mais pacotes lógicos (IMP). Cada IMP pode, por exemplo, corresponder a um pedido de compra específico. A lista de arquivos que pertencem a um IMP estão listados em uma **Lista do Pacote** (**Packing List** – PKL).

![](/assets/2021/03/image-1.png)

## Quais são os itens que não seriam apropriados para o IMF?

IMF é projetado para representar produtos audiovisuais finalizados, como tal, não é idealmente adequado para representar:

-   conteúdo audiovisual durante as produções, em que partes do conteúdo podem estar faltando e / ou não estarem em sua forma final. No entanto, os produtos finalizado do IMF podem ser criados prontamente a partir de listas de reprodução como OTIO.
-   experiências completas do usuário final, que incluem subconjuntos de idiomas, conteúdo interativo adicional, metadados específicos para um canal de distribuição, etc. O IMF, entretanto, funciona bem com práticas estabelecidas, como Metadados Comuns.
