type Props ={
  title: string;
  url: string;
  alt_text: string
}

export const Gif = ({title, url, alt_text}:Props) => {
  return (
    <div className='card'>
      <img src={url} alt={alt_text} />
      <p>{title}</p>
    </div>
  )
} 
