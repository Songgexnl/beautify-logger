# beautify-logger
node beautifies output logs
# example
const Logger = require('beautify-logger');

Logger.info("test info!")

output result： 2024年7月15日 13:23:41 28616 [INFO] test info!

Logger.error("test error!")

output result： 2024年7月15日 13:23:41 28616 [ERROR] test info!

Logger.debug("test error!")

output result： 2024年7月15日 13:23:41 28616 [DEBUG] test info!
