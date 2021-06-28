import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button';
import BlogCard from '../components/BlogCard';

const techLogos = [
  '/images/tech_logos/amplify.svg',
  '/images/tech_logos/aws.svg',
  '/images/tech_logos/graphql.svg',
  '/images/tech_logos/javascript.svg',
  '/images/tech_logos/mongodb.svg',
  '/images/tech_logos/next-js.svg',
  '/images/tech_logos/nodejs.svg',
  '/images/tech_logos/react.svg',
  '/images/tech_logos/typescript.svg',
];

const BlogPosts = [
  {
    id: '1',
    title: 'The Importance of Learning CSS',
    slug: 'the_importance_of_learning_css',
    image: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
  },
  {
    id: '2',
    title: 'The Importance of Learning CSS 2',
    slug: 'the_importance_of_learning_css_2',
    image: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
  }
] 

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <main className="p-5 max-w-screen-xl grid gap-12">
        {/* Hero */}
      <section  className="flex flex-col md:flex-row items-center">
         {/* Taglines */}
        <div className="flex-1 mb-5">
          <p className="text-xs text-secondary font-mono">Development | Code | Entrepreneurship</p>
      
          <h1 className="text-2xl my-3">I'm here to help you become a really good developer</h1>
          <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
    </div >
    { /* Video */ }
        <div className="flex-1 relative justify-center items-center pr-9 mb-10 w-full">
              <Image
                src="/images/video_img.png" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="profile image"
                layout="responsive"
              />
            <div className="absolute bottom-0 right-0 w-14 transform translate-y-9">
              <Image
                src="/images/brand_elements/pattern_4.svg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="profile image"
                layout="responsive"
              />
            </div>
          </div>
      {/* button */ }
          <div>
            <Button href="" text="Sign up" type="primary" />
          </div>
        </section>
      {/* TechStack */ }
      <section className="flex flex-row flex-wrap justify-center">
        {techLogos.map(logo => (
          <div className="relative w-10 h-12 m-3">
              <Image
              src={logo} // Route of the image fileesired size with correct aspect ratio
              alt="profile image"
              layout="fill"
              objectFit="contain"
            />
          </div>
          ))}
      </section>
      {/* Blog */}
      <section className="flex flex-col items-center">
        <h1 className="text-2xl">Blog</h1>
        <p className="text-xs text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
      {BlogPosts.map(post => <BlogCard post={post}/>)} 
      
      <Button text="See all posts" href="/blog" type='secondary' />
      </section>
  </main>


      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="border-opacity-90">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>  
  )
}
