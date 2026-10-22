---
title: 'DESCRIZIONE: Interoperable Master Format (IMF)'
date: '2021-03-23 18:18:46'
layout: page
permalink: explainer/descrizione-imf-it/
---

[Descrizione IMF (PDF)](/assets/2021/03/imf-explainer-v1a-IT-v2.pdf)[Download](/assets/2021/03/imf-explainer-v1a-IT-v2.pdf)

## Cos’è IMF?

IMF è un formato di pacchetto di file[\[1\]](#footnote_1) che semplifica la conservazione e la consegna di master audiovisivi destinati alle edizioni e alla distribuzione internazionale dei contenuti cinetelevisivi. IMF è particolarmente raccomandato per la trasmissione dei contenuti verso le principali piattaforme OTT globali.

IMF può essere adottato con qualsiasi tipo di documento audiovisivo master o semilavorato quali, ad esempio: lungometraggi; contenuti episodici (cd. “serie”); cortometraggi; pubblicità.

[IMF è uno standard internazionale _de jure_ mantenuto da SMPTE](https://doi.org/10.5594/SMPTE.OV2067-0.2018): è estendibile, aperto, utilizza tecnologie collaudate ed è oggetto di molteplici implementazioni, sia _open source_ che commerciali.

## Perché IMF?

Al giorno d’oggi, ogni contenuto cinetelevisivo viene regolarmente localizzato in più versioni diverse, che sono declinate con interpolazioni di una o più delle seguenti:

-   cambiamenti di montaggio per l’adattamento con svariati requisiti locali;
-   sonoro parlato o doppiato in molteplici lingue;
-   sottotitoli e sottotitoli per non udenti;
-   tecnologie audiovisive (ad esempio: 4K, HDR, suono immersivo);
-   ri-edizioni e correzioni delle precedenti.

Questo elevato numero di versioni non può più essere gestito mediante la vecchia abitudine di conservare e consegnare ciascuna sottoforma di un master audiovisivo a se stante (ad es. un file QuickTime, MP4, MXF; memorizzato su un nastro magnetico o digitale).

## Come funziona IMF?

In IMF un master audiovisivo si compone di un pacchetto di file (ovvero _IMP_, cioè “pacchetto IMF”) contenente diversi file sotto descritti. Ciascun file del pacchetto rappresenta parti diverse del documento, con una propria tipologia, come descritto nella seguente figura.

![](/assets/2021/03/cpl-1-1024x439.png)

Ogni **file-traccia** (_track file_) contiene un singolo tipo di “essenza” multimediale, corrispondente ad un singolo aspetto della presentazione. Ad esempio, un primo _track file_ potrebbe coincidere con l’essenza video (cioè muta) principale; un secondo _track file_ potrebbe contenere l’essenza del sonoro privo del parlato (altrimenti detto “musica & effetti”); un terzo _track file_ potrebbe contenere l’essenza audio con i soli dialoghi nella lingua originale; i successivi _track file_ potrebbero contenere i sottotitoli in varie lingue. Ciascun _track file_ è rappresentato da un documento adottante un profilo base del formato di file MXF[\[](#footnote_2)2[\]](#footnote_2).

Una “**_playlist_** **di composizione”** (**CPL**, o _composition playlist_) è un piccolo file contenente i metadata per assemblare tutti i file-traccia di un IMP in una _timeline_. La CPL è un documento in formato XML.

La CPL e i file-traccia da lei referenziati costituiscono, nel gergo di IMF, una **composizione**, corrispondente a un’edizione di un singolo master audiovisivo.

Il beneficio principale di questo approccio modulare (cd. _component-based_ in inglese) sta nella possibilità di riuso (e quindi di efficientamento) dei singoli file-traccia attraverso edizioni multiple di uno stesso contenuto, il che comporta una notevole riduzione di: tempi di masterizzazione; costi di conservazione; complessità del controllo qualità (QC).

## Quali sono i principali casi d’uso per IMF?

-   **Consegne incrementali.** Viene consegnato un master in lingua originale che consiste di una traccia video e una sola traccia audio contenente i dialoghi in inglese. Successivamente, viene creata un’edizione del medesimo contenuto per il mercato francese, ottenuta rimuovendo una intera scena (per motivi, ad esempio, di censura) e del doppiaggio in francese. Usando IMF, per quest’ultima edizione, è sufficiente consegnare un pacchetto _incrementale_ costituito da una nuova CPL e dalla sola traccia audio in francese (senza re-invio della traccia video), con un notevole efficientamento sia lato emittente (che non deve rimasterizzare né inviare tutto il contenuto da capo), che ricevente (non si riesegue il QC del video).
-   **Doppiaggio.** Un master include diverse tracce audio e sottotitoli. Ciascuna traccia audio è ulteriormente declinata in più formati “discreti” (ad esempio multicanale e stereo). Usando IMF è possibile inviare un unico pacchetto di file con tutte le tracce multiple e alternative (i.e. audio e sottotitoli).
-   **Archiviazione/Conservazione.** IMF è un formato d’elezione per sostituire master conservati precedentemente in pacchetti di file quali sequenze di fotogrammi TIFF, DPX o EXR, più il sonoro in formato WAV. Usando IMF (proprio mediante la sua CPL) viene conservata la relazione tra tutti questi file, archiviando perciò anche timeline sotto forma di metadata. IMF è inoltre un formato aperto, _de jure_ ed estendibile, con diverse implementazioni in tutto il mondo. Questo lo rende ideale anche per la conservazione a norma e l’archiviazione a lungo termine.[\[3\]](#footnote_3)

## Che tipi di essenze audiovisive sono supportate da IMF?

IMF supporta un’ampia gamma di essenze audiovisive:

-   **Immagine**: 4K con o senza compressione con perdite, HDR/WCG (ampia latitudine di posa e colorimetria), stereoscopia (cd., impropriamente, “3D” steroscopico);
-   **Audio**: sonoro a canali discreti campionati a 48kHz e 24 bit/campione; sonoro immersivo;
-   **Dialoghi**: sottotitoli (anche per non udenti) con supporto per caratteri universali Unicode, testo con flusso orizzontale o verticale, tipografia giapponese; presentazione stereoscopica;

## Come è standardizzato IMF e quali sono i software che lo usano?

IMF è mantenuto e definito nella famiglia di standard **ST 2067** pubblicata dalla SMPTE (Società internazionale degli Ingegneri Cinetelevisivi).

IMF è organizzato in una serie di “vincoli base” (**_core constraints_**), cui tutte le implementazioni IMF devono conformarsi. Vi sono poi le “**Applicazioni**,” cioè profili di IMF che lo indirizzano tecnicamente verso specifici casi d’uso. Infine, i “**plug-in**,” contengono tecnologie facoltative impiegabili da diversi software.

L’obiettivo dei **_core constraints_** è rappresentare il nocciolo duro dello standard IMF, mentre le Applicazioni e i plug-in introducono solo minime variazioni. Di fatto, la distinzione tra diverse Applicazioni è dovuta principalmente alla scelta di diversi _codec_ (e altri parametri tecnici) per le essenze audio-video dei documenti che compongono ciascun pacchetto IMF.

I **_core constraints_** sono definiti nello standard smpte ST 2067-2. Un’applicazione è l’“Application #2E,” che è definita nello standard ST 2067-21 e riguarda i master 4K per gli studi televisivi. Uno dei plug-in è invece per il flusso audio Immersive Audio Bitstream livello 0, definito nell’ST 2067-201, che aggiunge il supporto per una particolare tecnologia di audio immersivo.

## Si potrà “estendere” IMF in futuro?

IMF è _già_ estendibile con molteplici _codec_: tali estensioni possono a loro volta essere aperte, oppure proprietarie (ad es. Apple®ProRes® o Dolby®Vision™) e arbitrariamente definite dall’utente. In effetti, la SMPTE aggiorna costantemente la famiglia di standard IMF per adattarla ai differenti casi d’uso, alle nuove opportunità commerciali, così come mitigarne le eventuali criticità. Si aell’intera comunità di sviluppatori di contenuti di contribuire al miglioramento dello standard IMF.

## Quali sono le attuali Applicazioni IMF?

-   **Applicazione #2E (SMPTE ST 2067-21)** — _Studio master_ per contenuti cinematografici ed episodici; immagini con compressione JPEG2000 (con e senza perdite) in risoluzioni SD, HD e 4K (4096×3112), anche ad alta latitudine di posa (cd. _HDR_).
-   **Applicazione #3 (SMPTE ST 2067-30)** — Immagini compresse con perdita mediante MPEG-4 con ‘Studio Profile’.
-   **Applicazione #4 (SMPTE ST 2067-40)** — Conservazione di contenuto già masterizzato per il cinema digitale (cd. _DCDM_ e _DCP_); immagini nel formato JPEG2000 (con e senza perdite), fino a 8K (8192×6224) in spazio-colore **DCI** _X_’_Y_’_Z_’.
-   **Applicazione #5 (ST 2067-50)** — Conservazione e scambio di contenuti con colorimetria ACES (_Academy Color Encoding System_ – a sua volta codificato nella famiglia di standard **SMPTE ST 2065**).[\[4\]](#footnote_4)
-   **Applicazione DPP (SMPTE RDD 59-1)** — Master per contenuti cinematografici ed episodici; immagini nel formato proprietario Apple® ProRes® (compresso con perdite), fino a 4K UHD (3840×2160) in HDR.
-   **Applicazione numero 6 (SMPTE ST 2067-60)** — Workflow per programmi televisivi UHDTV che utilizzano il codec AVC.
-   **Application ProRes (SMPTE RDD 45)** — Immagini nel formato proprietario Apple® ProRes® (compresso con perdite), fino a 4K UHD (3840×2160) in HDR.

## Come vengono archiviate le composizioni IMF?

Per la consegna e l’archiviazione, una o più composizioni IMF vengono combinate in una sola **consegna** (cd. _delivery_ in inglese). Come illustrato in precedenza, una consegna consiste nell’invio telematico di più file (tutti i file del pacchetto), che possono a loro volta essere distribuiti su più dispositivi fisici (ad es. _hard disk_, memorie _flash_, dischi ottici, nastri LTO).

L’**Asset Map** fornisce un’indicazione della posizione _relativa_ di un gruppo di file/documenti all’interno del filesystem. Questi file sono anche raggruppati in uno o più pacchetti logici (IMP). Ciascun IMP può, ad esempio, corrispondore ad un particolare ordine d’acquisto. La lista dei file/documenti associati a ciascun IMP è estratta dall’Asset Map e inserita in apposito “**elenco di impacchettamento”** (file **PKL**, o _packing list_).

* * *

![](/assets/2021/03/pkl-1-1024x568.png)

## Cosa _non_ è IMF?

IMF è disegnato per rappresentare contenuti audiovisivi finiti o semilavorati, perciò non è adatto nei seguenti casi:

-   Contenuti ancora in corso di produzione, quando parti del contenuto potrebbero essere mancanti o con differenti gradi di trattamento non nella forma definitiva.[\[5\]](#footnote_5)
-   Esperienze utente (UX) complete e definite, quali applicazioni o altro contenuti interattivo multilingua; metadata specifici dei canali di distribuzione, ecc.[\[6\]](#footnote_6)

* * *

<p id="footnote_1">[1] Si veda l’Allegato 2 (‘Formati di file e riversamento’) alle <em>Linee Guida sulla formazione, gestione e conservazione dei documenti informatici</em> pubblicate dall’Agenzia per l’Italia Digitale (AgID), ove IMF viene individuato come formato d’elezione per la conservazione a norma e l’archiviazione a lungo termine di contenuti audiovisivi professionali.</p>

<p id="footnote_2">[2] Si veda ancora l’Allegato 2 alle suddette Linee Guida AgID (di cui alla <a href="#footnote_1">nota 1</a>) per ulteriori dettagli sul formato di file MXF (sempre standard <em>de jure</em> mantenuto dalla SMPTE).</p>

<p id="footnote_3">[3] Come normativamente previsto, in Italia, per mezzo delle suddette Linee guida AgID.</p>

<p id="footnote_4">[4] Anche la colorimetria ACES è raccomandata per la conservazione di contenuti cinetelevisivi professionali, nelle suddette Linee Guida AgID di cui alla <a href="#footnote_1">nota 1</a>.</p>

<p id="footnote_5">[5] È comunque possibile creare pacchetti IMF a partire da timeline di semilavorati disponibili sotto forma di metadata OTIO (<strong>OpenTimelineIO</strong>).</p>

<p id="footnote_6">[6] IMF, tuttavia, è interoperabile con diversi framework di metadata, inclusi <strong>CM</strong> (<em>common metadata</em>).</p>
