import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#1c1c62] text-white">
      <div className="relative">
        <h1 className="text-5xl mb-8 font-serif tracking-tight">IdeationSphere</h1>
        
      </div>
      <div className="mt-5">
      <Image
   alt="alt text."
   src="https://media.licdn.com/dms/image/C5612AQF_FK4qQ0dLDA/article-cover_image-shrink_720_1280/0/1617031675113?e=2147483647&v=beta&t=GT8OkNsZCbmCzJZB41HY2jPNryGLtQM0ykfRBxdCfxc"
   width={300}
   height={200}
   
/>
</div>
      <div>
      <p className="max-w-3xl text-lg font-bold text-center mt-8">
        A brainstorming platform where you can propose ideas or implementations for the new products/services of the organization, improvise existing products, or suggest effective solutions to organizational challenges.
      </p>
      </div>
      <div><h2 className="italic mt-8">Grab your chance to get goodies and to be a part of our team!</h2></div>
    </main>
  );
}