import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from "@/lib/wixDataFetcher"

export default async function Blog() {
  const blogPosts = await getBlogPosts(5);

  // Function to get the first 3 sentences of the content
  const getExcerpt = (content: string) => {
    const sentences = content.match(/[^\.!\?]+[\.!\?]+/g);
    return sentences ? sentences.slice(0, 3).join(' ') : content.slice(0, 200) + '...';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post._id}>
              <Image 
                src={post.imageUrl || "/images/default-blog.jpg"} 
                alt={post.title} 
                width={400} 
                height={200} 
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${post._id}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {new Date(post._createdDate).toLocaleDateString()}
                </p>
                <p className="line-clamp-3">{getExcerpt(post.content)}</p>
                <Link href={`/blog/${post._id}`} className="text-primary hover:underline mt-2 inline-block">
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

