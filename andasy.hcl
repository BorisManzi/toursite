# andasy.hcl app configuration file generated for toursite on Thursday, 16-Oct-25 15:59:55 CAT
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "toursite"

app {

  env = {}

  port = 8080

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "toursite"
  }

}
