import Link from "next/link"
import Image from "next/image"
import cat from '../../image/cat.jfif'
export default function(){
    return(
        <div>
            <h1>This is about page</h1>
            <Link href="/">home</Link> <br></br>
         <Link href="/shop">shop</Link> <br></br>
         <Link href="/blogs">blogs</Link><br></br>
         <Image src={cat} alt="my cat is beautifull" height={200} width={200}/>
         <Link href="/comments">comments</Link> <br></br>
         <Link href="/likes">likes</Link>
        </div>
    )
}
