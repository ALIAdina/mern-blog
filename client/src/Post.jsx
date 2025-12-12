import React from 'react'

function Post() {
    return (
        <div className="post">
            <div className="image">
                <img src="https://techcrunch.com/wp-content/uploads/2022/12/airco-Large.jpeg?resize=668,393" alt="" className="" />

            </div>
            <div className='texts'>
                <h2 className="">EcoFlow Wave 2: Portable air conditioner and heater</h2>
                <p className="info">
                    <a href="" className="author">dawid paszko</a>
                    <time>2023-01-06 16:45</time>

                </p>
                <p className='summary'>It’s not exactly a powerhouse in terms of cooling or heating, but for a portable, battery-powered unit, the upgraded EcoFlow Wave 2 is a welcome breath of fresh (or hot) air. With the add-on battery, it can run for up to 8 hours on a charge, and at 14 kg (33 lb), it’s reasonably portable as well.

                    The heating/cooling unit packs 5,100 BTUs of cooling and 6,100 BTUs of heating — on par with an entry-level window AC unit. It’s enough to cool or heat a room or a small space such as an RV — assuming the RV itself is well insulated.</p>

            </div>
        </div>
    )
}

export default Post
