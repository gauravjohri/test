import { useEffect, useState } from "react"
const Api = () => {
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(10)
    const [loader, setLoader] = useState(false)
    const getData = async () => {
        setLoader(true)
        setLimit(limit + 10)
        const value = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
        const ddata = await value.json()
        setData(ddata)
        setLoader(false)
    }
    useEffect(() => {
        getData()
    }, getData)
    return (
        <>
            <table border={1}>
                {data.map(({ title, id, thumbnailUrl }, i) => (
                    <tr key={i}>
                        <td>{id}</td>
                        <td><img src={thumbnailUrl} /></td>
                        <td>{title}</td>
                    </tr>
                ))}
            </table>
            {loader && <p>Please Wait...</p>}
            <button onClick={getData}>Load More ...</button>
        </>
    )
}
export default Api