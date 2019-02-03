


1. go to "C:\Program Files\MongoDB\Server\3.0\bin" on command line
2. Do not run mongo command. Run mongoexport command noted below.

-- Backup collection to JSON file

mongoexport --host [server name/ip] --port [port #] --db [db name] --collection [collection name] --username [user name] --password [password name] --out [json path & file name].json


