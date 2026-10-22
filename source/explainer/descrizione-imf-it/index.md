---
title: 'DESCRIZIONE: Interoperable Master Format (IMF)'
date: '2021-03-23 18:18:46'
layout: page
permalink: explainer/descrizione-imf-it/
---

<div><a href="/assets/2021/03/imf-explainer-v1a-IT-v2.pdf">Descrizione IMF (PDF)</a><a href="/assets/2021/03/imf-explainer-v1a-IT-v2.pdf" download="">Download</a></div>
<h2>Cos’è IMF?</h2>
<p>IMF è un formato di pacchetto di file<a href="#footnote_1">[1]</a> che semplifica la conservazione e la consegna di master audiovisivi destinati alle edizioni e alla distribuzione internazionale dei contenuti cinetelevisivi. IMF è particolarmente raccomandato per la trasmissione dei contenuti verso le principali piattaforme OTT globali.</p>
<p>IMF può essere adottato con qualsiasi tipo di documento audiovisivo master o semilavorato quali, ad esempio: lungometraggi; contenuti episodici (cd. “serie”); cortometraggi; pubblicità.</p>
<p><a href="https://doi.org/10.5594/SMPTE.OV2067-0.2018">IMF è uno standard internazionale <em>de jure</em> mantenuto da SMPTE</a>: è estendibile, aperto, utilizza tecnologie collaudate ed è oggetto di molteplici implementazioni, sia <em>open source</em> che commerciali.</p>
<h2>Perché IMF?</h2>
<p>Al giorno d’oggi, ogni contenuto cinetelevisivo viene regolarmente localizzato in più versioni diverse, che sono declinate con interpolazioni di una o più delle seguenti:</p>
<ul>
<li>cambiamenti di montaggio per l’adattamento con svariati requisiti locali;</li>
<li>sonoro parlato o doppiato in molteplici lingue;</li>
<li>sottotitoli e sottotitoli per non udenti;</li>
<li>tecnologie audiovisive (ad esempio: 4K, HDR, suono immersivo);</li>
<li>ri-edizioni e correzioni delle precedenti.</li>
</ul>
<p>Questo elevato numero di versioni non può più essere gestito mediante la vecchia abitudine di conservare e consegnare ciascuna sottoforma di un master audiovisivo a se stante (ad es. un file QuickTime, MP4, MXF; memorizzato su un nastro magnetico o digitale).</p>
<h2>Come funziona IMF?</h2>
<p>In IMF un master audiovisivo si compone di un pacchetto di file (ovvero <em>IMP</em>, cioè “pacchetto IMF”) contenente diversi file sotto descritti. Ciascun file del pacchetto rappresenta parti diverse del documento, con una propria tipologia, come descritto nella seguente figura.</p>
<figure><img src="/assets/2021/03/cpl-1-1024x439.png" alt=""></figure>
<p>Ogni <strong>file-traccia</strong> (<em>track file</em>) contiene un singolo tipo di “essenza” multimediale, corrispondente ad un singolo aspetto della presentazione. Ad esempio, un primo <em>track file</em> potrebbe coincidere con l’essenza video (cioè muta) principale; un secondo <a><em>track file</em></a> potrebbe contenere l’essenza del sonoro privo del parlato (altrimenti detto “musica &amp; effetti”); un terzo <em>track file</em> potrebbe contenere l’essenza audio con i soli dialoghi nella lingua originale; i successivi <em>track file</em> potrebbero contenere i sottotitoli in varie lingue. Ciascun <em>track file</em> è rappresentato da un documento adottante un profilo base del formato di file MXF<a href="#footnote_2">[</a>2<a href="#footnote_2">]</a>.</p>
<p>Una “<strong><em>playlist</em></strong><strong> di composizione”</strong> (<strong>CPL</strong>, o <em>composition playlist</em>) è un piccolo file contenente i metadata per assemblare tutti i file-traccia di un IMP in una <em>timeline</em>. La CPL è un documento in formato XML.</p>
<p>La CPL e i file-traccia da lei referenziati costituiscono, nel gergo di IMF, una <strong>composizione</strong>, corrispondente a un’edizione di un singolo master audiovisivo.</p>
<p>Il beneficio principale di questo approccio modulare (cd. <em>component-based</em> in inglese) sta nella possibilità di riuso (e quindi di efficientamento) dei singoli file-traccia attraverso edizioni multiple di uno stesso contenuto, il che comporta una notevole riduzione di: tempi di masterizzazione; costi di conservazione; complessità del controllo qualità (QC).</p>
<h2>Quali sono i principali casi d’uso per IMF?</h2>
<ul>
<li><strong>Consegne incrementali.</strong> Viene consegnato un master in lingua originale che consiste di una traccia video e una sola traccia audio contenente i dialoghi in inglese. Successivamente, viene creata un’edizione del medesimo contenuto per il mercato francese, ottenuta rimuovendo una intera scena (per motivi, ad esempio, di censura) e del doppiaggio in francese. Usando IMF, per quest’ultima edizione, è sufficiente consegnare un pacchetto <em>incrementale</em> costituito da una nuova CPL e dalla sola traccia audio in francese (senza re-invio della traccia video), con un notevole efficientamento sia lato emittente (che non deve rimasterizzare né inviare tutto il contenuto da capo), che ricevente (non si riesegue il QC del video).</li>
<li><strong>Doppiaggio.</strong> Un master include diverse tracce audio e sottotitoli. Ciascuna traccia audio è ulteriormente declinata in più formati “discreti” (ad esempio multicanale e stereo). Usando IMF è possibile inviare un unico pacchetto di file con tutte le tracce multiple e alternative (i.e. audio e sottotitoli).</li>
<li><strong>Archiviazione/Conservazione.</strong> IMF è un formato d’elezione per sostituire master conservati precedentemente in pacchetti di file quali sequenze di fotogrammi TIFF, DPX o EXR, più il sonoro in formato WAV. Usando IMF (proprio mediante la sua CPL) viene conservata la relazione tra tutti questi file, archiviando perciò anche timeline sotto forma di metadata. IMF è inoltre un formato aperto, <em>de jure</em> ed estendibile, con diverse implementazioni in tutto il mondo. Questo lo rende ideale anche per la conservazione a norma e l’archiviazione a lungo termine.<a href="#footnote_3">[3]</a></li>
</ul>
<h2>Che tipi di essenze audiovisive sono supportate da IMF?</h2>
<p>IMF supporta un’ampia gamma di essenze audiovisive:</p>
<ul>
<li><strong>Immagine</strong>: 4K con o senza compressione con perdite, HDR/WCG (ampia latitudine di posa e colorimetria), stereoscopia (cd., impropriamente, “3D” steroscopico);</li>
<li><strong>Audio</strong>: sonoro a canali discreti campionati a 48kHz e 24 bit/campione; sonoro immersivo;</li>
<li><strong>Dialoghi</strong>: sottotitoli (anche per non udenti) con supporto per caratteri universali Unicode, testo con flusso orizzontale o verticale, tipografia giapponese; presentazione stereoscopica;</li>
</ul>
<h2>Come è standardizzato IMF e quali sono i software che lo usano?</h2>
<p>IMF è mantenuto e definito nella famiglia di standard <strong>ST 2067</strong> pubblicata dalla SMPTE (Società internazionale degli Ingegneri Cinetelevisivi).</p>
<p>IMF è organizzato in una serie di “vincoli base” (<strong><em>core constraints</em></strong>), cui tutte le implementazioni IMF devono conformarsi. Vi sono poi le “<strong>Applicazioni</strong>,” cioè profili di IMF che lo indirizzano tecnicamente verso specifici casi d’uso. Infine, i “<strong>plug-in</strong>,” contengono tecnologie facoltative impiegabili da diversi software.</p>
<p>L’obiettivo dei <strong><em>core constraints</em></strong> è rappresentare il nocciolo duro dello standard IMF, mentre le Applicazioni e i plug-in introducono solo minime variazioni. Di fatto, la distinzione tra diverse Applicazioni è dovuta principalmente alla scelta di diversi <em>codec</em> (e altri parametri tecnici) per le essenze audio-video dei documenti che compongono ciascun pacchetto IMF.</p>
<p>I <strong><em>core constraints</em></strong> sono definiti nello standard smpte ST 2067-2. Un’applicazione è l’“Application #2E,” che è definita nello standard ST 2067-21 e riguarda i master 4K per gli studi televisivi. Uno dei plug-in è invece per il flusso audio Immersive Audio Bitstream livello 0, definito nell’ST 2067-201, che aggiunge il supporto per una particolare tecnologia di audio immersivo.</p>
<h2>Si potrà “estendere” IMF in futuro?</h2>
<p>IMF è <em>già</em> estendibile con molteplici <em>codec</em>: tali estensioni possono a loro volta essere aperte, oppure proprietarie (ad es. Apple®ProRes® o Dolby®Vision™) e arbitrariamente definite dall’utente. In effetti, la SMPTE aggiorna costantemente la famiglia di standard IMF per adattarla ai differenti casi d’uso, alle nuove opportunità commerciali, così come mitigarne le eventuali criticità. Si aell’intera comunità di sviluppatori di contenuti di contribuire al miglioramento dello standard IMF.</p>
<h2>Quali sono le attuali Applicazioni IMF?</h2>
<ul>
<li><strong>Applicazione #2E (SMPTE ST 2067-21)</strong> — <em>Studio master</em> per contenuti cinematografici ed episodici; immagini con compressione JPEG2000 (con e senza perdite) in risoluzioni SD, HD e 4K (4096×3112), anche ad alta latitudine di posa (cd. <em>HDR</em>).</li>
<li><strong>Applicazione #3 (SMPTE ST 2067-30)</strong> — Immagini compresse con perdita mediante MPEG-4 con ‘Studio Profile’.</li>
<li><strong>Applicazione #4 (SMPTE ST 2067-40)</strong> — Conservazione di contenuto già masterizzato per il cinema digitale (cd. <em>DCDM</em> e <em>DCP</em>); immagini nel formato JPEG2000 (con e senza perdite), fino a 8K (8192×6224) in spazio-colore <strong>DCI </strong><em>X</em>’<em>Y</em>’<em>Z</em>’.</li>
<li><strong>Applicazione #5 (ST 2067-50)</strong> — Conservazione e scambio di contenuti con colorimetria ACES (<em>Academy Color Encoding System</em> – a sua volta codificato nella famiglia di standard <strong>SMPTE ST 2065</strong>).<a href="#footnote_4">[4]</a></li>
<li><strong>Applicazione DPP (SMPTE RDD 59-1)</strong> — Master per contenuti cinematografici ed episodici; immagini nel formato proprietario Apple® ProRes® (compresso con perdite), fino a 4K UHD (3840×2160) in HDR.</li>
<li><strong>Applicazione numero 6 (SMPTE ST 2067-60)</strong> — Workflow per programmi televisivi UHDTV&nbsp;che utilizzano il codec AVC.</li>
<li><strong>Application ProRes (SMPTE RDD 45)</strong> — Immagini nel formato proprietario Apple® ProRes® (compresso con perdite), fino a 4K UHD (3840×2160) in HDR.</li>
</ul>
<h2>Come vengono archiviate le composizioni IMF?</h2>
<p>Per la consegna e l’archiviazione, una o più composizioni IMF vengono combinate in una sola <strong>consegna</strong> (cd. <em>delivery</em> in inglese). Come illustrato in precedenza, una consegna consiste nell’invio telematico di più file (tutti i file del pacchetto), che possono a loro volta essere distribuiti su più dispositivi fisici (ad es. <em>hard disk</em>, memorie <em>flash</em>, dischi ottici, nastri LTO).</p>
<p>L’<strong>Asset Map</strong> fornisce un’indicazione della posizione <em>relativa</em> di un gruppo di file/documenti all’interno del filesystem. Questi file sono anche raggruppati in uno o più pacchetti logici (IMP). Ciascun IMP può, ad esempio, corrispondore ad un particolare ordine d’acquisto. La lista dei file/documenti associati a ciascun IMP è estratta dall’Asset Map e inserita in apposito “<strong>elenco di impacchettamento”</strong> (file <strong>PKL</strong>, o <em>packing list</em>).</p>
<hr>
<figure><img src="/assets/2021/03/pkl-1-1024x568.png" alt=""></figure>
<h2>Cosa <em>non</em> è IMF?</h2>
<p>IMF è disegnato per rappresentare contenuti audiovisivi finiti o semilavorati, perciò non è adatto nei seguenti casi:</p>
<ul>
<li>Contenuti ancora in corso di produzione, quando parti del contenuto potrebbero essere mancanti o con differenti gradi di trattamento non nella forma definitiva.<a href="#footnote_5">[5]</a></li>
<li>Esperienze utente (UX) complete e definite, quali applicazioni o altro contenuti interattivo multilingua; metadata specifici dei canali di distribuzione, ecc.<a href="#footnote_6">[6]</a></li>
</ul>
<hr>
<p id="footnote_1">[1] Si veda l’Allegato 2 (‘Formati di file e riversamento’) alle <em>Linee Guida sulla formazione, gestione e conservazione dei documenti informatici</em> pubblicate dall’Agenzia per l’Italia Digitale (AgID), ove IMF viene individuato come formato d’elezione per la conservazione a norma e l’archiviazione a lungo termine di contenuti audiovisivi professionali.</p>
<p id="footnote_2">[2] Si veda ancora l’Allegato 2 alle suddette Linee Guida AgID (di cui alla <a href="#footnote_1">nota 1</a>) per ulteriori dettagli sul formato di file MXF (sempre standard <em>de jure</em> mantenuto dalla SMPTE).</p>
<p id="footnote_3">[3] Come normativamente previsto, in Italia, per mezzo delle suddette Linee guida AgID.</p>
<p id="footnote_4">[4] Anche la colorimetria ACES è raccomandata per la conservazione di contenuti cinetelevisivi professionali, nelle suddette Linee Guida AgID di cui alla <a href="#footnote_1">nota 1</a>.</p>
<p id="footnote_5">[5] È comunque possibile creare pacchetti IMF a partire da timeline di semilavorati disponibili sotto forma di metadata OTIO (<strong>OpenTimelineIO</strong>).</p>
<p id="footnote_6">[6] IMF, tuttavia, è interoperabile con diversi framework di metadata, inclusi <strong>CM</strong> (<em>common metadata</em>).</p>
