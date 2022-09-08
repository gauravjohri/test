import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUserInfo } from './reducers/counter'

const Home = () => {
    const tree = [
        { cname: 'c1', parent: 'default' },
        { cname: 'c2', parent: 'c1' },
        { cname: 'c3', parent: 'c2' },
        { cname: 'c4', parent: 'c3' },
        { cname: 'c5', parent: 'c4' },
        { cname: 'c6', parent: 'c4' },
        { cname: 'c7', parent: 'c2' },
        { cname: 'c8', parent: 'c1' },
        { cname: 'c8', parent: 'c1' },
        { cname: 'c8', parent: 'c1' },
        { cname: 'c8', parent: 'c1' },
        { cname: 'c8', parent: 'c6' },
    ]
    const gtree = (d, parent = 'default') => d.filter(el => el.parent === parent).map(ell => ({ ...ell, childrens: gtree(d, ell.cname) }))

    const ff = gtree(tree)
    let dds = []
    const gtree2 = (d, parent = 'default') => {

        d.map(el => {
            if (el.parent == parent) {
                const { childrens, ...rest } = el;
                dds.push(rest)
                //console.log(JSON.stringify(dds, null, 4))

            }

            if (el.hasOwnProperty('childrens')) {
                gtree2(el.childrens, parent)

            }
        })
        return dds
    }
    const dispatch = useDispatch()    // console.log(JSON.stringify(gtree2(ff, 'c4'), null, 4))
    dispatch(addUserInfo(gtree(tree)))
    return (
        <>
            <button onClick={() => console.log(JSON.stringify(gtree(tree), null, 4))}>Click</button>
            <button onClick={() => console.log(JSON.stringify(gtree2(ff, 'c1'), null, 4))}>Click2</button>
            <button onClick={() => console.log(JSON.stringify(gtree2(ff, 'c6'), null, 4))}>Click3</button>
        </>
    )
}

export default Home