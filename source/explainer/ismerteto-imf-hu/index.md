---
title: 'ISMERTETŐ: Interoperable Master Format (IMF)'
date: '2021-03-24 09:30:51'
layout: page
permalink: explainer/ismerteto-imf-hu/
---

[Ismertető IMF (PDF)](/assets/2021/03/imf-explainer-v1-hu.pdf)[Download](/assets/2021/03/imf-explainer-v1-hu.pdf)

## **Mi az az IMF?**

Az IMF egy fájlalapú médiaformátum, amely leegyszerűsíti a többféle területre és platformra szánt audiovizuális mesterpéldányok küldését és tárolását, és kiváltképp megfelelő a mai globális streaming szolgáltatók számára történő átadáshoz.

Az IMF bármely elkészült audiovizuális mesterpéldány esetében alkalmazható, legyen az hosszú formátumú film, epizódtartalom, hirdetés, rövid formátumú tartalom... 

Az IMF az SMPTE által aktívan fejlesztett nemzetközi szabvány, amely bővíthető, bevált technológiákat alkalmaz, és számos nyílt forráskódú és üzleti megvalósítás előnyeit élvezi.

## **Miért az IMF?**

Ma már minden audiovizuális anyag rendszerint több változatban készül, magában foglalva a következőket:

-   regionális követelményeknek megfelelő lokalizált verzió
-   egy vagy több nyelvi verzió
-   akadálymentes technológiák, többek között feliratok és hang feliratozások
-   technikai reprezentációk, többek között 4K, HDR és immerzív hang
-   korábbi verziók javításai

Ilyen nagyszámú verziót nem lehet hatékonyan kezelni a korábbi gyakorlat alapján, amikor minden egyes verziót külön lineáris audiovizuális mesterpéldányként, pl. multiplex QuickTime fájlként vagy filmszalagon állítottak elő.

## **Hogyan működik az IMF?**

Az IMF audiovizuális mesterpéldány részkomponensekre oszlik, mint azt az alábbi ábra mutatja:

![](/assets/2021/03/cpl-1-1024x439.png)

Az IMF az audiovizuális mesterpéldányokat részkomponensekre bontja: a médiafájlok (track files, azaz video-, audio- és feliratfájlok) tartalmazzák az audiovizuális adatokat, a kompozíciós lejátszólista (CPL = composition playlist) pedig a médiafájlokat szekvenciaként összeállítja a timeline-on, azaz egy grafikus idővonalon.

Az egyes médiafájlok (**Track File**) csak egyfajta audiovizuális adattípust tartalmaznak, igazodva a megjelenítés egy adott vetületéhez. Például, az első médiafájl tartalmazhatja az elsődleges képadatot, a második a francia nyelvű hangadatot, egy harmadik pedig az angol nyelvű feliratozást. A médiafájlok az MXF fájlformátum egyszerűsített profilját használják.

A **Composition Playlist** (CPL), azaz kompozíciós lejátszólista a médiafájlokat szekvenciaként elhelyezi a timeline-on, azaz egy grafikus idővonalon, valamint tartalmazza a szekvenciával kapcsolatos metaadatokat. A kompozíciós lejátszólista formátuma XML dokumentum.

A kompozíciós lejátszólista és az általa lehivatkozott médiafájlok együttesét nevezzük **kompozíció**nak (Composition), amely egy audiovizuális mesterpéldánynak felel meg.  Ennek a komponens-alapú megközelítésnek a fő előnye az, hogy az adott médiafájlt egy anyag több verziójában is újra lehet használni, ami lecsökkenti a mesterpéldányok létrehozásának és szállításának az idejét, valamint a tárolási költségeket, a minőség-ellenőrzési átfutásokat...

## **Melyek az IMF használati esetpéldái?**

-   **Inkrementális verzió készítése.** Első körben egy francia mesterpéldány készül, amely egy videofájlból és egy francia nyelvű audiofájlból áll. Valamivel később elkészül a mesterpéldány amerikai angol verziója, ami a videofájl egy jelenetének eltávolításával, valamint egy angol nyelvű audiofájl hozzáadásával jár. Az IMF alkalmazásával csupán a (kisméretű) CPL-t és az angol nyelvű audiofájlt kell előállítani, s nincs szükség minőségellenőrzésre, sem a (nagyméretű) videofájl újraküldésére.
-   **Többnyelvű verzió készítése.** A mesterpéldány több szinkronizált audiofájlt és feliratfájlt tartalmaz. Minden audiofájlhoz biztosítva van még többcsatornás verzió és sztereó verzió is. Az IMF verziókészítésre történő használata azt eredményezi, hogy a videofájl többféle audio- és felirat-fájllal együtt kerül továbbításra.
-   **Archiválás.** Az IMF-et tároló formátumként olyan mesterpéldányok helyett alkalmazzák, melyeket korábban ad hoc jelleggel, egyedi DPX vagy TIFF képfájlok és WAV audiofájlok adatgyűjteményeként tároltak. Az IMF használatával a kép- és audioeszközök közötti pontos szinkronizáció megmarad, és a metaadat könnyen hozzáadható. Az IMF bevált és szabványos technológiákra épül, széleskörűen dokumentált, és számos implementációja van. Ez kiváló tárolóformátummá teszi olyan mesterpéldányok archiválása esetén, melyek egyébként saját fejlesztésű vagy ad hoc módon lennének megőrizve.

## **Milyen típusú audiovizuális adattípusokat támogat az IMF?**

Az IMF az audiovizuális adattípusok széles körét támogatja, beleértve az alábbiakat:

-   **Kép.** 8K, veszteséges és veszteségmentes tömörítésű, nagy dinamikatartományú és széles színtartományú, sztereoszkópikus 3D…
-   **Hang.** 24 bites 48/96 kHz-es csatornaalapú hangformátum, immerzív hangzás...
-   **Feliratozás.** Az egész világra kiterjedő feliratok és hang feliratozások, támogatva a következőket: Unicode, kétirányú és vertikális szövegek, japán nyelvi elrendezés, sztereoszkópikus 3D…

## **Melyek az alapvető megkötések, alkalmazások és bővítőmodulok az IMF esetében?**

Az IMF az SMPTE által vezetett ST 2067 szabványcsaládban került meghatározásra.

Az IMF a következőkből épül fel: **alapvető megkötések** (core contraints), melyekhez minden IMF implementációnak igazodnia kell, a különféle, egyedi használati eseteket célzó **alkalmazások** (applications), valamint a **bővítőmodulok** (plug-ins), melyek számos alkalmazásban felhasználható, opcionális technológiát tartalmaznak.

Az alapvető megkötések célja az IMF szabvány túlnyomó részének a lefedése, hogy az alkalmazások és bővítőmodulok csak minimális módosítást vezessenek be. Ez idáig az alkalmazások közötti fő különbség a választott videó kodekek terén van.

Az alapvető megkötéseket az SMPTE ST 2067-2 (Core Constraints) szabvány írja le. Az alkalmazások között az egyik az Application #2E, amelyet az SMPTE ST 2067-21 részletez és a studió mesterpéldányok körét célozza. A bővítőmodulok egyike az Immersive Audio Bitstream Level 0 modul, melyet az SMPTE ST 2067-201 szabvány ír le, és az immerzív audióhoz nyújt támogatást.

## **Az IMF bővíthető?**

Az IMF könnyen bővíthető újfajta audiovizuális és metaadatokkal. A bővítmények szabvány szerintiek vagy felhasználó specifikusak is lehetnek. Valójában az SMPTE folyamatosan naprakészen tartja az IMF szabványcsaládot, alkalmazkodva a felmerülő használati esetekhez és javítva a hibákat. Bátorítják a közösség hozzájárulását és részvételét is ebben.

## **Melyek az IMF aktuális alkalmazásai?**

-   **Application #2E (SMPTE ST 2067-21).** Stúdió mesterpéldányok játékfilmekhez és epizódtartalmakhoz. Veszteséges és veszteségmentes JPEG 2000 képtömörítés SD SDR-től 4K (4096×3112) HDR felbontásig.
-   **Application #3 (SMPTE ST 2067-30).** Veszteséges képkódolás MPEG 4 Studio Profile alkalmazásával.
-   **Application #4 (SMPTE ST 2067-40)**. Digitális mozitartalom megőrzés. Veszteségmentes JPEG 2000 képkódolás 8K (8192×6224) XYZ formátumig.
-   **Application #5 (SMPTE ST 2067-50)**. Archiválás és továbbítás az ACES (Academy Color Encoding System) képreprezentáció alkalmazásával.
-   **Application DPP (ProRes) (SMPTE RDD 59-1).** Mesterpéldányok játékfilmekhez és epizódtartalmakhoz ProRes képkódolással UHD (3840×2160) HDR felbontásig.
-   **Application ProRes (SMPTE RDD 45).** ProRes képkódolás 4K HDR felbontásig.

## **Az IMF kompozíciók átadása és tárolása**

Átadás vagy tárolás céljából egy vagy több IMF kompozíció kerül összefűzésre egy **Delivery** fájlcsomagként. A Delivery több fájlból áll (l. alább), s ezek hálózati tárhelyen vagy fizikai adathordozón tárolhatók.

Az **Asset Map**, azaz eszköztérkép a Delivery csomagban lévő összes fájl helyét adja meg. Ezek a fájlok egy vagy több, logikusabb csomagba (IMP) sorolhatók. Az egyes IMP csomagok például igazodhatnak egy bizonyos beszerzési sorrendhez. Az IMP csomaghoz tartozó fájlokat a **Packing List** (PKL), azaz a csomagoló lista sorolja fel.

![](/assets/2021/03/pkl-1-1024x568.png)

Átadáshoz vagy tároláshoz egy vagy több IMF kompozíció kerül összefűzésre egy Delivery fájlcsomagként, amely több külön fájlból áll, és hálózati tárhelyen vagy fizikai adathordozón tárolható.

## **Mi az, amire az IMF nem való?**

Az IMF-et arra tervezték, hogy kész audiovizuális mesterpéldányok reprezentációját biztosítsa, és mint olyan, nem feltétlen alkalmas a következőkre:

-   gyártás alatt lévő audiovizuális tartalom reprezentációjára, ahol a tartalom egyes részei még hiányoznak, és/vagy nincsenek végleges formájukban. IMF mesterpéldányok viszont olyan lejátszólistából, mint pl. az OTIO, könnyedén létrehozhatók.
-   teljes végfelhasználói élmény reprezentációjára, amibe beletartoznak a nyelvi készletek, kiegészítő interaktív tartalmak, terjesztési csatorna-specifikus metaadatok, stb. Az IMF viszont jól használható olyan bevált gyakorlatokkal, mint amilyen a Common Metadata keretrendszer.
