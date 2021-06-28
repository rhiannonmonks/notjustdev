import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/button';

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
]

export default function Home() {
  return (
    <div className={""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <main className="p-5 max-w-screen-xl">
        {/* Hero */}
      <div  className="flex flex-col md:flex-row items-center my-10">
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
            <Button href="" text="Sign up"/>
          </div>
        </div>
      {/* TechStack */ }
      <div className="flex flex-row flex-wrap justify-center my-10">
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
      </div>
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
