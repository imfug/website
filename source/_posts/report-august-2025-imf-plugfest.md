---
title: '[REPORT] August 2025 IMF plugfest'
date: '2025-11-08 09:45:48'
categories:
  - Report
tags:
  - event
---

The IMF User Group held a plugfest on August 25, 2025 at Warner Bros in Burbank, CA, USA, with remote participation through shared cloud storage and virtual sessions. The plugfest gathered 17 participants from the content creator, user, and implementer communities.

Throughout the day, participants created, exchanged, and consumed IMF content. Cross-checking IMF content between implementations ensures the standard is supported and helps reveal potential improvements to both implementations and the standard. The following are selected highlights of the plugfest:

-   **Incorrect `ApplicationIdentification` .** One 8K App 2E Composition did not contain the `ApplicationIdentification` value defined in the PCD ([https://github.com/SMPTE/st2067-21/releases/tag/pcd-2025-06-17](https://github.com/SMPTE/st2067-21/releases/tag/pcd-2025-06-17)), which is required since earlier editions of App 2E do not support 8K image.
-   **CPL Marker validation in Photon.** Photon does not validate CPL Marker Virtual Track: Compositions that contain invalid Marker Virtual Tracks are not rejected ([https://github.com/Netflix/photon/issues/394](https://github.com/Netflix/photon/issues/394)).
-   **ASDCPLib bug re: header metadata in the file footer.** It was noted that ASDCPLib ignores Header Metadata in the File Footer, even if the File Header Partition is marked open and incomplete. ([https://github.com/cinecert/asdcplib/issues/158](https://github.com/cinecert/asdcplib/issues/158)).
-   **ASDCPLib index table deviation.** The plugfest verified that IMF implementations implement the ASDCPLib deviation ([https://github.com/cinecert/asdcplib/issues/155](https://github.com/cinecert/asdcplib/issues/155)). Attendees explored the tradeoff between achieving strict conformance with ST 377-1 versus the impact of IMF implementations.

The UG thanks Miles DelHoyo, Michael Smith and Warner Bros. for hosting the meeting and Amazon for hosting the plugfest files.
