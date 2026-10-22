---
title: 'Eine kurze Einführung: Interoperable Master Format (IMF)'
date: '2021-03-23 09:35:44'
layout: page
permalink: explainer/einfuhrung-imf/
---

[IMF Einführung (PDF)](/assets/2021/03/imf-explainer-v1-de.pdf)[Download](/assets/2021/03/imf-explainer-v1-de.pdf)

## Was ist IMF?

IMF ist ein dateibasiertes Medienformat, das die Bereitstellung und Speicherung von audiovisuellen Mastern vereinfacht, die für mehrere Territorien und Plattformen bestimmt sind. Es ist besonders gut für die Anlieferung an die heutigen, global-agierenden Inhalteplattformen geeignet.

IMF kann mit allen fertigen audiovisuellen Mastern eingesetzt werden, dies schließt Spielfilme, Serien, Werbung und Kurzfilme ein.

[IMF ist ein internationaler Standard, der von der Society of Motion Picture and Television Engineers (SMPTE) aktiv gepflegt und weiterentwickelt wird.](https://doi.org/10.5594/SMPTE.OV2067-0.2018) IMF ist erweiterbar, greift auf bewährte Technologien zurück und profitiert von vielen Open-Source- und kommerziellen Implementierungen.

## Warum IMF?

Typischerweise liegt ein audiovisueller Titel in einer Vielzahl von Versionen vor, die jeweils folgende Bestandteile beinhalten können:

-   eine oder mehrere Schnittversionen zur Anpassung an regionale Anforderungen
-   eine oder mehrere Sprachversionen
-   Zugangsmöglichkeiten für Barrierefreiheit, einschließlich Untertiteln und Bildbeschreibungen für Sehbehinderte
-   technische Varianten, einschließlich 4K, HDR und immersives Audio
-   Korrekturen an früheren Versionen

Eine sehr große Anzahl von Versionen kann mit der herkömmlichen Praxis, jeden Inhalt als eigenständigen, linearen audiovisuellen Master zu übermitteln (z. B. als gemultiplexte QuickTime-Datei oder auf Band/Disk), nicht mehr effizient bewältigt werden

## Wie funktioniert IMF?

Bei der Verwendung von IMF setzt sich ein audiovisuelles Master aus Komponenten zusammen, wie unten dargestellt.

Jedes **Track File** enthält eine einzelne Kategorie audio-visueller Essenz, die einem einzelnen Aspekt der Präsentation entspricht. Zum Beispiel könnte das erste Track File die primäre Videoessenz enthalten, während das zweite die französische Audioessenz und ein drittes die englischen Untertitel enthalten könnte. Track Files werden in einer vereinfachten Variante des MXF-Dateiformates gespeichert.

Die **Composition Playlist** kombiniert die einzelnen Komponenten (Track Files) zusammen mit Metadaten zu einer Timeline. Die Composition Playlist ist ein XML-Dokument.

Die Kombination aus einer Composition Playlist und den darin referenzierten Track Files wird als **Composition** bezeichnet und entspricht einem einzelnen audiovisuellen Master.

Der Hauptvorteil dieses Komponenten-basierten Ansatzes besteht darin, dass ein bestimmtes Track File über mehrere Versionierungen eines Titels hinweg wiederverwendet werden kann. Das reduziert Mastering- und Lieferzeiten, den Aufwand bei technischen Abnahmen, Lagerkosten etc.

![](/assets/2021/03/imf-composition-explainer-v2-1024x670.png)

IMF referenziert einzelne audio-visuelle Masteressenzen als eigenständige Komponenten: Diese Essenzen sind die Track Files, aus denen eine Composition Playlist ein Programm in einer Timeline erstellt.

## Was sind typische Anwendungsfälle für IMF?

-   **Inkrementelle Lieferung.** Ein französisches Master, welches aus einer Videospur und einer französischen Audiospur besteht, wird geliefert. Im weiteren Verlauf soll eine US-englische Fassung des Masters erstellt werden, in dem eine Szene in der Videospur entfernt und eine englische Audiospur hinzugefügt wird. Mit IMF müssen nur die Composition Playlist und die englische Audiospur nachgeliefert werden. Die Notwendigkeit einer weiteren Übertragung des Video-Track-Files wie auch dessen erneute technische Abnahme entfallen.
-   **Mehrsprachige Lieferung.** Ein Master enthält mehrere Synchron-Fassungen und Untertitel-Fassungen. Jede Synchron-Fassung wird außerdem in Mehrkanal- und Stereoversionen angeboten. Die Verwendung von IMF für die Auslieferung ermöglicht es, dass eine einzige Videospur zusammen mit sämtlichen Synchron-Fassungen und Untertitel-Dateien übertragen wird.
-   **Archivierung von Einzelbild-Sequenzen**. IMF wird als Archiv-Ablageformat verwendet, um Master zu ersetzen, die zuvor als Ad-hoc-Sammlung von einzelnen DPX- oder TIFF-Bilddateien und WAV-Audiodateien gespeichert wurden. Durch die Verwendung von IMF bleibt die präzise Synchronisation zwischen den Bild- und Audio-Assets erhalten, und Metadaten können problemlos hinzugefügt werden. IMF basiert auf bewährten und standardisierten Technologien, ist umfangreich dokumentiert und verfügt über zahlreiche Implementierungen. Dies macht es zu einem ausgezeichneten Archivierungsformat von Mastern, die sonst auf proprietäre oder Ad-hoc-Art aufbewahrt werden

## Welche Arten audiovisueller Essenzen unterstützt IMF?

IMF unterstützt eine breite Palette audiovisueller Essenzen, darunter:

-   **Bild.** Auflösungen von SD, HDTV bis 8K, verlustbehaftete und verlustfreie Kompression, High Dynamic Range und erweiterter Farbumfang, stereoskopisches 3D...
-   **Audio.**  24-Bit 48/96 kHz kanalbasierter Sound, immersives Audio...
-   **Untertitel.** Weltweite Untertitel, einschließlich der Unterstützung für Unicode, bidirektionalen und vertikalen Text, gesonderter Untertitel für Hörgeschädigte, japanisches Schriftlayout, Untertitel für High Dynamic Range Video, Untertitel für stereoskopisches 3D...

## Was sind IMF Core Constraints, Applikationen and Plug-ins?

IMF ist in der Standard-Familie ST 2067 spezifiziert, die von der SMPTE herausgegeben wird.

IMF besteht aus einem Satz an **Core Constraints** („grundsätzlichen Vorgaben“) und mehreren **Applikationen** sowie **Plugins**. Die Core Constraints müssen von allen IMF-Implementierungen erfüllt werden, während die Applikationen auf bestimmte Anwendungsfälle abzielen. Plugins enthalten optionale Technologien, die in mehreren Anwendungen verwendet werden können.

Das Konzept von IMF beinhaltet, dass die Core Constraints den Großteil des Standards ausmachen und Applikationen sowie Plug-ins nur kleinere Ergänzungen einführen. Bislang unterscheiden sich die Applikationen vor allem durch die jeweils gewählten Videocodecs.

Die Core Constraints sind im Standard SMPTE ST 2067-2 (Core Constraints) spezifiziert. Eine der Applikationen ist Application #2E, die in SMPTE ST 2067-21 spezifiziert ist und auf Studio-Master abzielt. Eines der Plug-ins ist das Immersive Audio Bitstream Level 0 Plug-in, das in SMPTE ST 2067-201 spezifiziert ist und Unterstützung für immersives Audio bietet.

## Ist IMF erweiterbar?

IMF kann leicht um neue Arten audiovisueller Essenzen und Metadaten erweitert werden. Solche Erweiterungen können standardisiert oder auch benutzerspezifisch sein. Die SMPTE aktualisiert die IMF-Standardfamilie kontinuierlich, um neue Anwendungsfälle zu berücksichtigen und Fehler zu beheben. Beiträge und die Beteiligung der Community sind erwünscht.

## Was sind die derzeit verfügbaren IMF Applikationen?

-   **Application #2E (SMPTE ST 2067-21).** Studio-Master für Spielfilm- und Serieninhalte. Verlustbehaftete und verlustfreie Bildcodierung mit JPEG 2000 von SD SDR bis 4K (4096×3112) HDR
-   **Application #3 (SMPTE ST 2067-30).** Verlustbehaftete Bildkodierung mit MPEG 4 Studio Profile.
-   **Application #4 (SMPTE ST 2067-40)**. Sicherung von D-Cinema-Inhalten. Verlustfreie Bildkodierung mit JPEG 2000, bis zu 8K (8192×6224) XYZ.
-   **Application #5 (SMPTE ST 2067-50)**. Archivierung und Austausch von Bildmaterial im ACES (Academy Color Encoding System) Format.
-   **Application #6 (SMPTE ST 2067-60).** UHDTV-Programmbereitstellung in Fernsehanstalten unter Verwendung des AVC-Codecs.
-   **Application DPP (ProRes) (SMPTE RDD 59-1).** Master für Spielfilm- und Serieninhalte mit ProRes-Bildkodierung, bis zu UHD (3840×2160) HDR.
-   **Application ProRes (SMPTE RDD 45).** Master mit ProRes-Bildkodierung, bis zu 4K HDR.

## Wie werden IMF-Kompositionen geliefert und abgelegt?

Zur Auslieferung oder Speicherung werden eine oder mehrere IMF-Kompositionen zu einer so genannten “Delivery” (Lieferung) zusammengefasst. Wie unten dargestellt, besteht eine Delivery aus mehreren Dateien, die im Netzwerk oder auf physischen Medien gespeichert werden können.

![](/assets/2021/03/pkl-1024x568.png)

Zur Auslieferung oder Speicherung werden eine oder mehrere IMF-Kompositionen zu einer so genannten “Delivery” (Lieferung).

Die Asset Map listet die Speicherorte aller in einer Delivery enthaltenen Dateien auf. Diese Dateien sind in ein oder mehrere logische Pakete (Interoperable Master Packages, IMP) gruppiert. Jedes IMP kann z. B. einer bestimmten Auslieferung entsprechen. Die Dateien, die zu einem IMP gehören, werden in einer Packing List (PKL) aufgelistet.

## Was sind keine Anwendungsfälle für IMF?

IMF wurde entwickelt, um finalisierte audiovisuelle Master darzustellen. Daher ist es für folgende Inhalte nicht ideal geeignet:

-   Audiovisuelle Inhalte während der Produktion, bei denen Teile des Inhalts fehlen und/oder nicht in ihrer endgültigen Form vorliegen. IMF-Master können jedoch problemlos aus Playlisten wie Open Timeline IO erstellt werden.
-   Komplette Endnutzererlebnisse, wie beispielsweise Distributions-Kopien (z.B. Multi-Angle Blu-ray), die verschiedene Sprachfassungen, zusätzliche interaktive Inhalte, spezifische Metadaten für bestimmte Anwendungen usw. enthalten.
