---
title: '[REPORT] February 2026 IMF plugfest'
date: '2026-03-25'
categories:
  - Report
tags:
  - event
---

The IMF User Group held a hybrid plugfest on February 20, 2026 at Warner Bros in
Burbank, CA, USA, with remote participation through shared cloud storage and
virtual sessions. The plugfest gathered 13 participants from the content
creator, user, and implementer communities.

Participants created, exchanged, and consumed IMF content. Cross-checking IMF
content between implementations helps reveal potential improvements to both
implementations and the standard.

## Themes

The plugfest focused on three themes:

* [SMPTE ST 2067-21](https://pub.smpte.org/doc/st2067-21/) App 2E 5th edition (8K/UHD2)
* [SMPTE ST 2067-202](https://pub.smpte.org/doc/st2067-202/) (ISXD)
* [SMPTE ST 2067-201](https://pub.smpte.org/doc/st2067-201/) IAB Level 0 Plug-in
  revision, which adds the IAB Channel SubDescriptor, updates metadata, and
  requires a deviation from ST 377-1 (Index Stream Offsets), which was
  explored during the [August 2025 plugfest](/report-august-2025-imf-plugfest/)

## Process

Participants uploaded source content to a shared cloud bucket, created and
exchanged test IMPs, and validated them using an online instance of
[Photon](https://github.com/Netflix/photon). The online validator ran a special
branch of Photon that supports App 2E 5th edition
([https://github.com/Netflix/photon/pull/401](https://github.com/Netflix/photon/pull/401)).

## Highlights

* **App 2E 5th edition (draft).** The FCD ballot was scheduled to start shortly
  after the plugfest. One implementation produced IMPs without errors, one
  implementation did not signal the application correctly, and one
  implementation was able to play IMPs.
* **ISXD.** Testing targeted SMPTE ST 2067-202, and not SMPTE RDD 47. Four
  implementations demonstrated some level of support: two had no errors; one had
  no error with the CPL but relied on external tools to create ISXD Track Files;
  and one had a minor error ("a ContainerConstraintsSubDescriptor shall be
  present per ST 379-2").

## Next plugfest

Participants proposed holding the next plugfest around the SMPTE Media
Technology Summit (November 16–19, 2026), which offers more opportunities for
out-of-town attendees without the engineering commitments of a major trade show.
See the [Fall 2026 Plugfest](/fall-2026-plugfest/) announcement.

The UG thanks Warner Bros. for hosting the meeting and Amazon for hosting the
plugfest files.
