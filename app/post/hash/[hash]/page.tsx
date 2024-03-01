export default function Page({ params }: { params: { hash: string } }) {
    return <div>Post: {params.hash}</div>
  }