# Team Leader: How AI teams collaborate, correct course, and learn from experience

AI Design 996 · Design & practice · Updated September 13, 2026 · First published September 7, 2026

English · [繁體中文](ARTICLE.zh-Hant.md) · [简体中文](ARTICLE.md) · [Share a use case or suggestion](FEEDBACK.en.md)

[Read the formatted article on the website](https://aidesign996.github.io/ai-practice/article-team-leader.html)

**Team Leader is a way of organizing AI teamwork, delivered as a Skill: organize specialist work around the user's goal, improve results through feedback, bring experience into the next decision, and have the development lead follow actual use to keep improving the method.**

This article starts with the product goal and systems thinking, explains how responsibilities, cross-project collaboration, learning from experience, and method iteration connect and work, then uses a sharing practice and usage review to discuss how to begin, what the method costs, and where its limits remain.

## Product goal: Let the lead take responsibility for the whole job

When using AI for a project, users often carry three continuing responsibilities: watching progress and direction, relaying questions between projects, and explaining requirements they have already given. Individual steps may get done while the overall job still depends on the user repeatedly stepping in.

Team Leader aims to give the AI lead these continuing responsibilities. The user sets the goal and decides important tradeoffs. The lead understands that goal, organizes implementation and checks, contacts the appropriate specialist leads, and improves the work based on actual results.

The design connects four parts:

| Part | Problem to solve | Main mechanism |
| --- | --- | --- |
| Goals, responsibilities, and delivery | How does the work keep meeting the goal? | Define each role's contribution, find gaps in actual results, and organize corrections |
| Specialist work and cross-project collaboration | Who should do the work, and how do missing capabilities connect? | Divide work within a project; let project leads communicate and coordinate directly |
| Retaining and reusing experience | How can lessons from this task help the next one? | Keep conditions and reasons, retrieve by context, compare before applying, and revise from results |
| Supervising use and iterating the method | A design is written into the Skill—is it actually being carried out? | Combine discussion with observation, locate gaps, organize revisions, and verify adoption effects |

All four serve one product goal: **reduce repeated reminders, message relaying, and line-by-line checking, so the lead can take more responsibility and help the working method keep improving.**

The design and practice currently center on Astra in Codex. `SKILL.md` provides the entry point; `references/protocol.md` defines collaboration, delivery, and knowledge use; bundled templates hold project responsibilities, requirements, and records. The host application provides execution, file access, and communication between tasks. The model contributes understanding, judgment, and creativity; actual results determine whether the mechanisms work.

## Theory: Use balancing feedback to maintain direction and accumulated experience to improve judgment

The feedback concepts in *Thinking in Systems* are an important source for this design. Balancing and reinforcing loops describe different effects: the former uses feedback to reduce a gap from a goal; the latter strengthens a change already under way. See Meadows' [original discussion of feedback loops](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/).

### A balancing loop connects the goal, feedback, and action

In AI work, the user's goal provides the standard for judgment, the project output is the current state, and specialist roles carry out and correct the work. The lead examines actual results, identifies gaps, and coordinates the next round of action. The results of that action feed back into the process.

<p align="center"><img src="github-light-en-01.png" width="560" alt="Figure 1: The user's goal and actual project output inform the lead's judgment. The lead coordinates specialist execution and corrections, and results return as feedback."></p>

*Figure 1. B denotes a balancing loop. The goal continues to inform judgment, and the output of execution becomes feedback.*

The lead needs to see the actual result. To judge whether a website is usable, it should examine the pages and interactions. To judge whether an article is clear, it should read the whole piece and its illustrations. Completion reports, file counts, and check counts are only supporting evidence.

**Effective correction depends on finding the right gap, making the change, and examining the result again.**

### A reinforcing loop lets useful experience support later work

The intended accumulation works like this: practical work produces useful experience; experience improves the next judgment; new practice brings richer experience. Early exploration can also draw on existing understanding to propose and compare more worthwhile possibilities.

Accumulation needs selection and revision. Mistaken explanations, outdated requirements, and duplicate material can also be reinforced. Exploration and accumulated experience must therefore remain subject to the goal and actual results. This applies feedback concepts to the design of a working method; it is not yet a quantitative system dynamics model and does not establish that capability will keep growing automatically.

<p align="center"><img src="github-light-en-02.png" width="560" alt="Figure 2: Accumulated experience feeds directly into refinement and validation, helping form more reusable experience that adds to the accumulated knowledge."></p>

*Figure 2. R denotes a reinforcing loop: existing experience helps refinement and validation; the resulting useful experience adds to the accumulation.*

## Mechanism 1: Define responsibilities and connect exploration, implementation, and checks

**The user decides the goal and core tradeoffs. The lead is responsible for coordination and delivery. Specialists contribute results toward the shared goal.**

The lead first understands why the work matters and what a good result means, then decides which specialist work is needed. Each role receives a clear task, necessary context, and expected outcomes, while retaining room to raise questions, compare approaches, and choose implementation methods.

### Explore first, then implement the chosen direction accurately

When the product is still unclear, different approaches need comparing. When technical routes differ, their conditions, costs, and risks need explaining. The user decides important directions; the lead and relevant specialists proceed with routine implementation choices within their authorization.

<p align="center"><img src="github-light-en-03.png" width="560" alt="Figure 3: Explore candidates around the same goal, then choose an approach using the goal, constraints, and actual comparisons."></p>

*Figure 3. This diagram explains exploration and selection: open up possibilities, then connect the chosen approach to implementation.*

Once a direction is chosen, development must deliver the agreed design. Work that does not meet requirements returns to the relevant role for correction. The lead can raise objections and suggest better approaches, but cannot replace the user's goal or let an old case override a requirement that still applies.

### Organize work around specialist contributions

The complete team defines six responsibilities: the lead coordinates goals, collaboration, and delivery; environment setup, product design, technical design, development, and independent AI acceptance cover the specialist work.

<p align="center"><img src="github-light-en-04.png" width="420" alt="Figure 4: The lead coordinates five specialist responsibilities: environment setup, product design, technical design, development, and independent AI acceptance."></p>

*Figure 4. The numbers identify responsibilities; not every role needs to work in every round.*

Simple work can be completed by one person. When specialist collaboration is needed, use an appropriate existing owner first. Establish a complete new team only when necessary and authorized, and activate the roles relevant to each task.

In team mode, independent AI acceptance is performed by a role that was not the primary implementer; developers still conduct their own checks. The lead receives the findings, assesses their effect on the overall goal, and organizes necessary changes. The Skill's collaboration, delivery, and acceptance protocols define these responsibilities and handoffs.

## Mechanism 2: Let project leads collaborate directly

Division of work within a project explains how different specialists contribute to one result. Cross-project collaboration connects specialist leads who already exist—for example, a sharing lead asking the Skill's development lead about its design and usage conditions.

**The current lead remains responsible for the final delivery; collaborating leads own their respective specialist results.**

The process has four steps: identify the missing information or result; find the existing specialist lead and explain the purpose and questions; check and follow up on the response; use the answer in the current work and continue toward delivery.

<p align="center"><img src="github-light-en-05.png" width="560" alt="Figure 5: Project leads exchange questions and information directly as needed. Each project retains its own team, results, and knowledge."></p>

*Figure 5. Dashed lines indicate communication as needed. Each lead brings specialist judgment, while information retains a clear owner.*

Communication involves more than forwarding text. Two leads can contribute different perspectives: one asks whether the explanation is easy to understand; the other checks whether it is accurate and feasible. They need to discuss disagreements through concrete questions and evidence, then reconnect the outcome to the shared task.

This requires an application that supports communication between leads and access to the relevant information. The Skill defines how collaboration is organized; communication tools deliver messages. Adding the Skill text alone does not automatically connect other projects.

## Mechanism 3: Retain experience and bring it into decisions

Learning from experience has two parts: saving it and using it. Role principles define the starting point for judgment. Specific cases record how a principle was applied and what happened.

### Retrieve from the goal; revise from actual results

On receiving a task, the lead first recovers the user's goal, role responsibilities, and applicable requirements, then looks for cases relevant to the current problem. It compares the old case's conditions, reasons, and actual results before deciding to reuse, adapt, or set aside the old method.

<p align="center"><img src="github-light-en-06.png" width="470" alt="Figure 6: Goals and role responsibilities provide the standard; past cases provide reference material. Compare before acting, then use actual results to correct the current work and update the original experience."></p>

*Figure 6. The two return paths serve different purposes: correcting current work and revising experience for future use.*

**Using experience means borrowing the reasoning behind a past decision, then deciding what to do this time.**

For example, helping readers notice the main point is a goal; bold text and paragraph breaks are methods. If the point is buried, a little emphasis may help. If everything is emphasized, less bold text may be better. The same goal can lead to different methods under different conditions.

After the work, examine the result. If the problem remains, keep correcting the current output. If new conditions or lessons emerge, add them to the original case. Both user feedback and the AI's actual attempts can contribute; explanations that have not been verified should remain hypotheses.

### Give different kinds of information a stable home

The Skill's project knowledge protocol defines how information is read and updated; project files hold the specific content. These entry points link to one another. The lead needs to retrieve material relevant to the current problem, rather than loading everything into context every time.

| Content | Home | What it keeps |
| --- | --- | --- |
| Shared rules | `AGENTS.md` | Agreements about reading project information and collaborating. |
| Role responsibilities | `roles/` | Each role's responsibility and goal. |
| Applicable agreements | Product, technical, and acceptance documents | Confirmed requirements and decisions. |
| Case experience | `docs/METHODOLOGY.md` | An experience index linking methods, cases, and results. |
| Current status | `README.md`, `PROGRESS.md` | Unfinished work and the next step. |

**Applicable requirements must be followed within their scope. Optional methods and cases are assessed for their usefulness to the current task.**

A one-time requirement is followed for that task. Unrelated or duplicate content need not become experience records. New evidence should update the conditions and explanations in the original record. This preserves needed knowledge without letting the collection become increasingly cluttered.

## Mechanism 4: Supervise actual use and keep iterating the Skill

The earlier mechanisms define how work is organized and how experience is retained. Someone still needs to follow whether those designs are carried out. The lead responsible for Team Leader Skill development uses the method in its own work and also gathers usage problems, examines gaps, organizes revisions, and follows their effects.

**Use Team Leader to organize work, and use it to supervise and improve Team Leader itself.**

### Combine user feedback with actual work

The development lead can talk directly with users about where the method feels awkward. Within existing access, it can also inspect earlier conversations, work records, and outputs without first listing the exact checkpoints. The former provides the user's explanation; the latter helps show what normally happens in practice.

<p align="center"><img src="github-light-en-08.png" width="520" alt="Figure 8: The Team Leader Skill development lead learns from user discussion and observation of actual work. Both kinds of material come from project leads using the Skill."></p>

*Figure 8. Discussion and observation are two ways to gather evidence. A lead's account needs to be checked against actual behavior.*

For experience use, two questions matter: was useful experience retained, and did later similar work actually draw on it? The presence of a file or an acknowledgment that it was read does not by itself show that experience affected the decision. The conditions, action, and result need to line up.

This supervision requires the host application to provide access to relevant records and communication between leads, and it requires a clear follow-up assignment and suitable checkpoints. The Skill provides working agreements; execution still depends on the application and task arrangement. Installing files alone does not create continuous monitoring.

### Find the gap and reconnect revision to actual use

When a deviation appears, first locate it: correct an omitted effective requirement in execution; improve storage and retrieval if information is hard to find; revise wording or decision conditions if the rule is easy to misunderstand. Keep project-specific problems in the project and return shared-method problems to the Skill.

The development lead organizes the revision and checks, then—within authorization—has user projects install or update the complete Skill, read the applicable changes, and continue their original work. Observation and verification then return to the next revision:

<p align="center"><img src="github-light-en-09.png" width="560" alt="Figure 9: The user sets the goal and direction. The development lead organizes Skill revision, installation or update, and use; observation, verification, and feedback connect actual use to the next revision."></p>

*Figure 9. Three work stages form a loop; observation, verification, and feedback connect actual use to the next revision.*

Verification after an update has two levels. First, without prescribing each file to change, observe whether the lead can adjust the relevant project arrangements from the new rule. Then check in later real tasks whether those adjustments are actually used—for example, whether experience is retained and then actively considered in similar work.

**An active adjustment shows that the rule has begun to work this time; sustained good use still requires evidence from later work.**

One update acknowledgment or one success does not establish a long-term effect. Keep parts without a later usage opportunity as awaiting observation. Feed actual problems and adoption effects back into improvement instead of turning every deviation into one more rule.

## Practice: Applying the mechanisms while sharing a Skill

For this article, the user set the goal: help readers understand the Skill and get started. The sharing lead was to obtain information directly from the development lead.

| Part | What actually happened | Effect on the result |
| --- | --- | --- |
| Specialist collaboration | The sharing lead asked whether a reader could begin with one sentence; the development lead checked the design and usage conditions | The introduction clarified installation, activation, and communication prerequisites, then gave a simple way to hand over work |
| Goal feedback | The user pointed out dense text, unclear emphasis, and mismatches between text and diagrams | Paragraphing, selective bold text, and diagram revisions addressed the reading problems |
| Experience records | Role requirements and specific editing cases were saved separately and linked through an experience index | Goals, reasons, and outcomes were retained for later retrieval and comparison |

There are direct communication and editing records for this practice. It also exposed a limitation: some reading requirements were still missed and only corrected after the user raised them again.

Cross-project information gathering has happened, and experience has a place to be saved. Whether it will be retrieved reliably without prompting, and reduce reminders over time, still needs observation. The bold-text and paragraphing example above explains the decision method; it is not a controlled comparison of layout outcomes.

### Improve the Skill from problems in experience use

The design expects leads to retain and reuse experience, but usage reviews found that some work had genuine save-and-read actions without using the experience well for the current goal. Adding another sentence that says “retain experience” or “always read it” does not explain those gaps.

In one earlier review, the development side inspected existing records without first asking the observed leads to rewrite or correct them. The findings led later revisions to emphasize bringing experience into the current decision, looking again at the whole result after local changes, and returning to the genuinely unfinished work.

This shows how problems from use can enter the Skill revision process. Whether an update then produces sustained active adjustment and fewer reminders still needs later tasks to establish it; this limited evidence does not prove a long-term effect.

## After installation: How to get started

Give the [Team Leader project page](https://github.com/aidesign996/team-leader#start) to an AI with web and project-file access, and say:

> Follow the project instructions to install the complete Team Leader Skill from the latest formal release, then tell me which version was actually installed. If it is already installed, preserve project records and custom changes before updating it.

Select Team Leader in your project, then describe the work:

> Please take responsibility for this and keep it moving. Retain useful experience as we go; when something similar comes up, look it up and consider how to use it.

For an existing project, recover goals, results, existing roles, and unfinished work first. If you only have an idea, start by discussing needs and direction. When cross-project help is needed, identify the relevant project or lead.

A new release does not automatically update the local installation. After updating, have the existing lead read the applicable changes while preserving confirmed requirements and the point at which the original work should continue. Follow the project page for current installation, activation, and update instructions.

If you maintain a Skill, you can also tell its development lead:

> Follow how this Skill is actually used. Combine user feedback with actual work, identify which parts of the design are not being carried out, propose improvements, and follow the effect after the update.

Also state which leads may be contacted, which project records may be accessed, and what may be changed this time. Begin with existing projects and a concrete problem, then arrange further observation only when needed.

## Limits and vision: Improve the method through actual results

<a id="model-fit"></a>

### Model and environment boundaries

Current practice mainly uses Astra in Codex on Windows. Sol has been used in some specialist roles, but there has been no comparison between all-Astra and all-Sol teams under equivalent conditions.

Strong models also need clear, consistent goals and constraints. [OpenAI's Astra guidance](https://developers.openai.com/api/docs/guides/latest-model?model=gpt-6-astra) discusses instruction sensitivity, delegation, and proportionate verification. More rules do not automatically improve execution; actual behavior and results still need checking.

The method depends on the model following the process and on the application's file, communication, and task-management capabilities. Experience files do not retrain the model or guarantee that every requirement will always be retrieved and followed correctly.

<a id="usage-cost"></a>

### More collaboration also means more investment

Communication across roles, context retrieval, independent checks, and rework can increase time and usage costs. Simple tasks should use the smallest arrangement sufficient to meet the goal.

Usage supervision also has a cost: reading records, locating causes, revising rules, and verifying adoption all require investment. Focus checks on repeated problems, important results, or version updates, and reuse evidence that has not changed. Examine both whether the problem improved and whether the added checks created more burden.

In 0.5.23, when the user authorizes automatic allocation, the lead usually starts at `high`, with specialist effort matched to task complexity. Explicit user choices of model and effort take priority. Increase effort when needed, while reusing still-valid information and checks instead of repeatedly verifying unchanged content.

There is no reliable overall percentage for time or usage savings. More useful measures are whether results meet requirements, deviations decrease, the user needs fewer repeated reminders, and the improvement justifies the investment.

### Understand you better and become more capable through use

**The aim is to develop more mature judgment, smoother collaboration, and delivery that users can trust.**

Leads in different domains refine their experience through real work and collaborate directly when other expertise is needed. Users spend less time explaining basic requirements and more time discussing the current goal and result. Becoming “smarter” should show up in understanding intent, comparing conditions, and adapting methods.

**The user sets the goal and direction; the development lead continues to observe, verify, and improve.**

Self-iteration aims to reduce the user's burden of line-by-line checking and repeated correction by allowing actual use to shape the next version of the method. The Skill and collaboration approach are what iterate; the user continues to decide the goal and important tradeoffs. Improvement is established only by changes seen in real work.

Please leave a [comment below](FEEDBACK.en.md) or share your experience in the [GitHub discussion](https://github.com/aidesign996/ai-practice/discussions/1): what were you doing, how did it respond, where did you still have to step in, and what would work better? Useful methods and unsuccessful situations can both help us improve the Skill.

## References and implementation entry points

- Donella H. Meadows, *Thinking in Systems: A Primer*. This article applies feedback concepts to the design of an AI working method.
- Donella Meadows, [Leverage Points: Places to Intervene in a System](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), the original discussion of feedback, goals, and system interventions.
- [Team Leader project and installation guide](https://github.com/aidesign996/team-leader), [formal releases](https://github.com/aidesign996/team-leader/releases/latest), and [change history](https://github.com/aidesign996/team-leader/blob/main/CHANGELOG.md). The mechanisms described here are based on 0.5.23; check the current formal release when using it later.
- OpenAI, [GPT-6 Astra guidance](https://developers.openai.com/api/docs/guides/latest-model?model=gpt-6-astra). Model guidance and evidence of this Skill's practical effects are considered separately.
