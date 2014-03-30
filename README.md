
##Logging

FullStackBDD uses the excellent [bunyan]() logging library. The default log level is 'error' but you can set it with the environment variable 'FULLSTACK_LOG_LEVEL'

```FULLSTACK_LOG_LEVEL=debug```

A nice way to get output in the console is by running with the following command appended to your FullStackBDD commands.

``` | ./node_modules/bunyan/bin/bunyan -o short```

For example

```./bin/fullstackbdd-cucumber --features test/features/ --support test/ -b=chrome | ./node_modules/bunyan/bin/bunyan -o short```