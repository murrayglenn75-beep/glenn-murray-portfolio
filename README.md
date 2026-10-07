# Glenn Murray — AI Systems & Forward Deployed Engineering

## 30-second overview

I am an **AI systems and product engineer focused on making AI useful without giving it unchecked authority**. I build production-oriented applications where deterministic software establishes identity, state, policy, evidence, and permissions before an AI model is allowed to influence an outcome.

This portfolio brings together my work in **agent security, applied AI, fintech, operations systems, adversarial testing, and full-stack product engineering**. Each flagship repository includes the implementation boundary, evidence of what was tested, and clear limitations rather than treating a demo as a production claim.


I build applied AI systems where **models can propose, but deterministic controls decide what is allowed to execute**.

My work focuses on secure agent execution, evidence provenance, auditable decision boundaries, adversarial testing, and production-oriented product engineering across Python and TypeScript.

## Flagship projects

### [AI Authority Kernel (AAK)](https://github.com/murrayglenn75-beep/ai-authority-kernel)
**Security-first authority enforcement for AI agents and tool execution.**

A deny-by-default execution boundary that separates model intent from executable authority. It uses narrowly scoped capabilities, independent verification, replay protection, audit receipts, brokered credentials, mTLS service boundaries, and fail-closed behavior.

**Engineering signals:** Python · authorization · agent security · OPA-style policy · SPIFFE-shaped identity · cryptographic audit · adversarial testing

---

### [Ethical Hacker](https://github.com/murrayglenn75-beep/ethical-hacker)
**Architecture-aware defensive security analysis for modern software and AI systems.**

A local-first scanner that builds a security graph from a real codebase, identifies risky attack paths, classifies findings by confidence, produces SARIF, and applies `PASS / WARN / FAIL` build gating.

**Engineering signals:** Node.js · AppSec · AI security · attack graphs · MCP/tool surfaces · SARIF · CI security gates

---

### [Fluxo](https://github.com/murrayglenn75-beep/fluxo)
**AI-native fintech sandbox with deterministic financial controls.**

A mobile-first fintech product sandbox covering Pix-style transfers, cards, budgets, goals, statements, QR request flows, local assistant summaries, and Android/iOS Capacitor builds. Financial state transitions use exact integer money handling, validation, duplicate protection, and explicit review steps.

**Engineering signals:** TypeScript · Next.js · fintech · Capacitor · mobile · deterministic ledger logic · GitHub Actions

---

### [Brain AI](https://github.com/murrayglenn75-beep/Brain-AI)
**Experimental epistemic-control architecture for AI agents.**

Research-oriented architecture for reasoning over uncertain or conflicting evidence while keeping model output separate from execution authority. The public repository contains architecture and selected validation evidence while security-sensitive core mechanisms remain private.

**Engineering signals:** AI evaluation · Bayesian evidence resolution · provenance · ambiguity handling · adversarial simulation · secure agent boundaries

---

### [Signet](https://github.com/murrayglenn75-beep/signet)
**Verified operations kernel with deterministic signals and hash-chained events.**

Explores deterministic operational state, tamper-evident event history, and AI narration over verified signals.

**Live demo:** https://signet-chi.vercel.app

## What I optimize for

- **Authority before autonomy** — models do not receive unrestricted execution power.
- **Deterministic state before AI narration** — critical state is computed and verified outside the model.
- **Evidence over claims** — tests, attack campaigns, audit records, and reproducible checks back engineering assertions.
- **Fail closed** — ambiguous authority, replay, malformed requests, and incomplete audit state block or quarantine execution.
- **Adversarial validation** — systems are tested against misuse, boundary failures, concurrency, poisoning, and privilege expansion.
- **Product delivery** — security architecture is paired with usable interfaces, APIs, dashboards, mobile builds, and deployment workflows.

## Core stack

**Languages:** Python · TypeScript · JavaScript · SQL  
**Application:** Next.js · Node.js · Supabase · Firebase · Vercel · Capacitor  
**AI systems:** LLM/agent architecture · RAG · tool execution · MCP · evaluation · prompt/security boundaries  
**Security:** authorization · provenance · audit chains · replay protection · workload identity · red teaming · SARIF  
**Engineering:** GitHub Actions · testing · architecture docs · reproducible verification · API design

## Current direction

I am especially interested in **Forward Deployed Engineering, Applied AI Engineering, AI Systems Engineering, Solutions Architecture, and AI Security** roles where AI must operate against real data, tools, APIs, users, and business constraints.

## Selected credentials

- Google AI Professional Certificate
- Claude Code in Action — Anthropic
- Google AI for App Deployment
- AI Agents with Model Context Protocol — Vanderbilt
- Google Prompting Essentials
- Google AI Essentials
- Stanford Online — Introduction to Statistics
- Duke — Data Science Math Skills

## Contact

- [LinkedIn](https://www.linkedin.com/in/glenn-patrick-murray/)
- [GitHub](https://github.com/murrayglenn75-beep)

> The repositories above distinguish between demonstrated behavior, experimental validation, and production claims. Where a project is a sandbox or research system, its README states that boundary explicitly.
