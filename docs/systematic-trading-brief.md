# Systematic trading research brief

This file is a sanitised source brief for future portfolio updates. It describes the intended platform and must not be presented as production software without repository evidence.

## Research-platform objective

Convert market hypotheses into explainable signals and evaluate them without hiding look-ahead bias, transaction costs or portfolio constraints.

## Modular architecture

- Validated market data.
- Feature engineering.
- Normalised signal scoring.
- Candidate, near-miss and manual-review classifications.
- Portfolio construction.
- Transaction-cost-aware backtesting.
- Benchmark comparison.
- Risk controls.
- Dashboards and decision logs.
- Options and execution extensions.

## Intended factor categories

- Momentum.
- Valuation.
- Quality.
- Earnings and catalyst variables.
- Volatility measures.
- Liquidity measures.

## Backtest and risk requirements

- Explicit handling of look-ahead bias, survivorship bias, data revisions and timestamp conventions.
- Transaction costs, turnover, benchmark selection and liquidity constraints must be visible.
- Parameter sensitivity, out-of-sample discipline and near-miss analysis should be documented before performance language is used.
- Position, sector and exposure limits should be treated as first-class design constraints.

## Production-control principles

A trading system must be able to reject unsafe actions and leave an auditable decision trail. Intended controls include separation of research, signals, risk and execution; order-state management; pre-trade checks; position and cash accounting; reconciliation; logging; monitoring; and manual or automatic kill switches.

Do not imply live trading, broker connectivity, unattended automation or production deployment unless repository evidence clearly proves those claims.

## Limitations

Important limitations include look-ahead bias, survivorship bias, data revisions, factor crowding, parameter sensitivity, benchmark choice, turnover, transaction costs and limited out-of-sample evidence.

## Evidence-status rules

Use `Blueprint` if only this brief or a specification exists. Use `In development` only when partial code can be inspected. Use `Implemented` only when the stated modules are inspectable. Use `Validated` only when implementation evidence includes meaningful tests, assumptions, robustness analysis and interpretable outputs.
