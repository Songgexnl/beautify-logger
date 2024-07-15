# beautify-logger
node beautifies output logs
# 示例
const Logger = require('beautify-logger');

Logger.info("test info!")

输出结果： 2024年7月15日 13:23:41 28616 [INFO] test info!

Logger.error("test error!")

输出结果： 2024年7月15日 13:23:41 28616 [ERROR] test info!

Logger.debug("test error!")

输出结果： 2024年7月15日 13:23:41 28616 [DEBUG] test info!


# 更多
期待后续