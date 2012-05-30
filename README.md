Grace bindings for the Processing graphics library.

Take a look at example.grace for an example of how to use it.
The full interface is available as types in processing.grace.

To run an app, you'll need to set the gracelib argument correctly.
This involves including the location of the file you're running,
the processing JAR (in the lib directory), and the Minigrace Java
standard library. For example:

    minigrace --target java --gracelib .:grace-processing/lib/processing.jar:minigrace/java file.grace

