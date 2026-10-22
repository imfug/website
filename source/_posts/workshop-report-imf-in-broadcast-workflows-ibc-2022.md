---
title: 'Workshop report: IMF in broadcast workflows (IBC 2022)'
date: '2022-09-24 09:44:15'
categories:
  - Information
tags:
  - event
banner: /assets/2022/09/report-header.png
---

The HPA IMF UG hosted a workshop at IBC 2022 where [34 stakeholders from the broadcasting community](#attendees), representing both users and suppliers, explored using the **Interoperable Master Format (IMF) as the source content format in broadcast workflows**. This report summarizes their discussions.

[Download the report in PDF](/assets/2022/09/imf-broadcast-ibc-2022-workshop-report-v6.pdf)[Download](/assets/2022/09/imf-broadcast-ibc-2022-workshop-report-v6.pdf)

## UHD Transition

The broadcast community is facing a **transition from HD to UHD programming**. This transition requires a new program exchange format but also offers the opportunity to upgrade workflows so that they are more efficient today and more resilient to future requirements. For example, the time and cost involved with re-delivering complete programs when only a small part is defective is amplified by the larger size of UHD programs.

The **Interoperable Master Format (IMF) is a worldwide standard for exchanging and archiving TV programs, movies, and ads**. It is component-based: audio, video and access services files are stored separately and synchronized on a common timeline using a single playlist file.

## Strengths

**IMF is deployed today**, both in internal workflows and as a delivery format by large content providers and broadcasters: Netflix, BBC, Disney, Deluxe… Several attendees indicated that they are actively evaluating it.

**IMF supports UHD today** and is implemented by a wide range of commercial and open-source tools, including **mastering, QC and transcoding tools**. For example, the recent addition of an IMF demuxer to the **FFmpeg, Avisynth and VapourSynth open-source toolkits** has significantly reduced the barrier to adopting IMF.

**IMF allows the re-use of components across deliveries and versions**, reducing QC, making deliveries faster and requiring less storage for archives. One participant reported that they had **saved 40,000₤ in QC costs** alone by avoiding having to QC multiple times components shared by multiple deliveries. Component-based delivery and storage is also **particularly attractive for cloud-based applications** where bandwidth is limited.

## Challenges

While the IMF technology is mature, **there is still little operational familiarity with component-based media processing** and IMF is often used as a flat linear mezzanine, creating an obstacle to realizing the full benefits of IMF. For example, while IMF carries rich metadata that allows the location of color bars or candidate commercial insertion points to be identified, the automated use of such metadata during playout is not common practice.

Participants highlighted that it is preferable to **modify one's workflow to take advantage of component-based media**, and thus of IMF, instead of shoehorning IMF into existing linear workflows. Such a transition should be planned over 2 to 3 years and account for education and onboarding.

It was also noted that **several traditional playout and media server vendors do not support IMF**, despite IMF using many of the technologies (playlist and MXF files) that they are familiar with.

## Opportunities

It is unlikely that IMF will displace current formats and practices for HD. It was however emphasized that **_the future is not flat_**, and that **IMF allows a broadcaster to both transition to UHD today and be prepared for future technologies**. The future might include, for example, object-based media as identified by Ofcom, rights metadata or access services such as sign language.

Now is therefore a good opportunity for the broadcasting community to collaborate around developing best practices for component-based workflows and **develop delivery specifications around IMF**.

## Links

|  |  |
| --- | --- |
| IMF Product and services | [https://www.imfug.com/suppliers/](/suppliers/) |
| IMF Open-source | [https://www.imfug.com/open-source/](/open-source/) |
| IMF Explainer | [https://www.imfug.com/explainer/](/explainer/) |

## Attendees

BBC, Colorfront, BFI, Ateliere, DI-Factory, Mr. MXF, NRJ, Netflix, Sky UK, Deluxe, Venera Technologies, Sky Italy, CST, Vidispine, Arte, Amazon, filter Media, Tedial, Black Photon, RTL, Marquise Technologies, Lum Invent, Aveco, ITV, Via Play, RAI, Fraunhofer IIS, Dolby, Rohde & Schwarz, MediA Digital Nutty, BBC Studios.

## Acknowledgments

Many thanks to Ateliere and Deluxe, who kindly sponsored the location and catering, and to our program committee: Andrew Dunne (chair), Julián Fernández-Campón, Kirk Bradford, Laurence Stoll, Mark Pascoe and Simon Thompson.

## Subscribe
