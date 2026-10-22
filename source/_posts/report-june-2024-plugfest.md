---
title: 'Report: June 2024 Plugfest'
date: '2024-09-08 11:20:04'
categories:
  - Information
tags:
  - event
banner: /assets/2024/09/group-photo.jpg
---

The IMF UG held a plugfest on June 26, 2024 at Universal Studios in Los Angeles (USA), with remote participation through shared cloud storage and virtual breakout sessions. The plugfest gathered more than 20 participants from the content creator, user, and implementer communities.

Throughout the day, participants created, exchanged, and consumed IMF content. Cross-checking IMF content between implementations ensures the standard is supported and helps reveal potential improvements to both implementations and the standard.

This report summarizes the use cases studied during the plugfest.

## High Throughput JPEG 2000 (HTJ2K)

HTJ2K significantly improves the encoding and decoding speed of JPEG 2000, reducing processing costs and allowing real time playback on consumer desktops and laptops. This use case involved QC and playback of compositions that used HTJ2K-encoded video.

_Use case and source content provided by NBCUniversal and The Walt Disney Studios._

## Photon

[Photon](https://github.com/Netflix/photon) is an open-source library for parsing, interpreting and validating constituent files that make an Interoperable Master Package (IMP). These include: 

-   AssetMap ([SMPTE ST 2067-2](https://pub.smpte.org/doc/st2067-2/))
-   PackingList ([SMPTE ST 2067-2](https://pub.smpte.org/doc/st2067-2/))
-   Composition Playlist ([SMPTE ST 2067-3](https://pub.smpte.org/doc/st2067-3/))
-   IMF track files ([SMPTE ST 2067-5](https://pub.smpte.org/doc/st2067-5/))

Currently, Photon provides support for IMF Application #2E ([SMPTE ST 2067-21](https://pub.smpte.org/doc/st2067-21/)) and Application #5 ACES ([SMPTE ST 2067-50](https://pub.smpte.org/doc/st2067-50/)), and the Immersive Audio Bitstream (IAB) Plug-in ([SMPTE ST 2067-201](https://pub.smpte.org/doc/st2067-201/)).

For this plugfest, a pull request against Photon was created by Pierre-Anthony Lemieux that included additional checks for HTJ2K codestream header metadata. This build was used for the validation of the plugfest content.

_Test content created with Colorfront, MTI, Blackmagic Design, and Telestream technologies._

## No-Proxy Streaming

Using no-proxy HTJ2K MXF JavaScript player, files are read from an AWS S3 bucket with pre-signed URLs. The MXFs are played directly in the browser using JavaScript, there is no proxy involved. If connection is limited, it will fetch only the low-resolution wavelet information and show a low-resolution image during playback. Pausing playback will fetch all the data for that frame. For lossless IMFs, this is the lossless data, for lossy IMFs this is the high quality you would experience from a normal full decode.

Traditional IMF J2K part 1 encoding uses the CPRL progression order, for this player to work the no-proxy player needs HTJ2K with RPCL progression order. The no-proxy player is currently limited to 4:4:4 sources. While the 4:2:2 source will decode, it will only show the actual Y, and half-vertical with Cb and Cr that is associated with 4:2:2.

## Observations

The goal of this plugfest was to focus on creation and interchange of HTJ2K within IMF. The focus has increasingly pointed to the need for the community to have consistent ways of validating content.

1.  The plugfest showed that the lack of a common validation tool and/or test vectors introduces friction. The IMFUG should consider an effort to support a common validation strategy and/or toolset that includes codestream analysis.
2.  HTJ2K no-proxy streaming functions as expected when source materials are encoded with RPCL progression order. Some HTJ2K content was still found to have the CPRL and LRCP progression orders which did not work.
3.  Colorfront enhanced their validation toolset to include codestream inspection with comparison of the essence and metadata values. This helped the plugfest identify additional issues with submitted packages.
4.  Although most solutions have the ability to create HTJ2K IMF, errors were still present that included:
    -   CPRL and LRCP progression order
    -   Missing TLM marker
    -   Incorrect schema definition in CPL
    -   Invalid HTJ2K tile part count
    -   MXF essence and metadata values not matching

## Future plugfests

We are already working on future plugfests, possibly as early as November 2024. In the meantime, testing should never stop, and the content used during the plugfest remains available to all IMF UG members.

Join the UG today to get access to past plugfest content and help the community plan future plugfests!

## Acknowledgments

Many thanks to Pierre-Anthony Lemieux, Harvey Landy, Mike Krause, and Dave Deelo for their contributions to the program committee; to NBCUniversal who hosted the event; and to Amazon Studios who provides cloud services for the IMF UG.
