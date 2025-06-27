---
slug: kubero-release-v3
title: Kubero v3 – Now Powered by NestJS 🚀
authors: [gianni]
tags: [kubero, release]
---
*Hey everyone,*

I'm excited to announce that **Kubero v3.0.0 is officially out!** 🎉

This release marks a major internal overhaul — we’ve refactored the entire backend and migrated from Express.js to NestJS. **All features from v2 have been migrated and remain fully available.**

---

## Why the switch to NestJS?

Kubero was initially built as a Proof of Concept during Heroku's major outage in 2022. While Express served us well in v1 and v2, NestJS brings significant advantages that will help Kubero evolve into a more scalable, secure, and maintainable platform:

- **Modular Architecture**  
  NestJS encourages a well-structured, modular codebase, making it easier to manage features and scale. This also lowers the barrier for contributors to dive in and build with us.

- **Improved Security**  
  Kubero now uses **JWT tokens** for authentication, replacing the older session-based method. This improves both security and maintainability.

- **Simplified API**  
  The API has been redesigned to be more intuitive, with clearer endpoints and improved documentation.

- **Better Logging and Error Handling**  
  NestJS provides enhanced support for logging and centralized error handling out of the box.

- **Thriving Ecosystem**  
  The NestJS ecosystem, with its integration libraries and support, helps us provide powerful new features faster and more efficiently.

- **More Tests = More Stability**  
  We’ve added extensive Jest tests — the new codebase has **86% test coverage**, ensuring a more stable and reliable experience.

This update lays the groundwork for upcoming features like **role-based access control** and **team structures**.

## What about the frontend?
The frontend remains unchanged in this release. Kubero's UI is still the same clean, intuitive interface you're familiar with from v2. This means:

- No changes are required to your workflows or usage patterns.
- Your existing deployments, dashboards, and settings will look and behave the same.

We're continuing to maintain and refine the frontend, but our focus in v3 was on strengthening the backend foundation.


## Upgrade Notes

- **In-place upgrade**: Simply update the tag — all features and configurations are compatible.
- If you're using the CLI, make sure to update to version `3.0.0`.
- If you're integrating Kubero’s API into your own toolchain, note that the API paths have changed. See the [API documentation](https://demo.kubero.dev/api/docs) for details.

---

Kubero remains proudly **open-source and community-driven**. We’re still planning to donate the project to the CNCF to ensure its long-term sustainability.

Would love to hear your feedback, questions, or thoughts. Thanks for being part of the journey!
