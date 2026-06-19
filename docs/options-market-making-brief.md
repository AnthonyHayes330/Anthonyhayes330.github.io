# Options market-making brief

This file is a sanitised source brief for future portfolio updates. It is a specification-level record unless repository evidence proves implementation.

## Project question

How should an options market maker translate model fair value into inventory-aware quotes while managing Greek exposure and hedging costs?

## Intended architecture

- Geometric Brownian motion baseline model.
- Black-Scholes call and put pricing.
- Option bounds and numerical sanity checks.
- Greeks: delta, gamma, vega, theta and rho.
- Implied-volatility inversion.
- Volatility smiles and surfaces.
- Risk-adjusted bid and ask quoting.
- Inventory-sensitive spread adjustments.
- Portfolio-level Greeks.
- Delta hedging.
- Simulated client order flow.
- Transaction costs.
- P&L attribution.
- Risk limits.
- Volatility-spread research extension.

## Model assumptions

- Constant-volatility GBM is a baseline, not evidence of market realism.
- Continuous paths and normally distributed log returns exclude jumps and several observed market behaviours.
- Hedging is discrete in any practical simulation.
- Order flow, calibration and transaction costs require explicit assumptions or data.
- No low-latency exchange environment should be claimed unless implementation evidence proves it.

## Minimum viable project evidence

A credible MVP would include inspectable pricing and Greeks code, numerical sanity checks, implied-volatility inversion tests and a simple documented simulation that separates pricing output from trading P&L.

## Stronger extensions

- Volatility-surface diagnostics and calibration sensitivity.
- Inventory-aware quote adjustment experiments.
- Delta-hedging simulation with transaction costs.
- Portfolio Greek limits and risk-gate behaviour.
- P&L attribution that separates spread capture, inventory movement, hedging error and transaction costs.

## Risks and limitations

Do not invent profitability, Sharpe ratios, execution quality, latency, live trading, model accuracy or completed functionality. Make the central limitation clear: pricing-model output is not the same as realised trading P&L.

## Evidence-status rules

Use `Blueprint` if only this brief or a specification exists. Use `In development` only when partial code can be inspected. Use `Implemented` only when the stated modules are inspectable. Use `Validated` only when implementation evidence includes meaningful tests, assumptions, robustness analysis and interpretable outputs.
