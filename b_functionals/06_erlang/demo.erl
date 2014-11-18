-module(demo).
-export([start/0, ping/1, pong/0]).

ping(0) -> pong ! finished;

ping(N) -> pong ! {ping, self()},
           receive
               pong -> io:fwrite("PONG\n")
           end,
           ping(N - 1).

pong() -> receive {ping, PingID} ->
              io:fwrite("PING\n"),
              PingID ! pong,
              pong()
          end.

start() -> register(pong, spawn(demo, pong, [])),
           spawn(demo, ping, [3]).