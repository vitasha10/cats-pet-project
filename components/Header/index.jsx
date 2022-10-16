export default function Header(props) {
    /*
    "className" but not class because it's React,
    in pure css and html it would be just "class"
    defaultValue because if you will put usual text in value u can't change that, you can try
    */
    return (
        <header>
            <input className='header-tag-search' defaultValue='some text' />
        </header>
    )
}