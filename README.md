# clinic bubbleprof stream premature close reproduction

_Sometimes_ [`clinic`](https://www.npmjs.com/package/clinic) bubbelprof runs into an issue:

```
$ clinic bubbleprof --autocannon [ -c 10 -d 2 /] -- node server.js

Running 2s test @ http://localhost:3000/
10 connections

┌─────────┬──────┬──────┬───────┬───────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%   │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼───────┼─────────┼─────────┼───────┤
│ Latency │ 4 ms │ 8 ms │ 22 ms │ 26 ms │ 9.98 ms │ 5.58 ms │ 75 ms │
└─────────┴──────┴──────┴───────┴───────┴─────────┴─────────┴───────┘
┌───────────┬────────┬────────┬────────┬────────┬────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%  │ Avg    │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Req/Sec   │ 845    │ 845    │ 845    │ 1055   │ 950    │ 105     │ 845    │
├───────────┼────────┼────────┼────────┼────────┼────────┼─────────┼────────┤
│ Bytes/Sec │ 116 kB │ 116 kB │ 116 kB │ 145 kB │ 130 kB │ 14.4 kB │ 116 kB │
└───────────┴────────┴────────┴────────┴────────┴────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

2k requests in 2.06s, 260 kB read
[=== ] Analysing dataError: premature close
    at onclosenexttick (cwd/node_modules/end-of-stream/index.js:53:86)
    at processTicksAndRejections (internal/process/task_queues.js:79:11)
```

This repo is an attempt to consistently reproduce the issue to aid debugging.

## Reproduction

```bash
$ nvm use 12.16.1
$ git clone git@github.com:PixnBits/clinic-bubbleprof-stream-close-reproduce.git
$ cd clinic-bubbleprof-stream-close-reproduce
$ npm run reproduce
```
