import React from 'react'

export default function FlexBox() {
    return (
        <>
            <div className='first-component'>
                <div className='first__div'>First Div
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi aliquam sapiente doloribus ea? Sunt consectetur eaque
                    beatae nam amet totam temporibus quo.
                    Consectetur alias sit maxime dolorum quaerat voluptate reiciendis.</div>
                <div className='first-component--component'>
                    <div className='second__div'>Second Div
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi aliquam sapiente doloribus ea? Sunt consectetur eaque
                        beatae nam amet totam temporibus quo.
                        Consectetur alias sit maxime dolorum quaerat voluptate reiciendis.</div>
                    <div className='third__div'>Third Div
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi aliquam sapiente doloribus ea? Sunt consectetur eaque
                        beatae nam amet totam temporibus quo.
                        Consectetur alias sit maxime dolorum quaerat voluptate reiciendis.
                    </div>
                </div>
            </div>

            <div className='second-component'>
                <div className='second-component--first__part'>
                    <div className='first__div'>
                        Second Component's First Div
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi aliquam sapiente doloribus ea? Sunt consectetur eaque
                        beatae nam amet totam temporibus quo.
                        Consectetur alias sit maxime dolorum quaerat voluptate reiciendis.
                    </div>
                    <div className='second__div'>
                        Second Component's Second Div
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi aliquam sapiente doloribus
                    </div>
                </div>

                <div className="second-component--second__part">
                    <div className='third__div'>
                        Second Component's Third Div
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi aliquam sapiente doloribus ea?
                        Second Component's Fourth Div
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi aliquam sapiente doloribus ea?
                    </div>
                    <div className='last__div'>
                        Second Component's Fourth Div
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi aliquam sapiente doloribus ea? Sunt consectetur eaque
                        beatae nam amet totam temporibus quo.
                        Consectetur alias sit maxime dolorum quaerat voluptate reiciendis.
                    </div>
                </div>
            </div>
        </>
    )
}
