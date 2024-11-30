import Image from 'next/image';
import Link from 'next/link';

export default function Card({cardDetails}) {
    const {image, title, description} = cardDetails;
    return <Link href="/article?id=10" className='p-4 hover:shadow-lg transition-shadow'>
        <Image src={image} width={400} height={400} alt={title} className='rounded-xl'></Image>
        <h2 className='font-bold mt-2'>{title}</h2>
        <p>{description}</p>
    </Link>
}