import { allPosts } from "content-collections"

export default function Home() {
  return (
    <main>
      <div>
        <h1>Neuportfolio</h1>
      </div>
      <div>
        <h2>Posts</h2>
        <ul>
          {allPosts.map((post) => (
            <li key={post._meta.path}>
              <a href={`/posts/${post._meta.path}`}>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
