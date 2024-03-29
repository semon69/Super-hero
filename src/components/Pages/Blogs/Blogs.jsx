import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='max-w-7xl mx-auto text-white p-5 mb-8'>
            <div className='space-y-1 md:flex gap-8'>
                <img className='md:w-[600px] w-full' src="https://i.ytimg.com/vi/yadjfgDBSiM/maxresdefault.jpg" alt="" />
                <div className='md:w-1/2 w-full'>
                    <h1 className='font-bold'>Question: </h1>
                    <p>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                    <p cla
                        ssName='font-bold'>Answer:</p>
                    <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. Access token and refresh token shouldn't be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.</p>
                </div>
            </div>
            <div className='space-y-1 my-8 md:flex gap-8'>
                <img className='md:w-[600px] w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaif2kRseY3rO8BhE9HVzkcUcYyzPbxcgph3mz6APokOTVTMMSFBs4IXTZCekY1_N0OQ&usqp=CAU" alt="" />
                <div className='md:w-1/2 w-full'>
                    <h1 className='font-bold'>Question: </h1>
                    <p>Compare SQL and NoSQL databases?</p>
                    <p className='font-bold'>Answer:</p>
                    <div>
                        <p>SQL databases are relational, and NoSQL databases are non-relational.</p>
                        <p>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data</p>
                        <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
                        <p>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                        <p>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                </div>
            </div>
            <div className='space-y-1 md:flex gap-8'>
                <img className='md:w-[600px] w-full' src="https://media.licdn.com/dms/image/D4D12AQEDs-i0fLEarQ/article-cover_image-shrink_720_1280/0/1677307548915?e=2147483647&v=beta&t=aMTKZ3dw9toXwws4iwj9UoitwdVtz6XQigNh0TsDaCM" alt="" />
                <div className='md:w-1/2 w-full'>
                    <h1 className='font-bold'>Question: </h1>
                    <p>What is express js? What is Nest JS ?</p>
                    <p className='font-bold'>Answer:</p>
                    <div>
                        <p>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.</p>
                        <p>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
                    </div>
                </div>
            </div>
            <div className='space-y-1 my-8 md:flex gap-8'>
                <img className='md:w-[600px] w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0SCtZPWxM22GtMnPitW3_mT7nXbdlW4BZnHIl_gTcrwY2hHyeaBTv6KV4OeIIkytMLU&usqp=CAU" alt="" />
                <div className='md:w-1/2 w-full'>
                    <h1 className='font-bold'>Question: </h1>
                    <p>What is MongoDB aggregate and how does it work ?</p>
                    <p className='font-bold'>Answer:</p>
                    <p>What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;