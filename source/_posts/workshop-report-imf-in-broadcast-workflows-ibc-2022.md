---
title: 'Workshop report: IMF in broadcast workflows (IBC 2022)'
date: '2022-09-24 09:44:15'
categories:
  - Information
tags:
  - event
banner: /assets/2022/09/report-header.png
---

<p>The HPA IMF UG hosted a workshop at IBC 2022 where <a href="#attendees">34 stakeholders from the broadcasting community</a>, representing both users and suppliers, explored using the<strong> Interoperable Master Format (IMF) as the source content format in broadcast workflows</strong>. This report summarizes their discussions.</p>
<div><a href="/assets/2022/09/imf-broadcast-ibc-2022-workshop-report-v6.pdf">Download the report in PDF</a><a href="/assets/2022/09/imf-broadcast-ibc-2022-workshop-report-v6.pdf" download="">Download</a></div>
<h2>UHD Transition</h2>
<p>The broadcast community is facing a <strong>transition from HD to UHD programming</strong>. This transition requires a new program exchange format but also offers the opportunity to upgrade workflows so that they are more efficient today and more resilient to future requirements. For example, the time and cost involved with re-delivering complete programs when only a small part is defective is amplified by the larger size of UHD programs.</p>
<p>The <strong>Interoperable Master Format (IMF) is a worldwide standard for exchanging and archiving TV programs, movies, and ads</strong>. It is component-based: audio, video and access services files are stored separately and synchronized on a common timeline using a single playlist file.</p>
<h2>Strengths</h2>
<p><strong>IMF is deployed today</strong>, both in internal workflows and as a delivery format by large content providers and broadcasters: Netflix, BBC, Disney, Deluxe… Several attendees indicated that they are actively evaluating it.</p>
<p><strong>IMF supports UHD today</strong> and is implemented by a wide range of commercial and open-source tools, including <strong>mastering, QC and transcoding tools</strong>. For example, the recent addition of an IMF demuxer to the <strong>FFmpeg, Avisynth and VapourSynth open-source toolkits</strong> has significantly reduced the barrier to adopting IMF.</p>
<p><strong>IMF allows the re-use of components across deliveries and versions</strong>, reducing QC, making deliveries faster and requiring less storage for archives. One participant reported that they had <strong>saved 40,000₤ in QC costs</strong> alone by avoiding having to QC multiple times components shared by multiple deliveries. Component-based delivery and storage is also <strong>particularly attractive for cloud-based applications</strong> where bandwidth is limited.</p>
<h2>Challenges</h2>
<p>While the IMF technology is mature, <strong>there is still little operational familiarity with component-based media processing</strong> and IMF is often used as a flat linear mezzanine, creating an obstacle to realizing the full benefits of IMF. For example, while IMF carries rich metadata that allows the location of color bars or candidate commercial insertion points to be identified, the automated use of such metadata during playout is not common practice.</p>
<p>Participants highlighted that it is preferable to <strong>modify one's workflow to take advantage of component-based media</strong>, and thus of IMF, instead of shoehorning IMF into existing linear workflows. Such a transition should be planned over 2 to 3 years and account for education and onboarding.</p>
<p>It was also noted that <strong>several traditional playout and media server vendors do not support IMF</strong>, despite IMF using many of the technologies (playlist and MXF files) that they are familiar with.</p>
<h2>Opportunities</h2>
<p>It is unlikely that IMF will displace current formats and practices for HD. It was however emphasized that <strong><em>the future is not flat</em></strong>, and that <strong>IMF allows a broadcaster to both transition to UHD today and be prepared for future technologies</strong>. The future might include, for example, object-based media as identified by Ofcom, rights metadata or access services such as sign language.</p>
<p>Now is therefore a good opportunity for the broadcasting community to collaborate around developing best practices for component-based workflows and <strong>develop delivery specifications around IMF</strong>.</p>
<h2>Links</h2>
<figure><table><tbody><tr><td>IMF Product and services</td><td><a href="/suppliers/">https://www.imfug.com/suppliers/</a></td></tr><tr><td>IMF Open-source</td><td><a href="/open-source/">https://www.imfug.com/open-source/</a></td></tr><tr><td>IMF Explainer</td><td><a href="/explainer/">https://www.imfug.com/explainer/</a></td></tr></tbody></table></figure>
<h2 id="attendees">Attendees</h2>
<p>BBC, Colorfront, BFI, Ateliere, DI-Factory, Mr. MXF, NRJ, Netflix, Sky UK, Deluxe, Venera Technologies, Sky Italy, CST, Vidispine, Arte, Amazon, filter Media, Tedial, Black Photon, RTL, Marquise Technologies, Lum Invent, Aveco, ITV, Via Play, RAI, Fraunhofer IIS, Dolby, Rohde &amp; Schwarz, MediA Digital Nutty, BBC Studios.</p>
<h2>Acknowledgments</h2>
<p>Many thanks to Ateliere and Deluxe, who kindly sponsored the location and catering, and to our program committee: Andrew Dunne (chair), Julián Fernández-Campón, Kirk Bradford, Laurence Stoll, Mark Pascoe and Simon Thompson.</p>
<h2>Subscribe</h2>
