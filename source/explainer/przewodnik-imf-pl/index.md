---
title: 'PRZEWODNIK: Interoperable Master Format (IMF)'
date: '2021-03-25 08:36:51'
layout: page
permalink: explainer/przewodnik-imf-pl/
---

[Przewodnik IMF (PDF)](/assets/2021/03/imf-explainer-v3a_final_PL.pdf)[Download](/assets/2021/03/imf-explainer-v3a_final_PL.pdf)

## Co to jest IMF?

IMF jest plikowym formatem multimedialnym, który upraszcza dostarczanie i przechowywanie audiowizualnych plików wzorcowych (masterów) przeznaczonych na wiele terytoriów i platform. Jest przystosowany przede wszystkim do dostarczania treści na platformy streamingowe na całym świecie.

IMF może być wykonany z każdego mastera audiowizualnego, m.in. z filmów pełnometrażowych, seriali, reklam czy innych form krótkometrażowych.

[IMF jest międzynarodowym standardem, aktywnie rozwijanym przez SMPTE](https://doi.org/10.5594/SMPTE.OV2067-0.2017). Format ten jest rozszerzalny, wykorzystuje sprawdzone technologie i korzysta zarówno z wielu zastosowań komercyjnych, jak i tych o otwartym kodzie źródłowym.

## Dlaczego IMF?

W dzisiejszych czasach wszelkie formy audiowizualne są zwykle oferowane w wielu wersjach, a każda z nich łączy w sobie:

-   edycję zgodną z wymaganiami regionalnymi
-   jeden lub więcej języków
-   metadane, w tym napisy i podpisy
-   wymagania technologiczne, w tym 4K, HDR i dźwięk immersyjny
-   poprawki w stosunku do wcześniejszych wersji

Mnogość tych wersji powoduje, że dostarczanie plików metodą tradycyjną, czyli każda wersja jako osobny liniowy plik wzorcowy, np. jako zmultipleksowany plik QuickTime lub wręcz jako zapis na taśmie magnetycznej, jest nieefektywne i kosztowne.

## Jak działa IMF?

W formacie IMF master audiowizualny jest podzielony na elementy składowe (diagram poniżej).

![](/assets/2021/03/cpl-pl.-1024x441.png)

Ścieżki zawierają treść audiowizualną, podczas gdy Lista Odtwarzania Kompozycji odpowiada za opis oraz prawidłowe odtwarzanie pliku IMF.

Każda **Ścieżka** zawiera jeden rodzaj treści audiowizualnej, który odpowiada pojedynczemu elementowi prezentacji. Na przykład, pierwsza Ścieżka może zawierać główną zawartość video, druga może zawierać francuską wersję audio, a trzecia napisy angielskie. Ścieżki zakodowane są w uproszczonej postaci do kontenera MXF.

**Lista** **Odtwarzania Kompozycji (CPL)** gromadzi Ścieżki na osi czasu (timeline) i zawiera metadane z nią związane. Lista Odtwarzania Kompozycji jest dokumentem XML.

Połączenie Listy Odtwarzania Kompozycji i Ścieżek, do których się ona odnosi, nazywane jest **Kompozycją**      
i odpowiada pojedynczemu masterowi audiowizualnemu.

Główną zaletą podejścia opartego na elementach składowych jest to, że dana Ścieżka może być ponownie użyta w wielu wersjach filmu, co skutkuje krótszym czasem wykonania i dostarczania plików, obniżeniem kosztów ich przechowywania oraz skróceniem czasu kontroli jakości.

## Jakie jest przykładowe zastosowanie IMF?

-   **Dostarczanie przyrostowe.** Najpierw dostarczany jest francuski master składający się ze ścieżki video i francuskiej ścieżki dźwiękowej. Za jakiś czas tworzony jest angielski master (wersja USA), co wymaga usunięcia jednej sceny ze ścieżki video i dodania angielskiej ścieżki dźwiękowej. Stosując IMF, należy dostarczyć tylko krótką (małą) Listę Odtwarzania Kompozycji i ścieżkę dźwiękową w języku angielskim, co eliminuje potrzebę pełnej kontroli jakości i ponownego wysyłania całej (dużej) ścieżki video.
-   **Dostarczanie w wielu językach.** Master zawiera kilka dubbingowanych ścieżek audio i ścieżek z napisami. Każda ścieżka dźwiękowa jest ponadto oferowana zarówno w wersji wielokanałowej, jak i stereofonicznej. Zastosowanie IMF powoduje, że pojedynczy plik video jest przesyłany wraz z wieloma plikami audio i plikami tekstowymi z rozstawionymi napisami.
-   **Archiwizacja.** IMF jest używany jako format archiwizacyjny, który zastępuje wcześniej wykonywane mastery, składowane jako zbiór pojedynczych plików graficznych DPX lub TIFF oraz plików audio WAV. Dzięki zastosowaniu IMF zachowana jest precyzyjna synchronizacja obrazu z dźwiękiem, a metadane mogą być dodane w łatwy sposób. IMF posiada wiele zastosowań, jest oparty na sprawdzonych i standardowych technologiach, które są obszernie udokumentowane. Sprawia to, że staje się doskonałym formatem do archiwizacji masterów, które w przeciwnym razie byłyby przechowywane w sposób specyficzny dla każdego dystrybutora lub bez uprzedniego przygotowania.

## Jakie rodzaje treści audiowizualnych obsługuje IMF?

IMF obsługuje szeroką gamę treści audiowizualnych, w tym:

-   **Obraz.** 4K, kompresja stratna i bezstratna, wysoki zakres dynamiki obrazu (HDR) i szeroka gama barw, 3D stereoskopowe, etc.
-   **Dźwięk.**  24-bitowy dźwięk kanałowy 48kHz, dźwięk immersyjny, etc.
-   **Rozstawiony tekst.** Napisy i podpisy wielojęzyczne, w tym obsługa Unicode, tekst dwukierunkowy  
    i pionowy, układ języka japońskiego, video o wysokim zakresie dynamiki (HDR), 3D stereoskopowe, etc.

## Jakie są podstawowe ograniczenia, aplikacje i wtyczki IMF?

IMF jest opisany w rodzinie standardów ST 2067 opracowanej przez SMPTE.

IMF posiada zbiór **podstawowych ograniczeń**, z którymi powinny być zgodne wszystkie zastosowania IMF, oraz kilka **aplikacji**, które znajdują zastosowanie w konkretnych przypadkach, a także **wtyczki (plug-ins)** zawierające opcje różnych rozwiązań technologicznych.

Celem jest, aby zasadnicze ograniczenia reprezentowały bazę dla standardu IMF, a aplikacje i wtyczki wprowadzały niewielkie warianty. Do tej pory głównym rozróżnieniem między aplikacjami był zestaw ich kodeków video.

Podstawowe ograniczenia są określone w SMPTE ST 2067-2 (Core Constraints). Jedną z aplikacji jest Application # 2E, opisana w SMPTE ST 2067-21 i przeznaczona do masterów studyjnych. Jedną z wtyczek jest Immersive Audio Bitstream Level 0, opisana w SMPTE ST 2067-201 i opisujaca wsparcie dla dźwięku immersyjnego.

## Czy IMF można rozbudowywać?

Do IMF można łatwo dodać nowe rodzaje treści audiowizualnych i metadanych. Takie zmiany mogą być standardowe lub specyficzne dla użytkownika. SMPTE stale aktualizuje standardy IMF, aby dopasować je do pojawiających się nowych zastosowań oraz korygować istniejące błędy. Zachęcamy do udziału w pracach naszej technologicznej społeczności.

## Jakie są obecne aplikacje IMF?

-   **Application #2E (SMPTE ST 2067-21).** Mastery studyjne filmów fabularnych i seriali. Stratne i bezstratne kodowanie obrazu przy użyciu JPEG 2000, od SD SDR do 4K (4096 × 3112) HDR.
-   **Application #3 (SMPTE ST 2067-30).** Stratne kodowanie obrazu przy użyciu MPEG 4 Studio Profile.
-   **Application #4 (SMPTE ST 2067-40)**. Zachowanie treści D-Cinema. Bezstratne kodowanie obrazu przy użyciu JPEG 2000, do 8K (8192 × 6224) XYZ.
-   **Application #5 (SMPTE ST 2067-50)**. Archiwizacja i wymiana za pomocą odwzorowania obrazu w Academy Color Encoding System (ACES).
-   **Application #6 (SMPTE ST 2067-60)**. Przebieg prac dla programów UHDTV w środowisku telewizyjnym z wykorzystaniem kodeka AVC.
-   **Application DPP (ProRes) (SMPTE RDD 59-1).** Mastery dla treści fabularnych i seriali przy użyciu kodowania obrazu ProRes, do UHD (3840 × 2160) HDR.
-   **Application ProRes (SMPTE RDD 45).** Kodowanie obrazu przy użyciu kodowania obrazu ProRes, do 4K HDR.

## W jaki sposób są dostarczane lub przechowywane Kompozycje IMF?

W celu przesyłania lub przechowywania jednej lub wielu Kompozycji IMF łączy się je w **Paczkę (Delivery)**. Tak jak pokazano poniżej, Paczka składa się z wielu plików, które mogą być przechowywane w środowisku sieciowym lub na nośniku fizycznym.

Mapa Zasobów opisuje lokalizację wszystkich plików zawartych w Paczce. Pliki te są pogrupowane w jeden lub więcej pakietów logicznych (IMP). Każdy IMP może, na przykład, odpowiadać konkretnemu zamówieniu. Lista plików należących do IMP znajduje się w **Liście Pakowania** (PKL).

![](/assets/2021/03/pkl.pl_-1024x571.png)

## Kiedy nie stosować IMF?

IMF ma być finalnym, wyjściowym masterem audiowizualnym i jako taki nie jest odpowiednio przystosowany do pracy przy:

-   treściach audiowizualnych podczas produkcji, w których może brakować części treści i/lub mogą one nie mieć jeszcze ostatecznej formy. Pliki IMF można jednak łatwo stworzyć z list odtwarzania, takich jak OTIO.
-   różnorakich materiałach uzupełniających, które obejmują podzbiory językowe, dodatkowe treści interaktywne, metadane specyficzne dla kanału dystrybucji itp. Jednak IMF działa dobrze według sprawdzonych praktyk, takich jak dodawanie metadanych do masterów (Common Metadata).
