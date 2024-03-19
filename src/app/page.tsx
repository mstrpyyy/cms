import Blogcard from "@/components/blogcard";
import Navbar from "@/components/navbar";
import { getBlog } from "@/lib/blog";

export default async function Home() {
  const blogs = await getBlog()
  // console.log(blogs);



  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center">
       {
        blogs.map((items: any) => {
          console.log(items);
          return (
            <Blogcard 
              key={items.sys.id}
              title={items.fields?.title}
              image={items.fields.image.fields.file.url}
            />
          )
        })
       }
      </div>
    </div>
  );
}


