---
layout: home
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/59522309',
    name: '833M0L3',
    title: 'Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/833M0L3' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/153387687',
    name: 'Sunil Prasad',
    title: 'Tester',
    links: [
      { icon: 'github', link: 'https://github.com/sunilprregmi' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/86787475',
    name: 'Sujal Gurung',
    title: 'Tester',
    links: [
      { icon: 'github', link: 'https://github.com/dinesh-58' }
    ]
  },
  {
    avatar: 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg',
    name: 'LivingCornet694',
    title: 'Tester',
    links: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><title>Email</title><path d="M12 12.713l11.985-8.19c-.036-.022-6.278-4.188-11.985-4.188S.05 4.501.015 4.523L12 12.713zm0 2.034l-12-8.262V20h24V6.485l-12 8.262z"/></svg>'
        },
        link: 'mailto:the.books.ace@gmail.com',
      }
    ]
  },
]
</script>

# Contributors

People who helped this project by testing and providing information on the new NETTV hardwares and softwares

<VPTeamMembers size="small" :members="members" />