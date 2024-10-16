import Link from "next/link"
export default function blogs(){
    return(
        <div>
            <h1> Blog</h1>
            <h2> computer</h2>
            <p> computer have cpu means centeral processing unit mouse , keyboard.
            </p>
            <Link href="/shop">shop</Link> <br></br>
         <Link href="/blogs">blogs</Link><br></br>
         <Link href="/comments">comments</Link> <br></br>
         <Link href="/likes">likes</Link>
        </div>
    )
}