import { watch } from 'node:fs'

watch('src/app/page.tsx', (e, filename) => {
  console.log(Date.now(), filename)
})

watch('src/components/Comp0.tsx', (e, filename) => {
  console.log(Date.now(), filename)
})
