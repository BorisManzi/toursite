# andasy.hcl app configuration file generated for tourismsite on Tuesday, 21-Oct-25 17:00:06 CAT
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "tourismsite"

app {

  env = {}

  port = 8080

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "tourismsite"
  }

}
