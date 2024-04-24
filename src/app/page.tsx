import {Blogcard} from "@/components/blogcard";
import Navbar from "@/components/navbar";
// import { getBlog } from "@/lib/blog";
import { getBlogREST } from "@/lib/blogRest";

export default async function Home() {
  const data = await getBlogREST()
  // console.log(data.blogs[0].Author.name);




  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex my-20 justify-center gap-10">
       {
        data.blogs.map((item: any) => {
         
          return (
            <Blogcard 
              // key={items.sys.id}
              // title={items.fields?.title}
              // image={items.fields.image.fields.file.url}
              // slug={items.fields.slug}
              key={item.id}
              title={item.title}
              image={item.image}
              slug={item.slug}
              author={item.Author.name}
            />
          )
        })
       }
      </div>
    </div>
  );
}


