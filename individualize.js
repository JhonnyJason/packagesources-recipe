
const pathModule = require("path")
const fs = require("fs")

const packagePath = pathModule.resolve(process.cwd(), "ressources", "package.json")
const package = require(packagePath)
const nameWithSources = pathModule.resolve(process.cwd())
const name = pathModule.basename(thingyPath).replace("-sources", "")
package.name = name
package.type = "module"
packageString = JSON.stringify(package, null, 2)
fs.writeFileSync(packagePath, packageString)
console.log("individualized packagesources!") 
