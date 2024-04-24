import FacebookShare from "./facebook"
import TwitterShare from "./twitter"
import CopyButton from "./copy";


const base_url = process.env.BASE_URL_WEB || ""

export default function ShareButton({slug}: {slug:string}) {
    return (
        <div className="flex max-md:flex-col w-2">
            <FacebookShare slug={slug} url={base_url} />
            <TwitterShare slug={slug} url={base_url} />
            <CopyButton slug={slug} url={base_url}/>
        </div>
    )
}