const completionSpec: Fig.Spec = {
  name: "psql",
  description: "Psql is a terminal-based front-end to PostgreSQL",
  args: {},
  options: [
    {
      name: ["-a", "--echo-all"],
      description:
        "Print all nonempty input lines to standard output as they are read. (This does not apply to lines read interactively.) This is equivalent to setting the variable ECHO to all",
    },
    {
      name: ["-A", "--no-align"],
      description:
        "Switches to unaligned output mode. (The default output mode is aligned.) This is equivalent to pset format unaligned",
    },
    {
      name: ["-b", "--echo-errors"],
      description:
        "Print failed SQL commands to standard error output. This is equivalent to setting the variable ECHO to errors",
    },
    {
      name: ["-c", "--command"],
      description:
        "Specifies that psql is to execute the given command string, command. This option can be repeated and combined in any order with the -f option. When either -c or -f is specified, psql does not read commands from standard input; instead it terminates after processing all the -c and -f options in sequence",
      args: {
        name: "command",
        description:
          "A command string that is completely parsable by the server (i.e., it contains no psql-specific features), or a single backslash command. Thus you cannot mix SQL and psql meta-commands within a -c option. To achieve that, you could use repeated -c options or pipe the string into psql",
      },
    },
    {
      name: "--csv",
      description:
        "Switches to CSV (Comma-Separated Values) output mode. This is equivalent to \\pset format csv",
    },
    {
      name: ["-d", "--dbname"],
      description:
        "Specifies the name of the database to connect to. This is equivalent to specifying dbname as the first non-option argument on the command line. The dbname can be a connection string. If so, connection string parameters will override any conflicting command line options",
      args: {
        name: "dbname",
      },
    },
    {
      name: ["-e", "--echo-queries"],
      description:
        "Copy all SQL commands sent to the server to standard output as well. This is equivalent to setting the variable ECHO to queries",
    },
    {
      name: ["-E", "--echo-hidden"],
      description:
        "Echo the actual queries generated by d and other backslash commands. You can use this to study psql's internal operations. This is equivalent to setting the variable ECHO_HIDDEN to on",
    },
    {
      name: ["-f", "--file"],
      description:
        "Read commands from the file filename, rather than standard input. This option can be repeated and combined in any order with the -c option. When either -c or -f is specified, psql does not read commands from standard input; instead it terminates after processing all the -c and -f options in sequence. Except for that, this option is largely equivalent to the meta-command i. If filename is - (hyphen), then standard input is read until an EOF indication or q meta-command. This can be used to intersperse interactive input with input from files. Note however that Readline is not used in this case (much as if -n had been specified). Using this option is subtly different from writing psql < filename. In general, both will do what you expect, but using -f enables some nice features such as error messages with line numbers. There is also a slight chance that using this option will reduce the start-up overhead. On the other hand, the variant using the shell's input redirection is (in theory) guaranteed to yield exactly the same output you would have received had you entered everything by hand",
      args: {
        name: "filename",
        template: "filepaths",
      },
    },
    {
      name: ["-F", "--field-separator"],
      description:
        "Use separator as the field separator for unaligned output. This is equivalent to \\pset fieldsep or \\f",
      args: {
        name: "separator",
      },
    },
    {
      name: ["-h", "--host"],
      description:
        "Specifies the host name of the machine on which the server is running. If the value begins with a slash, it is used as the directory for the Unix-domain socket",
      args: {
        name: "hostname",
      },
    },
    {
      name: ["-H", "--html"],
      description:
        "Switches to HTML output mode. This is equivalent to \\pset format html or the \\H command",
    },
    {
      name: ["-l", "--list"],
      description:
        "List all available databases, then exit. Other non-connection options are ignored. This is similar to the meta-command list. When this option is used, psql will connect to the database postgres, unless a different database is named on the command line (option -d or non-option argument, possibly via a service entry, but not via an environment variable)",
    },
    {
      name: ["-L", "--log-file"],
      description:
        "Write all query output into file filename, in addition to the normal output destination",
      args: {
        name: "filename",
        template: "folders",
      },
    },
    {
      name: ["-n", "--no-readline"],
      description:
        "Do not use Readline for line editing and do not use the command history. This can be useful to turn off tab expansion when cutting and pasting",
    },
    {
      name: ["-o", "--output"],
      description:
        "Put all query output into file filename. This is equivalent to the command \\o",
      args: {
        name: "filename",
        template: "folders",
      },
    },
    {
      name: ["-p", "--port"],
      description:
        "Specifies the TCP port or the local Unix-domain socket file extension on which the server is listening for connections. Defaults to the value of the PGPORT environment variable or, if not set, to the port specified at compile time, usually 5432",
      args: {
        name: "port",
      },
    },
    {
      name: ["-P", "--pset"],
      description:
        "Specifies printing options, in the style of \\pset. Note that here you have to separate name and value with an equal sign instead of a space. For example, to set the output format to LaTeX, you could write -P format=latex",
      args: {
        name: "assignment",
      },
    },
    {
      name: ["-q", "--quiet"],
      description:
        "Specifies that psql should do its work quietly. By default, it prints welcome messages and various informational output. If this option is used, none of this happens. This is useful with the -c option. This is equivalent to setting the variable QUIET to on",
    },
    {
      name: ["-R", "--record-separator"],
      description:
        "Use separator as the record separator for unaligned output. This is equivalent to \\pset recordsep",
      args: {
        name: "separator",
      },
    },
    {
      name: ["-s", "--single-step"],
      description:
        "Run in single-step mode. That means the user is prompted before each command is sent to the server, with the option to cancel execution as well. Use this to debug scripts",
    },
    {
      name: ["-S", "--single-line"],
      description:
        "Runs in single-line mode where a newline terminates an SQL command, as a semicolon does",
    },
    {
      name: ["-t", "--tuples-only"],
      description:
        "Turn off printing of column names and result row count footers, etc. This is equivalent to \t or pset tuples_only",
    },
    {
      name: ["-T", "--table-attr"],
      description:
        "Specifies options to be placed within the HTML table tag. See \\pset tableattr for details",
      args: {
        name: "table_options",
      },
    },
    {
      name: ["-U", "--username"],
      description:
        "Turn off printing of column names and result row count footers, etc. This is equivalent to \t or pset tuples_only",
      args: {
        name: "username",
      },
    },
    {
      name: ["-v", "--set", "--variable"],
      description:
        "Perform a variable assignment, like the set meta-command. Note that you must separate name and value, if any, by an equal sign on the command line. To unset a variable, leave off the equal sign. To set a variable with an empty value, use the equal sign but leave off the value. These assignments are done during command line processing, so variables that reflect connection state will get overwritten later",
      args: {
        name: "username",
      },
    },
    {
      name: ["-V", "--version"],
      description: "Print the psql version and exit",
    },
    {
      name: ["-w", "--no-password"],
      description:
        "Never issue a password prompt. If the server requires password authentication and a password is not available from other sources such as a .pgpass file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password. Note that this option will remain set for the entire session, and so it affects uses of the meta-command connect as well as the initial connection attempt",
    },
    {
      name: ["-W", "--password"],
      description:
        "Force psql to prompt for a password before connecting to a database, even if the password will not be used. If the server requires password authentication and a password is not available from other sources such as a .pgpass file, psql will prompt for a password in any case. However, psql will waste a connection attempt finding out that the server wants a password. In some cases it is worth typing -W to avoid the extra connection attempt. Note that this option will remain set for the entire session, and so it affects uses of the meta-command connect as well as the initial connection attempt",
    },
    {
      name: ["-x", "--expanded"],
      description:
        "Turn on the expanded table formatting mode. This is equivalent to \\x or \\pset expanded",
    },
    {
      name: ["-X", "--no-psqlrc"],
      description:
        "Do not read the start-up file (neither the system-wide psqlrc file nor the user's ~/.psqlrc file)",
    },
    {
      name: ["-z", "--field-separator-zero"],
      description:
        "Set the field separator for unaligned output to a zero byte. This is equivalent to pset fieldsep_zero",
    },
    {
      name: ["-0", "--record-separator-zero"],
      description:
        "Set the record separator for unaligned output to a zero byte. This is useful for interfacing, for example, with xargs -0. This is equivalent to pset recordsep_zero",
    },
    {
      name: ["-1", "--single-transaction"],
      description:
        "This option can only be used in combination with one or more -c and/or -f options. It causes psql to issue a BEGIN command before the first such option and a COMMIT command after the last one, thereby wrapping all the commands into a single transaction. This ensures that either all the commands complete successfully, or no changes are applied. If the commands themselves contain BEGIN, COMMIT, or ROLLBACK, this option will not have the desired effects. Also, if an individual command cannot be executed inside a transaction block, specifying this option will cause the whole transaction to fail",
    },
    {
      name: ["-?", "--help"],
      description: "Show help about psql and exit",
    },
  ],
};

export default completionSpec;
