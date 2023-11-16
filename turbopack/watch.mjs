import { watch } from 'node:fs'

watch('app/page.tsx', (e, filename) => {
  console.log(Date.now(), filename)
})

watch('app/Comp0.tsx', (e, filename) => {
  console.log(Date.now(), filename)
})
