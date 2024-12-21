  {/*import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getBlogPostById, getRelatedPosts } from '@/lib/wixDataFetcher';

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getBlogPostById(params.id);
  const relatedPosts = await getRelatedPosts(params.id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <header className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl">{new Date(post._createdDate).toLocaleDateString()}</p>
          </div>
        </header>

        <Image
          src={post.imageUrl || '/images/default-blog.jpg'}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-64 object-cover"
        />

        <div className="container mx-auto px-4 py-12">
          <div
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8">
            <Link href="/blog" className="text-primary hover:underline">
              &larr; Back to Blog
            </Link>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="bg-secondary/10 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost._id}>
                    <Image
                      src={relatedPost.imageUrl || '/images/default-blog.jpg'}
                      alt={relatedPost.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>
                        <Link
                          href={`/blog/${relatedPost._id}`}
                          className="hover:text-primary transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

*/}