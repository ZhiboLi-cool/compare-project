import fs from 'node:fs'

let imports = ``
let renderCode = ``

for (let i = 0; i < 1000; i++) {
  imports += `import { Comp${i} } from './components/Comp${i}';\n`
  renderCode += `\t\t\t<Comp${i}/>\n`
  fs.writeFileSync(
    `src/components/Comp${i}.tsx`,
    `export function Comp${i}() {
  return <div>hello ${i}</div>
}`
  )
}

const code = `${imports}

export default function App() {
  return (
    <div>
${renderCode}
    </div>
  )
}
`

fs.writeFileSync('src/App.tsx', code)
