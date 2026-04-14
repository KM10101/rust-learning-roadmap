# Roadmap

## Stage 1: Re-entry and foundations

Goal: get comfortable reading, running, and slightly modifying Rust code.

Focus on:

- cargo basics
- variables, functions, structs, enums
- pattern matching
- `Option` and `Result`
- ownership and borrowing basics
- modules and crates

Target outcome:

- run small Rust programs
- understand compiler feedback at a basic level
- solve simple exercises without panic

## Stage 2: Core model understanding

Goal: stop treating ownership as magic.

Focus on:

- moves vs borrows
- mutable and immutable references
- slices and strings
- collections
- error propagation with `?`
- traits and generics
- lifetimes at a practical level

Target outcome:

- explain why a borrow checker error happens
- choose between owned values and references more intentionally
- write medium-sized exercises with less trial and error

## Stage 3: Real small projects

Goal: build confidence through complete programs.

Focus on:

- CLI tools
- file IO
- parsing
- HTTP clients
- serialization with serde
- project organization
- tests

Target outcome:

- complete 3 to 5 small Rust projects
- ship working command-line tools
- understand common crate usage patterns

## Stage 4: Backend-oriented Rust

Goal: connect Rust to existing backend engineering instincts.

Focus on:

- async / await
- Tokio runtime
- Axum or Actix Web
- configuration and environment management
- error design
- logging and observability
- database integration

Target outcome:

- build a small backend service
- expose HTTP APIs
- structure project layers cleanly
- reason about async execution and shared state

## Stage 5: Production-grade improvement

Goal: move from learning projects to dependable engineering.

Focus on:

- performance profiling
- trait-based architecture
- concurrency patterns
- testing strategy
- refactoring toward idiomatic code
- reading mature open source Rust projects

Target outcome:

- feel capable of using Rust for serious tooling or service work
- know how to keep improving beyond beginner status
