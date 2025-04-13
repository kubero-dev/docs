---
slug: kubero-release-v3
title: Kubero v3 – Now Powered by NestJS 🚀
authors: [gianni]
tags: [kubero, release]
---
*Hey everyone,*

I'm excited to announce that Kubero v3 is officially out! 🎉

This release comes with a major internal overhaul — we've refactored the entire backend and migrated from Express.js to NestJS. **All features from v2 are migrated and still available.**

## Why the switch to NestJS?
While Express served us well in v1 and v2, NestJS brings a lot to the table that helps Kubero grow into a more scalable and maintainable platform:

- Modular architecture: NestJS encourages a more structured, modular codebase, making it easier to manage features, dependencies, and scale the app. It makes it easier for contributors to dive in and build with us.

- Improved security: Kubero uses now JWT tokens for authentication, which are more secure and easier to manage than the previous session-based approach.

- Community & Ecosystem: NestJS has a thriving community and integrates well with a lot of other tools we’re already using (passport.js).

This update sets the stage for bigger features in the future like role based access and team structures.

As always, Kubero remains open-source and community-driven. Donating this projet to CNCF is still on the roadmap to ensure its longevity and sustainability.

## Upgrade Notes
- There should be no issues upgrading. In case you are using the CLI make sure to update it as well.
- In case you are using the api, make sure to use the new paths

Would love to hear your feedback, questions, or thoughts. Thanks for being part of the journey!