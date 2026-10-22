---
title: 'Workshop report: Better QC using IMF (IBC 2023)'
date: '2023-09-27 17:34:29'
categories:
  - Information
tags:
  - event
banner: /assets/2023/09/imf-ug-qc-workshop-ibc-2023.png
---

The HPA IMF UG hosted a workshop at IBC 2023 where 28 stakeholders from the media supply chain, representing both users and suppliers, explored using **quality control (QC) with the Interoperable Master Format (IMF)**. This report summarizes their discussions.

[Download the report in PDF](/assets/2023/09/imf-ug-workshop-report-qc-for-imf.pdf)[Download](/assets/2023/09/imf-ug-workshop-report-qc-for-imf.pdf)

## What is QC?

**QC ensures consistent consumer experiences, prevents technical failures, and avoids regulatory penalties.** QC involves testing a media asset against a list of requirements, ranging from objective, e.g., ensuring that the audio loudness level remains below a specified level, to subjective, e.g., detecting incorrect color conversions.

**Performing QC is costly.** QC involves complex operations on large media files and expert human review. It is therefore critical to avoid performing QC multiple times on the same media assets.

**Failing QC is costly**. Failing QC nearly always means human intervention, which does not scale, and redelivery, which takes time and incurs expenses**.** It is therefore critical to minimize QC failures.

## Minimizing QC by sharing assets across program versions

IMFallows the re-use of media assets across versions of a program. As such, **IMF makes it possible to avoid repeating QC on media assets that are shared across versions of a program.** This results in significant cost savings when, for example, a small part of a program is modified to correct an error or when multiple language versions have largely identical video content.

This, however, comes with challenges. **Tools must provide context is needed when performing QC on a new part of a program**: while the new part might pass QC on its own, it might not when considered with the rest of the program. For example, a video frame might have been duplicated where the new part meets the original program. It is also necessary to design workflows such that QC results on the original part of the program can be trusted when performing QC on new parts.

## Avoiding rejections from expected failures

Consider, for example, a program where a long silence is part of the storyline. Such a program will likely repeatedly fail QC tests designed to detect missing audio, potentially resulting in multiple rejections as the program moves across the supply chain. **QC tests that a program is expected to fail should therefore be captured as machine-readable data and as early as possible in the supply chain.** It is also critical that such expected-failure metadata remain synchronized with the program across the supply chain.

**IMF is uniquely positioned to be the source of expected-failure metadata**: such metadata is generated at mastering, where IMF is typically used, and IMF allows rich metadata to be synchronized with a program. **Additional specification work however remains to fully define the syntax of expected-failure metadata.**

## Automating QC using machine readable reports

Automation is impossible without standardization. **Today, QC reports are routinely shared in a non-machine-readable form**, e.g., as a PDF file, and using vendor-specific terminology. This makes it difficult to automate QC, keep QC data synchronized with the program, and trust QC data across the supply chain. Standardizing QC data is a non-trivial problem given the historical disparities in QC practices worldwide. **Efforts, such as EBU QC (https://tech.ebu.ch/qc), are underway to standardize QC tests.**

## Next steps

As the number of programs explodes worldwide, **IMF offers the opportunity to reduce QC costs by reusing assets across versions and being the source of QC data for the supply chain.** Challenges remain in standardizing QC data and designing workflows and tools that make use of it. **Get involved today with the HPA IMF UG to contribute to these efforts.**

## Acknowledgments

Many thanks to [Tedial](https://www.tedial.com/), who kindly sponsored the location and catering, and to our program committee: Fereidoon Khosravi (chair), Andrew Dunne, Andy Quested, Brian Holter, Harvey Landy, and Bruce Devlin.

## Attendees

Pixelogic Media Partners, Venera Technologies, BBC, EBU, Amazon Studios, Tedial, RTL, Marquise Technologies, Andy Quested, Mr. MXF, Lum::Invent, Netflix, MediaArea, Colorfront, Motion Picture Solutions, Deluxe, Sky UK, nomalab, BFI, Bitmax, Walt Disney Studios, Sky UK, Ateliere Creative Technologies, Dolby Laboratories, DI Factory.

## Subscribe
