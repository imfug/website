---
title: 'EXPLAINER: Interoperable Master Format (IMF)'
date: '2021-03-07 21:46:58'
layout: page
permalink: explainer/imf-explainer-en/
---

[IMF Explainer (PDF)](/assets/2021/03/imf-explainer-v1.pdf)[Download](/assets/2021/03/imf-explainer-v1.pdf)

## What is IMF?

IMF is a file-based media format that simplifies the delivery and storage of audio-visual masters intended for multiple territories and platforms. It is particularly well-adapted for delivery to today's global content platforms.

IMF works with any finished audio-visual masters, including long-form movies, episodic content, advertisements, short-form content…

[IMF is an international standard actively managed by SMPTE](https://doi.org/10.5594/SMPTE.OV2067-0.2018). It is extensible, uses proven technologies and benefits from many open source and commercial implementations.

## Why IMF?

Today, each audio-visual title is routinely offered in many versions, each combining:

-   an edit to conform to regional requirements
-   one or more languages
-   access technologies, including subtitles and captions
-   technical representations, including 4K, HDR and immersive sound
-   corrections to previous versions

Such a large number of versions cannot be efficiently tackled by the legacy practice of delivering each version as a separate linear audio-visual master, e.g., as a multiplexed QuickTime file or on tape.

## How does IMF work?

In IMF, an audio-visual master is split into its component parts, as illustrated below.

![](/assets/2021/03/cpl-1-1024x439.png)

IMF splits audio-visual masters into components parts: Track Files contain audio-visual essence while the Composition Playlist assembles the Track Files onto a timeline.

Each **Track File** contains a single kind of audio-visual essence corresponding to a single aspect of the presentation. For example, a first Track File might contain the primary video essence while a second might contain the French audio essence and a third the English captions. Track Files use a simplified flavor of the MXF file format.

The **Composition Playlist** assembles the Track Files onto a timeline and contains timeline-related metadata. The Composition Playlist is an XML document.

The combination of a Composition Playlist and the Track Files it references is called a **Composition** and corresponds to a single audio-visual master.

The primary benefit of this component-based approach is that a given Track File can be reused across multiple versions of a title, resulting in reduced mastering and delivery times, storage costs, quality control passes…

## What are sample use cases for IMF?

-   **Incremental delivery.** A French master consisting of a video track and a French audio track is initially delivered. Sometime later, an US English version of the master is created, resulting in the removal of a scene in the video track and the addition of an English audio track. Using IMF, only the (small) Composition Playlist and the English audio track need to be delivered, removing the need to QC and re-send the (large) video track.
-   **Multi-language delivery.** A master includes several dubbed audio tracks and subtitles tracks. Each audio track is further offered in both multichannel and stereo versions. Using IMF for delivery results in a single video file being transmitted alongside multiple audio and timed text files.
-   **Archive.** IMF is used as a storage format to replace masters previously stored as an ad-hoc collection of individual DPX or TIFF image files and WAV audio files. By using IMF, the precise synchronization between the image and audio assets is preserved, and metadata can be readily added. IMF is based on proven and standard technologies, is extensively documented, and has multiple implementations. This makes it an excellent storage format to archive masters that would otherwise be preserved in a proprietary or ad hoc fashion.

## What kinds of audio-visual essence does IMF support?

IMF supports a wide range audio-visual essence, including:

-   **Image.** 4K, lossy and lossless compression, high-dynamic range and wide color gamut, stereoscopic 3D…
-   **Audio.**  24-bit 48 kHz channel-based sound, immersive sound…
-   **Timed text.** Worldwide subtitles and captions, including support for Unicode, bidirectional and vertical text, Japanese language layout, high-dynamic range video, stereoscopic 3D…

## What are IMF core constraints, applications and plug-ins?

IMF is specified in the ST 2067 family of standards managed by SMPTE.

IMF is organized into a set of **core constraints**, to which all IMF implementations are expected to conform, and several **applications**, which target specific use cases, and **plug-ins**, which contain optional technology that can be used across multiple applications.

The objective is for the core constraints to represent the bulk of the IMF standard, with applications and plugin introducing minimal variations. So far, the primary distinction between applications has been in their choice of video codecs.

The core constraints are specified in SMPTE ST 2067-2 (Core Constraints). One of the applications is Application #2E, which is specified in SMPTE ST 2067-21 and targets studio masters. One of the plugins is Immersive Audio Bitstream Level 0 Plug-in, which is specified in SMPTE ST 2067-201 and adds support for immersive sound.

## Is IMF extensible?

IMF can be readily extended with new kinds of audio-visual essence and metadata. Such extensions can be standard or user-specific. In fact, SMPTE continuously updates the IMF family of standards to match emerging use cases and fix bugs. Contribution and participation from the community is encouraged.

## What are the current IMF applications?

-   **Application #2E (SMPTE ST 2067-21).** Studio masters for feature and episodic content. Lossy and lossless image coding using JPEG 2000 from SD SDR to 4K (4096×3112) HDR. Now includes support for high-throughput JPEG 2000 (HTJ2K) and HLG colorimetry.
-   **Application #3 (SMPTE ST 2067-30).** Lossy image coding using MPEG 4 Studio Profile.
-   **Application #4 (SMPTE ST 2067-40)**. D-Cinema content preservation. Lossless image coding using JPEG 2000, up to 8K (8192×6224) XYZ.
-   **Application #5 (SMPTE ST 2067-50)**. Archival and exchange using the Academy Color Encoding System (ACES) image representation.
-   **Application #6 (SMPTE ST 2067-60)**. UHDTV program workflows in broadcasting stations using the AVC codec.
-   **Application DPP (ProRes) (SMPTE RDD 59-1).** Masters for feature and episodic content using ProRes image coding, up to UHD (3840×2160) HDR.
-   **Application ProRes (SMPTE RDD 45).** Image coding using ProRes image coding, up to 4K HDR.

## How are IMF Compositions delivered or stored?

For delivery or storage, one or more IMF Compositions are combined into a **Delivery**. As illustrated below, a Delivery consists of multiple files, which can be stored on the network or on physical media.

The Asset Map provides a location of all the files included in the Delivery. These files are grouped into one or more logical packages (IMP). Each IMP can, for instance, correspond to a particular purchase order. The list of files that belong to an IMP are listed in a **Packing List** (PKL).

![](/assets/2021/03/pkl-1-1024x568.png)

For delivery or storage, one or more IMF Compositions are combined into a Delivery, which consists of multiple distinct files, which can be stored on the network or on physical media.

## What are non-goals of IMF?

IMF is designed to represent finished audio-visual masters, as such it is not ideally suited to represent:

-   audio-visual content during productions, where parts of the content might be missing and/or not in its final form. IMF masters can however readily be created from playlist such as OTIO.
-   complete end-user experiences, which include language subsets, additional interactive content, metadata specific to a distribution channel, etc. IMF however works well with established practices, such as Common Metadata.
