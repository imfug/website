---
title: 'Report: IMF UG Plugfest (December 2023)'
date: '2024-01-11 11:14:10'
categories:
  - Information
tags:
  - event
banner: /assets/2024/01/banner.png
---

The **IMF UG held a hybrid plugfest** on December 13 and 14, 2023, with physical locations in **Los Angeles (USA) and Cologne (Germany)**, and remote participation through shared cloud storage, virtual breakout sessions and instant messaging. The plugfest, the first since February 2020, gathered more than **50 participants from the content creator, user, and implementer communities**.

Over 2 days, **participants created, exchanged, and consumed IMF content**. Cross-checking IMF content between implementations ensures the standard is supported and helps reveal potential improvements to both implementations and the standard.

This report summarizes the use cases studied during the plugfest.

[Download the report in PDF](/assets/2024/01/imf-plugfest-2023-report.pdf)[Download](/assets/2024/01/imf-plugfest-2023-report.pdf)

## Lossless conversion from MOV to IMF

**IMF Application ProRes (SMPTE RDD 45) enables lossless conversion of existing ProRes QuickTime files to IMF.** For this use case, the ProRes video contained in MOV files was rewrapped into IMF Compositions without any decoding and re-encoding, demonstrating lossless conversion and eliminating generation losses.

_Use case and source content provided by BBC._

## Deduplication

Deduplication refers to the reuse of identical essence in multi-version titles, also known as "versioning". A typical ProRes workflow produces one flat MOV file for every version of a title, even if only a few frames differ between those versions. For this use case, five MOV files were provided: one was identified as the source version and the others as derived versions with different inserts, cuts and pre-rolls. From these five flat files, five IMF composition playlists, each corresponding to one of the versions, and a collection of video components were created. One of the components contained all the frames of the source version while the others contained only inserts and pre-rolls. **By allowing portions of the source version components to be reused across composition playlists, IMF achieved a 75% reduction in storage compared to the five flat files.**

_Use case and source content provided by RTL._

## Immersive Audio Bitstream (IAB)

**IAB is a mature format for encoding immersive sound fields as a collection of audio channels and audio objects.** This use case involved successful QC and playback of an IMF composition whose audio essence consisted solely of IAB essence and did not contain multichannel audio essence.

_Use case and source content provided by Sony Pictures Entertainment._

## Audio Definition Model (ADM)

**S-ADM (Serialized Audio Definition Model) and ADM (Audio Definition Model) are recent ITU-R Recommendations for interactive and immersive audio applications associating metadata with audio essence.** The use case involved creating IMF compositions starting from audio essence with S-ADM and ADM metadata wrapped in MXF files.

_Use case and source content provided by Fraunhofer IIS._

## High Throughput JPEG 2000 (HTJ2K)

**HTJ2K significantly improves the encoding and decoding speed of JPEG 2000**, reducing processing costs and allowing real time playback on consumer desktops and laptops. This use case involved QC and playback of compositions that used HTJ2K-encoded video.

_Use case and source content provided by Warner Bros Discovery, Sony Pictures Entertainment, NBC Universal, and Walt Disney Studios._

## ISXD

**Carrying metadata as a separate component allows its addition, modification, and removal without having to modify associated essence components.** This use case involved QC and playback of a composition that contained Dolby Vision metadata stored in a separate track file conforming to the Isochronous Stream of XML Documents (ISXD) plug-in.

_Use case and source content provided by Walt Disney Studios._

## Stereoscopic 3D

Stereoscopic 3D video has been a core, but infrequently exercised, capability of IMF since its inception. **This use case involved QC and playback of a Stereoscopic 3D composition.**

_Use case and source content provided by Walt Disney Studios._

## Lossless To Lossy Transcode

**IMF Application 2E supports both lossless and lossy JPEG 2000 video essence.** This use case involved the transcoding of lossless JPEG 2000 (Main level 7 Sublevel 0) compositions (HDR and SDR) to lossy JPEG 2000 (Main level 6 Sublevel 4 and Main level 6 Sublevel 3) compositions, which were subsequently subjected to QC and playback.

_Use case and source content provided by Sony Pictures Entertainment._

## Observations

As IMF matures, the focus has increasingly turned to operational improvements and incremental upgrades.

-   The plugfest highlighted the **importance of a common validation strategy**: different versions of the widely used Photon OSS validator performed differently when faced with newer use cases.
-   The plugfest was an opportunity to **experiment with new capabilities such as S-ADM and ADM**, which are expected to be leading topics of future plugfests.
-   Support for IMF across proprietary and open-source tools can always be improved. There is, for example, **an opportunity to expand support for IMF beyond multichannel audio and monoscopic video in the popular open-source FFMPEG toolkit**.

## Future plugfests

We are already working on future plugfests. In the meantime, testing should never stop, and the content used during the plugfest remains available to all IMF UG members.

**Join the UG today to get access to past plugfest content and help the community plan future plugfests!**

## Acknowledgments

Many thanks to David Gageos, Mike Krause, Wolfgang Ruppel, Brian Holter and Dave Deelo for their contributions to the program committee; to Walt Disney Studios and RTL, who hosted the event; and to Colorfront who sponsored lunch at the Los Angeles location.
