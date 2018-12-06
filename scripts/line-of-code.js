const fs = require('fs')
const util = require('util')
const path = require('path')
const readline = require('readline')

const readdir = util.promisify(fs.readdir)

// global variable
const Count = {
  files: 0,
  blank: 0,
  code: 0,
  total: 0,
}
const CountSet = new Set()
const ignoreDirs = [
  'node_modules',
  'typings',
  'test',
  'logs',
  'run',
  '.vscode',
  'scripts',
]
function getBasePath(srcPath) {
  return path.join(__dirname, '..', srcPath || 'src')
}

async function statistics(filePath) {
  Count.files++
  return new Promise(((resolve, reject) => {
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity,
    })

    const fileCount = {
      filePath: path.relative(__dirname, filePath),
      blank: 0,
      code: 0,
      total: 0,
    }
    rl.on('SIGINT', () => reject())
    rl.on('line', (line) => {
      Count.total++
      fileCount.total++
      if (line.trim()) {
        Count.code++
        fileCount.code++
      } else {
        Count.blank++
        fileCount.blank++
      }
    }).on('close', () => {
      CountSet.add(fileCount)
      resolve(fileCount)
    })
  }))
}

async function statisticsDir(baseDir) {
  const scanedDir = await readdir(baseDir)
  await Promise.all(
    scanedDir.map(async (file) => {
      const filePath = path.join(baseDir, file)
      const extname = path.extname(filePath)
      if (ignoreDirs.includes(file) || file[0] === '.') return false
      if (fs.statSync(filePath).isDirectory()) {
        await statisticsDir(filePath)
      } else if (extname === '.js' || extname === '.jsx') {
        await statistics(filePath)
      }
      return true
    }),
  )
}

async function prettyPrint() {
  await statisticsDir(getBasePath('.'))
  console.table(Array.from(CountSet))
  console.log('Total:')
  console.table(
    [Count],
  )
}

prettyPrint()
