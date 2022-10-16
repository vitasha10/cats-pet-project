//it's something like import math in python
import {useState} from "react";

export default function Header(props) {
    //by default, it's "some text", string
    const [someInputValue, setSomeInputValue] = useState("some text")
    /*
    "className" but not class because it's React,
    in pure css and html it would be just "class"
    defaultValue because if you will put usual text in value u can't change that, you can try
    */
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
            <input className='header-tag-search' value={someInputValue} onChange={(e) => setSomeInputValue(e.target.value)} />
            {/* we will show our input in some other place */}
            <p>{someInputValue}</p>
        </header>
    )
}