import React from 'react';

const Contactus = () => {
    return (
        <div className='lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 bg-slate-200 px-4 lg:px-20 py-5 items-center'>
            <div className='mb-3'>
                <h1 className='text-3xl font-bold'>Get In Touch</h1>
                <p className='text-xl font-normal'>Never forget contact with me</p>
                <address>Bashaboo, Dhaka 1230</address>
                <address>abdutlldinfo30@gmail.com</address>
                <address>+8801796682951</address>
            </div>
            <div className='w-4/5 mx-auto'>
                <form>
                    <div className="form-control w-full mb-2">
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full mb-2">
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control mb-2">
                        <textarea name='message' className="textarea textarea-bordered h-24" placeholder="What;s is your mind?"></textarea>
                    </div>
                    <button className='btn btn-warning mt-2 w-36 mx-auto'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contactus;