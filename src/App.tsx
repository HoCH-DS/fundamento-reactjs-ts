import { Header } from "./components/Header"
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'
import './global.css'


const posts: PostType[] = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/HoCH-DS.png',
          name: 'Caio Hoch',
          role: 'Developer',
      },
      content: [
          { type: 'paragraph',content: 'Fala galeraa 👋' },
          { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto de fundamentos React utilizando Vite, que fiz junto com a tutoria da Rocketseat. Com este desafio aperfeiçoei minhas habilidades sobre os conceitos mais importantes do React 🚀'},
          { type: 'link',content: 'https://github.com/HoCH-DS/fundamentos-reactjs-ts' },
      ],
      publishedAt: new Date('2024-06-25 10:00:00')
  },
  {
      id: 2,
      author: {
          avatarUrl: 'https://github.com/diego3g.png',
          name: 'Diego Rocketseat',
          role: 'Developer',
      },
      content: [
          { type: 'paragraph',content: 'Olá Pessoal' },
          { type: 'paragraph', content: 'Acabei de finalizar mais uma video aula'},
          { type: 'link',content: 'app.rocketseat.com.br' },
      ],
      publishedAt: new Date('2024-06-24 13:30:00')
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
