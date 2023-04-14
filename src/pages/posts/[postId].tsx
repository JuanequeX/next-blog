import { useRouter } from "next/router"

const Post = () => {
  const router = useRouter();
  const {
    query: { postId },
  }  = useRouter()

  return (
    <div className="flex justify-center flex-col text-center">
      <h1>Single post page</h1>
      <h3>This is post { postId } </h3>
      <button className="rounded text-sm bg-indigo-600 p-3 mt-6"
      onClick={() => router.push("/posts")} >
        Volver
      </button>
    </div>
  )
}

export default Post
