import { useState } from "react"

const App = () => {
    const person = {
        fname: "Demo",
        lanme: "Demo2",
        address: {
            city: "Chd"
        }
    }
    const { fname: chacha, address: { city } } = person
    const data = [1, 'demo', 3, 4, 5]
    const [uid, fnames] = data
    const dd = { ...person, fname: 'chacha', address: { city: 'bng' } }
    const { address, fname, lanme, ...cc } = person
    const data2 = [
        {
            title: 'Post1',
            desc: 'Description Here',
            cat: 'cat1',
            url: 'https://dummyimage.com/600x400/000/fff'
        },
        {
            title: 'Post2',
            desc: 'Description Here',
            cat: 'cat1',
            url: 'https://dummyimage.com/600x400/000/fff'
        },
        {
            title: 'Post22',
            desc: 'Description Here',
            cat: 'cat1',
            url: 'https://dummyimage.com/600x400/000/fff'
        },
        {
            title: 'Post3',
            desc: 'Description Here',
            cat: 'cat3',
            url: 'https://dummyimage.com/600x400/000/fff'
        },
        {
            title: 'Post4',
            desc: 'Description Here',
            cat: 'cat2',
            url: 'https://dummyimage.com/600x400/000/fff'
        },
    ]
    return (
        <>

            <button onClick={() => console.log(city, chacha, uid, cc, dd.address.city)}>Run</button>
            <p>Hello</p>
            {data2.filter(el => el.cat == 'cat1' || el.cat == 'cat2' || el.cat == 'cat3').map(({ title, desc, url, cat }, index) => (
                <div key={index + 1}>
                    <p>{index + 100}</p>
                    <p>{title}</p>
                    <p>{cat}</p>
                    <p>{desc}</p>
                    <p><img src={url} /></p>
                </div>
            ))}
        </>
    )
}
export default App