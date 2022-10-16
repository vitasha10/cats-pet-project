//someValue and setSomeValue called props
export default function Header({someValue, setSomeValue, setPictureText}) {
    return (
        <header>
            {/* e.target.value came from usual JS
                we pass some function to onChange

                functions:

                function name() {
                    ...
                }

                or

                const name = () => {
                    ...
                }

                or

                const name = () => ... (1 string)

                or if we don't need name

                () => {
                    ...
                }

                or () => ...
            */}
            <input className='header-tag-search' value={someValue} onChange={(e) => setSomeValue(e.target.value)} />
            {/* we will add button to change picture because we can't send api req for every changed symbol */}
            <buttom className='header-btn' onClick={() => {
                setPictureText(someValue)
            }}>Применить к картинке</buttom>
        </header>
    )
}