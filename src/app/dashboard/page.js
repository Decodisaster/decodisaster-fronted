import React from 'react'

export default async function Dashboard() {
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    });
    return (
        <div className='text-4xl text-white'>index</div>
    )
}