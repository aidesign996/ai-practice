# Technical Design

Maintain the effective implementation contracts and important rationale here. Read the adopted [product agreement](PRODUCT.md), its scope/version and visual originals; translate them into feasible contracts for faithful realization. Keep unresolved experience conflicts and feasible alternatives visible for the lead and product role to resolve before affected implementation changes the design. Ordinary engineering methods remain autonomous within the agreement.

## Constraints and design

- Target platforms, environment, and observed capability facts:
- Minimal architecture and meaningful tradeoffs:
- Data, interfaces, state ownership, and important recovery guarantees:
- Material permission, security, or compatibility constraints:

## Feasibility and verification

Record consequential unknowns and the smallest useful experiment if one is needed. For high-risk delivery behavior, identify the required stimulus and observation, when they must be available, and who verifies them. A tool starting successfully does not prove testability.

Describe the necessary checks, failure recovery, and rollback appropriate to the change. Do not require a finished product before development can begin.

The technical role owns meaningful changes to these contracts. Resolve affected product or environment dependencies before adoption. Internal implementation details may remain in code. Current environment suitability, delivered versions, and results are linked from [PROGRESS.md](../PROGRESS.md).
