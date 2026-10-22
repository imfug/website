---
title: 'New edition: Timecode Best Practices'
date: '2020-05-12 22:22:35'
categories:
  - Announcement
banner: /assets/2020/05/no-timecode-melissa-lemieux-1-scaled.jpg
---

The UG has published a new version of its timecode best practices.

[https://www.imfug.com/TR/timecode-in-imf/](/assets/2020/11/imfug-001-bp-timecode-in-imf.pdf)

Based on feedback from users and implementers, timecode tracks are now prohibited in IMF Track Files:

-   processors that create Track Files **shall not emit** MXF Timecode tracks in any IMF Track File.
-   processors that validate Track Files **shall warn** but not reject an IMF Track File if it contains an MXF Timecode track.
-   In all other cases, processors **shall ignore** MXF Timecode tracks
