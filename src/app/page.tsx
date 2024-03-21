import {Blogcard} from "@/components/blogcard";
import Navbar from "@/components/navbar";
import { getBlog } from "@/lib/blog";

export default async function Home() {
  const blogs = await getBlog()
  console.log(blogs[0].fields.body.content);



  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex my-20 justify-center gap-10">
       {
        blogs.map((items: any) => {
         
          return (
            <Blogcard 
              key={items.sys.id}
              title={items.fields?.title}
              image={items.fields.image.fields.file.url}
              slug={items.fields.slug}
            />
          )
        })
       }
      </div>
    </div>
  );
}


