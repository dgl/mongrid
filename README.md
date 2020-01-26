# mongrid

_mongrid_; n: my grid. monitoring grid.

## Goal

A simple monitoring UI, with a focus on graphing. Consider this somewhere
between a full Grafana instance and using /graph on Prometheus.

In particular this aims to be entirely client-side: host this somewhere and
access any Prometheus instances by URL, with no need to setup a server.

## Manifesto

- Small: keep this loading fast, able to handle lots of series.
- Simplicity: minimal set of features, if it can be done another way (e.g. in
  PromQL) we'll document that.
- Minimal legacy: works on latest stable browser versions, but likely will use
  modern ES and not use babel (to start with anyway) to keep development easy.
- Minimal use of JavaScript libraries/frameworks: uPlot for graphs, maybe some
  small DOM library, but for now nothing.
- No server component needed: Grafana can work clientless, but still needs
  server to get the UI loaded.

### Examples

- Thresholds on graphs, just do something like: `label_replace(vector(0.99), "threshold", "99p", "", "")`

### Anti-examples

- Multiple queries on one plot will be done, while you can do `metric1 or
  metric2` that doesn't allow for querying across prometheus instances.
